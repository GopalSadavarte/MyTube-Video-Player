import Layout from '../components/Layout/Layout'
import { Head, Link } from '@inertiajs/react'
import { useContext, useState } from 'react'
import { ToggleContext } from '../components/Elements/ToggleMenuContext'
import Slider from '../components/Slider'
import { MdVolumeOff, MdVolumeUp, MdMoreVert } from 'react-icons/md'
import VideoShow from '../components/VideoShow'
import MenuList from '../components/MenuList'

export default function Home ({ data }) {
    const toggle = useContext(ToggleContext)
    const elements = [
        'All',
        'Technology',
        'Trending',
        'News',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'New for you',
        'Trending',
        'News',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'New for you',
        'Trending',
        'News',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'New for you'
    ]

    const [volume, setVolume] = useState(false)
    const [videoKey, setVideoKey] = useState(null)
    const [menuDisplay, setMenuDisplay] = useState(false)
    const [displayIcon, setDisplayIcon] = useState(false)

    return (
        <Layout>
            <Head title='MyTube' />
            <div
                className={`child transition-transform overflow-scroll bg-gray-900 text-white h-screen scrollbar-width-none ${
                    toggle[0] ? ' w-full' : 'w-screen'
                }`}
            >
                <Slider elements={elements} />
                <div className='w-full flex-wrap h-screen overflow-scroll flex pl-7 gap-x-8 gap-y-2 my-2 scrollbar-width-none'>
                    {data.map((d, key) => {
                        return (
                            <div
                                className='h-auto w-[31%] overflow-hidden relative hover:bg-gray-800'
                                key={key}
                                onMouseEnter={e => {
                                    setDisplayIcon(true)
                                    setVideoKey(key)
                                }}
                            >
                                <Link
                                    href={
                                        '/show/' +
                                        d.video
                                            .split('videos/')[1]
                                            .split('.')[0]
                                    }
                                >
                                    <VideoShow
                                        d={d}
                                        volume={volume}
                                        keyValue={key}
                                        videoKey={videoKey}
                                    />
                                </Link>
                                <MdVolumeOff
                                    className={`absolute top-2 z-10 cursor-pointer ${
                                        volume && videoKey === key
                                            ? 'hidden'
                                            : ''
                                    } ${
                                        displayIcon && videoKey === key
                                            ? ''
                                            : 'hidden'
                                    }`}
                                    onClick={e => {
                                        setVolume(true)
                                        setVideoKey(key)
                                    }}
                                />
                                <MdVolumeUp
                                    className={`absolute top-2 z-10 cursor-pointer ${
                                        volume && videoKey === key
                                            ? ''
                                            : 'hidden'
                                    }${
                                        displayIcon && videoKey === key
                                            ? ''
                                            : '  hidden'
                                    }`}
                                    onClick={e => {
                                        setVolume(false)
                                        setVideoKey(key)
                                    }}
                                />
                                <button
                                    className='i-icon absolute top-56 right-0 justify-center h-fit w-fit '
                                    onClick={e => {
                                        setVideoKey(key)
                                        setMenuDisplay(true)
                                    }}
                                >
                                    <MdMoreVert className='text-2xl' />
                                </button>
                                <MenuList
                                    menuDisplay={menuDisplay}
                                    videoKey={videoKey}
                                    keyValue={key}
                                    setMenuDisplay={setMenuDisplay}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
