import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

/**
 * HOC to redirect if there is no session
 *
 * @param {(arg0: GetServerSidePropsContext, arg1: Session) => any} gssp
 * @returns
 */
const withServerAuth = (gssp: (arg0: GetServerSidePropsContext, arg1: Session) => any) => {
    return async (ctx: GetServerSidePropsContext) => {
        let session = await getSession(ctx);

        if (!session) {
            return {
                redirect: {
                    destination: encodeURI('/api/auth/signin'),
                    permenant: false
                }
            }
        }

        return gssp(ctx, session);
    }
};

export default withServerAuth;