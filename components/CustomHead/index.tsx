import { useSession } from "next-auth/react";
import Head from "next/head"
import { useRouter } from "next/router";
import { memo, ReactChildren, SetStateAction, useState } from "react"
import { randomRange } from "../../utils/randomRange"

/**
 * custom head component
 *
 * @param {{ title?: string, children?: ReactChildren }} { title, children }
 * @returns jsx element
 */
const CustomHead = memo(function CustomHeadComp({ title, children }: { title?: string, children?: ReactChildren }) {
    let [rand] = useState<SetStateAction<number>>(randomRange(2, 22));
    let router = useRouter();
    let {data: session} = useSession();

    /**
     * return title from pathname capitalized
     *
     * @returns string
     */
    let getTitle = () => {
        let path = router?.asPath?.split('/');
        return router?.asPath !== '/' && ' | '+ path?.[path.length-1].slice(0,1).toLocaleUpperCase() + path?.[path.length-1].slice(1) || '';
    };

    return (
        <Head>
            <title>{session && `(${rand})`} {process?.env?.NEXT_PUBLIC_SITENAME} {title ? ' | '+title : getTitle() || ''}</title>
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
});

export default CustomHead;
