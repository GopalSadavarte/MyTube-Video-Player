import { Link } from '@inertiajs/react'
export default function Li ({
    url,
    linkName,
    IconFill = null,
    IconOutline,
    func,
    hiddenSidebar = false
}) {
    return !hiddenSidebar ? (
        <li
            className={`p-3 mx-3 rounded-md hover:bg-gray-800  ${
                func(url) ? 'bg-gray-700' : ''
            }`}
        >
            <Link href={url} className='flex gap-6'>
                {IconFill !== null
                    ? func(url)
                        ? IconFill
                        : IconOutline
                    : IconOutline}
                <figcaption className='text-sm'>{linkName}</figcaption>
            </Link>
        </li>
    ) : (
        <li className='hover:bg-gray-800 rounded-lg mx-3 p-3'>
            <Link href={url} className='block'>
                {IconFill !== null
                    ? func(url)
                        ? IconFill
                        : IconOutline
                    : IconOutline}
                <figcaption className='text-[0.7rem] mx-3'>
                    {linkName}
                </figcaption>
            </Link>
        </li>
    )
}
