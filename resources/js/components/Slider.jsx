import { Link } from '@inertiajs/react'

export default function Slider ({ elements }) {
    return (
        <section id='user-slider'>
            <div className='container'>
                <div className='elements overflow-x-scroll' id='slider'>
                    <ul className='flex gap-2'>
                        {elements.map((ele, idx) => {
                            return (
                                <li
                                    className='h-fit w-fit px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 links'
                                    key={idx}
                                >
                                    <Link href='' className='' as='button'>
                                        {ele}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
