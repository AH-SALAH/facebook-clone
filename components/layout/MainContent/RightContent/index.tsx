import ListFooter from "./ListFooter"
import LinkList from "./LinkList"

/**
 * Right content widget
 *
 * @returns FC
 */
const RightContent = () => {
    return (
        <aside className="hidden sm:flex sm:flex-col w-[11%] sticky top-0 bottom-0 pr-1 md:pr-0 md:w-1/5 max-h-[100%] overflow-x-hidden overflow-y-auto hide-scrollbar pt-4">
            <div className="h-full">
                <LinkList />
            </div>
            <hr className="my-2 border-zinc-300 dark:border-zinc-600" />
            <ListFooter />
        </aside>
    )
}

export default RightContent
