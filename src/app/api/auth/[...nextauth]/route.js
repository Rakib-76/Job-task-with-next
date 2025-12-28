import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "google") {
                try {
                    const { email, name, image } = user;
                    const userCollection = await dbConnect(collectionNameObj.userCollection);

                    // Check if user already exists
                    const userExists = await userCollection.findOne({ email });

                    if (!userExists) {
                        // Insert new user
                        await userCollection.insertOne({
                            name,
                            email,
                            image,
                            provider: "google",
                            role: "user",
                            createdAt: new Date(),
                        });
                    }
                    return true;
                } catch (error) {
                    console.log("Error in creating user in DB: ", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session }) {
            try {
                const userCollection = await dbConnect(collectionNameObj.userCollection);
                const dbUser = await userCollection.findOne({ email: session.user.email });

                if (dbUser) {
                    session.user.role = dbUser.role;
                }
                return session;
            } catch (error) {
                console.log("Error in fetching user session data: ", error);
                return session;
            }
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
