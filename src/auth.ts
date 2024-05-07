import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";

export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, request) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          email: user.email,
        };
      }

      return token;
    },
  },

  pages: {
    signIn: "/auth/sign-in",
  },
});
