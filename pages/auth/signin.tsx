import { getProviders, signIn, getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Image from "next/image";
import CustomHead from "../../components/CustomHead";
import { useRouter } from "next/router";

export default function SignIn({ providers }: { providers?: object }) {
    let router = useRouter();
    return (
        <div className="bg-light dark:bg-dark w-screen h-screen grid place-content-center" >
            <CustomHead title="Login" />
            {
                Object.values(providers || {}).map((provider) => (
                    <div key={provider?.name} className="flex">
                        <button
                            role={"button"}
                            type="button"
                            className={
                                `px-3 py-2 rounded-3xl shadow-md text-zinc-800 bg-zinc-200 hover:bg-zinc-300 font-medium flex place-content-center place-items-center gap-2`
                            }
                            onClick={() => signIn(provider?.id, { redirect: false, callbackUrl: encodeURI(''+(router?.query?.callbackUrl || '/')) })}
                        >
                            <Image src={'/logo.svg'} width={30} height={30} className="rounded-full" alt={'logo'} />
                            Sign in with {provider?.name} 🔒
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(ctx: NextPageContext) {
    let providers = await getProviders();
    let session = await getSession(ctx);

    // if there is a session getout of here
    if (session) {
        return {
            redirect: {
                destination: encodeURI(''+(ctx?.query?.calllbackUrl || '/')),
                permenant: true
            }
        }
    }

    return {
        props: { providers },
    }
}