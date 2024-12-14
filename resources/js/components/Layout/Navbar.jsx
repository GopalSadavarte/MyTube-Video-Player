import logo1 from '../../../../public/img/logo.png'
import { Link, router } from '@inertiajs/react'
import { ToggleContext } from '../Elements/ToggleMenuContext'
import { useContext, useRef, useState } from 'react'
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiFillAudio,
    AiOutlineBell,
    AiOutlineUser,
    AiOutlinePlus
} from 'react-icons/ai'
import { gsap } from 'gsap'

export default function Navbar () {
    const toggle = useContext(ToggleContext)
    const searchLinkRef = useRef()
    const menuRef = useRef(null)
    const [searchQuery, setQuery] = useState({})
    const handleSearch = e => {
        e.preventDefault()
        if (e.key === 'Enter' && searchQuery !== null && searchQuery !== '') {
            router.post('/elastic', searchQuery, {
                onSuccess: res => {
                    console.log(res)
                }
            })
        }
    }

    const animate = () => {
        gsap.to('.menu-icon', {
            backgroundColor: 'rgb(107, 107, 109)',
            ease: 'linear'
        })
        setTimeout(() => {
            gsap.to('.menu-icon', {
                backgroundColor: 'rgb(23,23,23)',
                ease: 'linear'
            })
        }, 1000)
    }
    return (
        <header id='Navbar'>
            <div className='navbar-container h-14 w-full bg-gray-900 px-4'>
                <div className='navbar flex select-none w-fit bg-gray-900 text-white'>
                    <div className='toggle-icon w-fit my-3 text-center rounded-full menu-icon'>
                        <AiOutlineMenu
                            ref={menuRef}
                            className='my-auto h-full mx-2 text-xl rounded-full cursor-pointer'
                            onClick={() => {
                                animate()
                                toggle[1](!toggle[0])
                            }}
                        />
                    </div>
                    <div id='navbar-heading'>
                        <Link href='/' className='flex'>
                            <img
                                src={logo1}
                                alt='MyTube'
                                className='h-14 w-20 my-auto'
                            />
                            <figcaption className='text-2xl my-auto -mx-2 font-mono'>
                                MyTube
                            </figcaption>
                        </Link>
                    </div>
                    <div
                        className='search-bar my-auto ml-36 flex relative'
                        id='search-input'
                    >
                        <input
                            onKeyUp={handleSearch}
                            type='text'
                            name='search'
                            id='search'
                            value={searchQuery.query}
                            onChange={e => {
                                setQuery({ query: e.target.value })
                            }}
                            autoComplete='off'
                            placeholder='Search'
                            className='mx-auto w-full outline-none bg-gray-900 py-1 px-5 rounded-tl-full rounded-bl-full border border-gray-600 focus:border-blue-900'
                        />
                        <div className='px-3 bg-gray-600 rounded-br-full rounded-tr-full cursor-pointer'>
                            <Link
                                href={
                                    `/fetch/` +
                                    (searchQuery !== '' && searchQuery !== null
                                        ? searchQuery
                                        : 'not')
                                }
                                as='button'
                                ref={searchLinkRef}
                            >
                                <AiOutlineSearch className='text-2xl mt-1 mx-2' />
                            </Link>
                        </div>
                    </div>
                    <div
                        className='bg-gray-700 rounded-full h-full p-2 my-auto mx-3 hover:bg-gray-800 transition-all delay-75'
                        title='Search by your vice!'
                    >
                        <AiFillAudio className='text-xl cursor-pointer' />
                    </div>
                    <div className='flex mt-2 mb-3  px-1 gap-7 ml-40'>
                        <Link>
                            <div
                                className='rounded-full h-full flex gap-2 p-2 my-auto bg-gray-700 transition-all delay-75 hover:bg-gray-800'
                                title='create new!'
                            >
                                <AiOutlinePlus className='text-xl cursor-pointer' />
                                <figcaption className='text-sm mr-2'>
                                    Create
                                </figcaption>
                            </div>
                        </Link>
                        <Link>
                            <div
                                className='rounded-full h-full p-2 my-auto bg-gray-700  hover:bg-gray-800 transition-all delay-75'
                                title='see notifications'
                            >
                                <AiOutlineBell className='text-xl cursor-pointer' />
                            </div>
                        </Link>
                        <Link href='/user-dashboard'>
                            <div className='rounded-full h-full p-2 my-auto bg-red-600 transition-all delay-75'>
                                <AiOutlineUser className='text-xl cursor-pointer' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
