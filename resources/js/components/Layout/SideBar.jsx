import { usePage } from '@inertiajs/react'
import Li from '../Elements/Li'
import { useContext, useState } from 'react'
import { ToggleContext } from '../Elements/ToggleMenuContext'
import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineLike,
    AiOutlineBulb,
    AiFillLike,
    AiFillBulb,
    AiOutlinePlaySquare,
    AiOutlineClockCircle,
    AiFillPlaySquare,
    AiFillClockCircle,
    AiOutlinePlayCircle,
    AiFillPlayCircle,
    AiFillCiCircle,
    AiOutlineUser
} from 'react-icons/ai'
import { FaHistory, FaGreaterThan } from 'react-icons/fa'
import {
    MdPlaylistPlay,
    MdSubscriptions,
    MdOutlineVerifiedUser
} from 'react-icons/md'

export default function SideBar ({ subscriptions }) {
    const page = usePage()
    const [scrollDisplay, setScrollDisplay] = useState(false)
    const toggle = useContext(ToggleContext)
    const active = url => {
        return url === page.url
    }
    return (
        <aside className='mt-0 flex'>
            <div
                className={`w-[15rem] bg-gray-900 text-white h-screen overflow-scroll overflow-x-hidden ${
                    toggle[0] ? 'hidden' : ''
                }`}
                onMouseEnter={e => {
                    setScrollDisplay(true)
                }}
                onMouseLeave={e => {
                    setScrollDisplay(false)
                }}
                style={
                    scrollDisplay
                        ? { scrollbarWidth: '' }
                        : { scrollbarWidth: 'none' }
                }
                id='sidebar'
            >
                <ul className='w-60 border-b-[1px] border-gray-600'>
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
                        url='/j'
                        IconOutline={
                            <AiOutlinePlayCircle className='my-auto text-2xl' />
                        }
                        IconFill={
                            <AiFillPlayCircle className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Shorts'
                    />
                    <Li
                        url='/j'
                        IconOutline={
                            <MdSubscriptions className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Subscription'
                    />
                </ul>
                <ul className='w-60 border-b-[1px] border-gray-600'>
                    <li className='flex mx-5 my-2 gap-2'>
                        <small className='text-[1rem] my-auto'>You</small>
                        <FaGreaterThan className='my-auto text-[0.8rem] font-extrabold' />
                    </li>
                    <Li
                        url='/j'
                        IconFill={
                            <AiFillPlaySquare className='my-auto text-2xl' />
                        }
                        IconOutline={
                            <AiOutlinePlaySquare className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Your videos'
                    />
                    <Li
                        url='/j'
                        IconFill={
                            <AiFillClockCircle className='my-auto text-2xl' />
                        }
                        IconOutline={
                            <AiOutlineClockCircle className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Watch later'
                    />
                    <Li
                        url='/j'
                        IconOutline={<FaHistory className='my-auto text-2xl' />}
                        func={active}
                        linkName='History'
                    />
                    <Li
                        url='/j'
                        IconOutline={
                            <MdPlaylistPlay className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Playlists'
                    />
                    <Li
                        url='/i'
                        IconFill={<AiFillLike className='my-auto text-2xl' />}
                        IconOutline={
                            <AiOutlineLike className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Liked videos'
                    />
                    <Li
                        url='/j'
                        IconFill={<AiFillBulb className='my-auto text-2xl' />}
                        IconOutline={
                            <AiOutlineBulb className='my-auto text-2xl' />
                        }
                        func={active}
                        linkName='Your courses'
                    />
                </ul>
                <ul className='w-60 my-3 border-b-[1px] border-gray-600'>
                    <li className='flex mx-5 my-2 gap-2'>
                        <small className='text-[1rem] my-auto'>
                            Subscriptions
                        </small>
                    </li>
                    {subscriptions.map((channel, key) => {
                        return (
                            <Li
                                key={key}
                                url={'channel/' + channel.channel.channel_name}
                                IconOutline={
                                    <img
                                        src={channel.channel.profile_picture}
                                        alt={
                                            <AiFillCiCircle className='text-xl' />
                                        }
                                        className='rounded-full object-contain size-6'
                                    />
                                }
                                func={active}
                                linkName={channel.channel.channel_name}
                            />
                        )
                    })}
                </ul>
            </div>
            <div
                className={`hidden-side-element w-24 bg-gray-900 text-white ${
                    toggle[0] ? '' : 'hidden'
                }`}
            >
                <ul className='w-fit p-1 -mx-4'>
                    <Li
                        url='/'
                        linkName='Home'
                        IconOutline={
                            <AiOutlineHome className='text-2xl mx-3' />
                        }
                        IconFill={<AiFillHome className='text-2xl mx-3' />}
                        func={active}
                        hiddenSidebar={true}
                    />
                    <Li
                        url={'/hdgf'}
                        linkName='Likes'
                        IconOutline={
                            <AiOutlineLike className='text-2xl mx-3' />
                        }
                        IconFill={<AiFillLike className='text-2xl mx-3' />}
                        func={active}
                        hiddenSidebar={true}
                    />
                    <Li
                        url={'/hgdh'}
                        IconOutline={
                            <AiOutlinePlayCircle className='text-2xl mx-3' />
                        }
                        IconFill={
                            <AiFillPlayCircle className='text-2xl mx-3' />
                        }
                        func={active}
                        linkName='Shorts'
                        hiddenSidebar={true}
                    />
                    <Li
                        url={'/dh'}
                        IconOutline={
                            <MdSubscriptions className='text-2xl mx-3' />
                        }
                        func={active}
                        linkName='Subscription'
                        hiddenSidebar={true}
                    />
                    <Li
                        url='/hgdh'
                        IconOutline={
                            <AiOutlineUser className='text-2xl mx-3' />
                        }
                        IconFill={
                            <MdOutlineVerifiedUser className='text-2xl mx-3' />
                        }
                        func={active}
                        linkName='You'
                        hiddenSidebar={true}
                    />
                </ul>
            </div>
        </aside>
    )
}
