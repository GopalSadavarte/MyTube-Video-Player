import { usePage, Link } from '@inertiajs/react'
import Li from '../Elements/Li'
import { useContext } from 'react'
import { ToggleContext } from '../Elements/ToggleMenuContext'
import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineFieldTime,
    AiOutlineVideoCamera,
    AiOutlineLike,
    AiOutlineBulb,
    AiFillVideoCamera,
    AiFillLike,
    AiFillBulb,
    AiFillTrademarkCircle
} from 'react-icons/ai'

export default function SideBar () {
    const page = usePage()
    const toggle = useContext(ToggleContext)
    const active = url => {
        return url === page.url
    }
    return (
        <aside className='mt-0 flex'>
            <div
                className={`w-fit bg-gray-900 text-white h-screen overflow-scroll overflow-x-hidden transition-transform ${
                    toggle[0] ? '-translate-x-80' : ''
                }`}
                id='sidebar'
            >
                <ul className='w-60'>
                    <Li
                        url='/'
                        IconFill={<AiFillHome className='my-auto text-2xl' />}
                        IconOutline={
                            <AiOutlineHome className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Home'
                    />
                    <Li
                        url='/'
                        IconFill={
                            <AiFillTrademarkCircle className='my-auto text-2xl' />
                        }
                        IconOutline={
                            <AiOutlineFieldTime className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Home'
                    />
                    <Li
                        url='/'
                        IconFill={
                            <AiFillVideoCamera className='my-auto text-2xl' />
                        }
                        IconOutline={
                            <AiOutlineVideoCamera className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Home'
                    />
                    <Li
                        url='/'
                        IconFill={<AiFillLike className='my-auto text-2xl' />}
                        IconOutline={
                            <AiOutlineLike className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Home'
                    />
                    <Li
                        url='/'
                        IconFill={<AiFillBulb className='my-auto text-2xl' />}
                        IconOutline={
                            <AiOutlineBulb className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Home'
                    />
                </ul>
            </div>
            <div className='hidden-side-element bg-gray-900 text-white hidden'>
                <ul>
                    <li>
                        <Link>
                            <AiFillHome />
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
