let links = [
    {
        name: 'Privacy',
    },
    {
        name: 'Terms',
    },
    {
        name: 'Advertising',
    },
    {
        name: 'Ad Choices',
    },
    {
        name: 'Cookies',
    },
    {
        name: 'More',
    },
];

/**
 * left menu footer
 *
 * @returns FC
 */
const ListFooter = () => {
    return (
        <ul className="flex place-content-start leading-tight capitalize place-items-center w-full flex-wrap gap-x-1 p-2">
            {
                // links generation
                links.map(l => <li className="text-xs" key={l.name}><a href="#" className="hover:underline">{l.name}</a> <span>&#46;</span></li>)
            }
            <li className="text-xs"><a href="#" className="font-medium">Meta &copy; {new Date().getFullYear()}</a></li>
        </ul>
    )
}

export default ListFooter
