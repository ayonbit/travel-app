import db from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcryptjs from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPass = await bcryptjs.compare(password, user.password);

        if (!isCorrectPass) {
          throw new Error("Invalid credentials");
        }

        const { password: _, ...currentUser } = user;

        return currentUser;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.isAdmin = user.isAdmin || false;
      }
      return token;
    },
    session({ session, token }) {
      if (typeof token.isAdmin !== "undefined") {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
