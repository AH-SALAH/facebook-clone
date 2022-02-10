import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import CustomHead from '../components/CustomHead'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
// add time ago locale
TimeAgo.setDefaultLocale(en.locale)
TimeAgo.addLocale(en)

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <CustomHead />
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
