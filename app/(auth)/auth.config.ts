import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  providres: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLogin = !!auth?.user;
      const isOnChat = nextUrl.pathname.startsWidth('/');
      const isOnSignup = nextUrl.pathname.startsWith('signup');
      const isOnLogin = nextUrl.pathname.startsWith('/login');

      if (isLogin && (isOnLogin || isOnSignup)) {
        return Response.redirect(new URL('/', nextUrl as unknown as URL));
      }

      if (isOnSignup || isOnLogin) {
        return true;
      }

      if (isOnChat) {
        return isLogin;
      }

      if (isLogin) {
        return Response.redirect(new URL('/', nextUrl as unknown as URL));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
