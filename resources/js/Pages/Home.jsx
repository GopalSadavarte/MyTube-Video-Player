import Layout from '../components/Layout/Layout'
import { Head, Link, router } from '@inertiajs/react'
import { useContext, useState, useRef, createRef } from 'react'
import { ToggleContext } from '../components/Elements/ToggleMenuContext'
import Slider from '../components/Slider'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

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
    const [volumeClick, setVolumeClick] = useState(false)
    const ref = createRef()
    const videoRef = useRef(ref)
    return (
        <Layout>
            <Head title='MyTube' />
            <div
                className={`child transition-transform overflow-scroll bg-gray-900 text-white h-screen ${
                    toggle[0] ? ' w-full' : 'w-screen'
                }`}
            >
                <Slider elements={elements} />
                <div className='w-full flex-wrap flex gap-3 my-2'>
                    {data.map((d, key) => {
                        return (
                            <div
                                className='h-60 w-[32%] overflow-hidden relative'
                                onMouseLeave={e => {
                                    setVolumeClick(false)
                                }}
                                key={key}
                            >
                                <Link
                                    href={
                                        '/show/' +
                                        d.video
                                            .split('videos/')[1]
                                            .split('.')[0]
                                    }
                                >
                                    <video
                                        ref={videoRef}
                                        src={d.video}
                                        className='w-full h-52 object-cover rounded-md my-2'
                                        onMouseOver={e => {
                                            if (!volume) {
                                                e.currentTarget.volume = 0
                                            } else {
                                                e.currentTarget.volume = 1
                                            }
                                            e.target.play()
                                        }}
                                        onMouseLeave={e => {
                                            if (!volumeClick) e.target.pause()
                                            e.currentTarget.currentTime = 0
                                        }}
                                    ></video>

                                    <div className='video-info w-full flex'>
                                        <img
                                            // src={d.channel_profile}
                                            alt='profile'
                                            className='h-5 w-5 rounded object-cover my-4 mx-4 '
                                        />
                                    </div>
                                </Link>
                                <MdVolumeOff
                                    className={`absolute top-2 z-10 cursor-pointer  ${
                                        volume ? 'hidden' : ''
                                    }`}
                                    onClick={e => {
                                        setVolumeClick(true)
                                        setVolume(true)
                                    }}
                                />
                                <MdVolumeUp
                                    className={`absolute top-2 z-10 cursor-pointer
                                    ${volume ? '' : 'hidden'}`}
                                    onClick={e => {
                                        setVolumeClick(true)
                                        setVolume(false)
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
