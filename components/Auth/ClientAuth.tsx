import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';
import Loading from '../Skeletons/Loading';

/**
 * authenticate on client side if no session
 *
 * @param {{ children: ReactElement, cshn?: Session }} { children, cshn }
 * @returns
 */
const ClientAuth = ({ children, cshn }: { children: ReactElement, cshn?: Session }) => {
    let { data: session, status } = useSession();
    let router = useRouter();

    useEffect(() => {
        // replace those fb redirect [#_=_] annoying suffix
        if (typeof window !== 'undefined' && router?.asPath?.match(/(.#.)/gi)) {
            router.replace(router.asPath, router.pathname, { shallow: true })
        }
        // eslint-disable-next-line
    }, []);

    if (status === 'loading') return <Loading />;

    //  if no session or not authenticated redirect to login
    if ((!session || (session && status === 'unauthenticated') || !cshn) && typeof window !== 'undefined') {
        router.replace({ pathname: '/api/auth/signin' });
        return <Loading />
    }

    return children
};

export default ClientAuth;
