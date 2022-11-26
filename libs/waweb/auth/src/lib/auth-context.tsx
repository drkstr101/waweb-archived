import {
  createClient,
  Provider,
  SupabaseClient,
  User as Principal,
  UserCredentials
} from '@supabase/supabase-js';
import { createContext } from 'react';

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] ?? 'http://localhost:8080';
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ?? 'noop';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type AuthModel = {
  user: Principal | null;
  signIn: (payload: UserCredentials) => Promise<void>;
  signInWithProvider: (provider: Provider) => Promise<void>;
  signOut: () => Promise<void>;
  isLoggedIn: boolean;
  isLoading: boolean;
  isUserLoading: boolean;
  supabase: SupabaseClient;
};

const todoNotImpl = async () => {
  throw new Error('TODO not implemented.');
};

export const AuthContext = createContext<AuthModel>({
  user: null,
  signIn: todoNotImpl,
  signInWithProvider: todoNotImpl,
  signOut: todoNotImpl,
  isLoggedIn: false,
  isLoading: false,
  isUserLoading: false,
  supabase
});
