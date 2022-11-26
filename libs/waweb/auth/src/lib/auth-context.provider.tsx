import {
  AuthChangeEvent,
  Provider,
  Session,
  User as Principal,
  UserCredentials
} from '@supabase/supabase-js';
import { url } from '@watheia/utils';
import { useMessage } from '@watheia/waweb.message';
import { ReactNode, useEffect, useState } from 'react';
import { AuthContext, supabase } from './auth-context';

const sessionApiUrl = url('/api/session').href;

const setServerSession = async (event: AuthChangeEvent, session: Session | null) => {
  await fetch(sessionApiUrl, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ event, session })
  });
};

export interface AuthProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<Principal | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isUserLoading, setUserLoading] = useState<boolean>(true);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const { handleMessage } = useMessage();

  const signIn = async (payload: UserCredentials) => {
    try {
      setLoading(true);
      const { error, message } = await fetch('/api/auth', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(payload)
      }).then((res) => res.json());
      if (error) {
        handleMessage({ title: 'Error', message: error.message, type: 'error' });
      } else if (message) {
        handleMessage({ title: 'Success', message, type: 'information' });
      }
    } catch (error) {
      console.error(error);
      handleMessage({
        message: (error as any).message || (error as any).error_description || error,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const signInWithProvider = async (provider: Provider) => {
    await supabase.auth.signIn({ provider });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const user = supabase.auth.user();
    setUserLoading(false);

    if (user) {
      setUser(user);
      setLoggedIn(true);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.info('Auth State Changed', event, session);
      const user = session?.user ?? null;
      setUserLoading(false);
      setUser(user);
      setLoggedIn(!!user);

      // update session in ssr
      await setServerSession(event, session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const value = {
    user,
    signIn,
    signInWithProvider,
    signOut,
    isLoggedIn,
    isLoading,
    isUserLoading,
    supabase
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
