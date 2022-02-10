import Image from "next/image";
import Link from "next/link";
import LinkItemH from "./LinkItemH";
import VideoIcon from "/public/img/videoplus.svg";
import SearchIcon from "/public/img/search-icon.svg";

let data = [
    {
        title: 'Marion Gordon',
        url: '/conversation/fabaaf67-b133-5f4f-8d8f-da04dab4e2a9',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=kz24rvb2"} width={28} height={28} layout="fixed" className="rounded-full" alt="Marion Gordon" />
    },
    {
        title: 'Randall Cohen',
        url: '/conversation/5b31a312-2e11-5ab4-884d-efe161536335',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=mpx93eyi"} width={28} height={28} layout="fixed" className="rounded-full" alt="Randall Cohen" />
    },
    {
        title: 'Lee Gibson',
        url: '/conversation/af3d10de-d07e-5ed5-8862-efa6317a2177',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=cku4ergk"} width={28} height={28} layout="fixed" className="rounded-full" alt="Lee Gibson" />
    },
    {
        title: 'Jordan Morgan',
        url: '/conversation/ab61d58f-2a6b-5713-9de2-6a7533c5814a',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=mdwc32p6"} width={28} height={28} layout="fixed" className="rounded-full" alt="Jordan Morgan" />
    },
    {
        title: 'Matthew Bowen',
        url: '/conversation/1713b018-4991-5799-bc60-20cca1e320c5',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=9nnbgvm9"} width={28} height={28} layout="fixed" className="rounded-full" alt="Matthew Bowen" />
    },
    {
        title: 'Bernice Klein',
        url: '/conversation/8003b382-d1a7-5aa4-b7b0-8979de2d9376',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=qe4li4xs"} width={28} height={28} layout="fixed" className="rounded-full" alt="Bernice Klein" />
    },
    {
        title: 'Bernard Chapman',
        url: '/conversation/7052b2a9-40ed-5478-bf71-d35c540068e3',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=s8wla6rj"} width={28} height={28} layout="fixed" className="rounded-full" alt="Bernard Chapman" />
    },
    {
        title: 'Iva Moreno',
        url: '/conversation/a593024e-b4b7-5f40-8a23-bc96278b6a56',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=9ehjm5k1"} width={28} height={28} layout="fixed" className="rounded-full" alt="Iva Moreno" />
    },
    {
        title: 'Jerry Carpenter',
        url: '/conversation/df2a39df-51da-517c-8df5-be4f25177f80',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=j67ricj0"} width={28} height={28} layout="fixed" className="rounded-full" alt="Jerry Carpenter" />
    },
    {
        title: 'Aaron Burns',
        url: '/conversation/8af5d458-c359-5c58-aa1a-68cd90a4ec09',
        icon: <Image src={"https://api.lorem.space/image/face?w=50&h=50&hash=cp4qijtw"} width={28} height={28} layout="fixed" className="rounded-full" alt="Aaron Burns" />
    },
];

const LinkList = () => {
    return (
        <>
            <span className={`flex place-content-between place-items-center overflow-hidden px-2 flex-wrap lg:flex-nowrap`} tabIndex={0} aria-label={'me'}>
                {/* upper header */}
                <p className="font-semibold pt-1 pb-2 dark:text-zinc-200 text-base lg:text-lg hidden md:flex order-2 lg:order-1">{'Contacts'}</p>
                {/* header options */}
                <div className="relative flex place-content-start lg:place-content-end w-full h-1/3 gap-1 order-1 lg:order-2 flex-wrap lg:flex-nowrap">
                    <Link href={'/'} shallow>
                        <a
                            className={`p-2 cursor-pointer w-8 h-8 flex place-content-start place-items-center rounded-full hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-700 gap-2`}
                            title={'New room'}
                        >
                            <VideoIcon className="fill-zinc-700 dark:fill-zinc-400" />
                        </a>
                    </Link>
                    <Link href={'/'} shallow>
                        <a
                            className={`p-2 cursor-pointer w-8 h-8 flex place-content-start place-items-center rounded-full hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-700 gap-2`}
                            title={'Search by name or group'}
                        >
                            <SearchIcon className="fill-zinc-700 dark:fill-zinc-400" />
                        </a>
                    </Link>
                    <Link href={'/'} shallow>
                        <a
                            className={`p-2 cursor-pointer w-8 h-8 flex place-content-start place-items-center rounded-full hover:bg-gray-300 dark:text-slate-100 dark:hover:bg-zinc-700 gap-2`}
                            title={'options'}
                        >
                            <span className="bg-repeat w-5 h-5 flex m-auto filter contrast-100" style={{ "backgroundImage": 'url("/img/collection-1.png")', "backgroundPosition": "-4px -136px" }}></span>
                        </a>
                    </Link>
                </div>
            </span>
            {
                // dyn generation
                data.map((l, i) => {
                    return (
                        <span key={l.title} className={`flex place-content-center place-items-center overflow-hidden`} tabIndex={0} aria-label={l.title}>
                            <LinkItemH url={'/'} title={l.title} icon={l.icon} as={l.url} />
                        </span>
                    )
                })
            }
        </>
    )
}

export default LinkList;
