import CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";
import DiscordProviders from "next-auth/providers/discord";
import prisma from "@/lib/prisma";

export const authOptions  = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials:{
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.username || !credentials.password){
                    return null;
                }
                try {
                    const dbUser = await prisma.user.findFirst({
                        where: {
                            username: credentials.username
                        }
                    });
                    if (dbUser && dbUser.password === credentials.password) {
                        // eslint-disable-next-line no-unused-vars
                        const { password, createdAt, ...dbUserWithoutPassword } = dbUser;
                        return dbUserWithoutPassword;
                    }

                } catch (error) {
                    console.error("An error during login authorization: ", error);
                    return null;
                }
                return null;
            }
        }),
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        DiscordProviders({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),
    ],
};

export default authOptions;