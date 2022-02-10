import ListFooter from "./ListFooter"
import LinkList from "./LinkList"

/**
 * app left aside menu
 *
 * @returns FC
 */
const LeftContent = () => {
    return (
        <aside role={'navigation'} className="w-[20%] sm:w-[11%] sticky top-0 bottom-0 pr-1 md:pr-0 md:w-1/5 max-h-[100vh] overflow-x-hidden overflow-y-auto hide-scrollbar hover:show-scrollbar pt-4">
            <div className="h-full">
                <LinkList />
            </div>
            <hr className="mt-2 border-zinc-600" />
            <ListFooter />
        </aside>
    )
}

export default LeftContent
