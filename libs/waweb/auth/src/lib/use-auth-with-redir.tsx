import Router from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './use-auth';

export const useAuthWithRedir = (redirectTo = '/') => {
  const context = useAuth();
  const { isUserLoading, isLoggedIn } = context;

  useEffect(() => {
    if (!isUserLoading && !isLoggedIn) {
      Router.push(redirectTo);
    }
  }, [isUserLoading, isLoggedIn, redirectTo]);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return { ...context, user: context.user! };
};
