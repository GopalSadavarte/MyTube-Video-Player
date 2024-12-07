import { Link } from '@inertiajs/react'
export default function Li ({ url, linkName, IconFill, IconOutline, func }) {
    return (
        <li
            className={`p-3 mx-3 rounded-md hover:bg-gray-800  ${
                func(url) ? 'bg-gray-700' : ''
            }`}
        >
            <Link href={url} className='flex gap-9'>
                {func(url) ? IconFill : IconOutline}
                <figcaption>{linkName}</figcaption>
            </Link>
        </li>
    )
}
