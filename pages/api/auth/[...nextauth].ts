import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
        })
    ],
    // custom sign page
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        redirect({ url, baseUrl }) {
            let _url = encodeURI(url)/*.replace(/(#_=_|#)$/gi, '')*/;
            let _baseUrl = encodeURI(baseUrl)/*.replace(/(#_=_|#)$/gi, '')*/;

            if (_url.startsWith(_baseUrl)) return _url;
            // Allows relative callback URLs
            else if (_url.startsWith("/")) return new URL(_url, _baseUrl).toString();
            return _baseUrl;
        }
    }
})