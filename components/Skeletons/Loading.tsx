import { ReactPropTypes } from "react";

/**
 * simple loading skeleton
 *
 * @author AH.SALAH
 * @export
 * @param {{ color?: string, other?: ReactPropTypes }} { color = 'border-blue-700', other }
 * @returns
 */
export default function Loading({ color = 'border-blue-700', other }: { color?: string, other?: ReactPropTypes }) {
    return (
        <div className='grid place-content-center bg-zinc-400 w-screen h-screen text-white'>
            <div className={`rounded-full w-10 h-10 ${color} duration-75 border-2 border-r-0 animate-spin`} {...other}></div>
        </div>
    )
}