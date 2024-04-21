import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';
import { query } from '../../../lib/db';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        const { rows } = await query('SELECT * FROM users WHERE email = $1', [email]);
        const [user] = rows;

        if (!user) {
          throw new Error('Invalid email or password');
        }

        const isValidPassword = await verifyPassword(password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid email or password');
        }

        return user;
      },
    }),
    // ... other providers like Google, Facebook, etc.
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Update token with user data
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Update session with user data
      if (token) {
        session.userId = token.userId;
        session.email = token.email;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);