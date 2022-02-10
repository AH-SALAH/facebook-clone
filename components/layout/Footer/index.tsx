import Link from "next/link"

/**
 * app footer
 *
 * @returns FC
 */
const Footer = () => {
    return (
        <footer className="flex place-content-center w-full">
            {/* &copy; {new Date().getFullYear()} */}
            <div className="flex fixed bottom-5 right-5" aria-label="New message">
                <Link href={'/'} shallow>
                    <a
                        className={`p-2 cursor-pointer w-12 h-12 flex place-content-center place-items-center rounded-full shadow-md bg-zinc-100 hover:bg-zinc-300 dark:text-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600`}
                        title={'New message'}
                    >
                        <span className="bg-repeat w-5 h-5 flex filter dark:invert contrast-200" style={{ "backgroundImage": 'url("/img/collection-3.png")', "backgroundPosition": "-42px 170px" }}></span>
                    </a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
