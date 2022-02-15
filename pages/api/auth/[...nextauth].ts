import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import { db } from "../../../firebase";
import { runTransaction, collection, query, getDocs, where, limit, doc, getDoc, addDoc, updateDoc, deleteDoc, Firestore } from "firebase/firestore";
import { FirebaseAdapter } from "../../../models/firebase/firebase-adapter";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
        })
    ],
    adapter: FirebaseAdapter(
        {
            db,
            collection,
            query,
            getDocs,
            where,
            limit,
            doc,
            getDoc,
            addDoc,
            updateDoc,
            deleteDoc,
            runTransaction
        }
    ),
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