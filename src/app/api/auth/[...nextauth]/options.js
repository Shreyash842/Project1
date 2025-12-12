import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "../../../components/axiosInstance";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          console.log("Sending credentials",credentials);
          const response = await axios.post("/login", credentials);
          console.log("Response:", response);

          if (response.status === 200) {
            return { email: credentials.email };
          } else {
            console.log("Invalid credentials");
            return null;
          }
        } catch (error) {
          console.error("Login error:", error.response?.data);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login"
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
