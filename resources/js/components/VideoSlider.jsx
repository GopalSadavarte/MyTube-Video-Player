import React from 'react'
import { Link } from '@inertiajs/react'
import logo from '../../../public/img/logo.png'

export default function VideoSlider ({ videos }) {
    return (
        <div className='side-video-container my-2 h-auto mx-4 w-[25%] '>
            {videos.map((video, key) => {
                return (
                    <Link
                        href={
                            '/show/' +
                            video.video.split('videos/')[1].split('.')[0]
                        }
                    >
                        <div
                            className='video h-fit my-8 w-full ml-2 hover:bg-gray-800'
                            key={key}
                        >
                            <video
                                src={video.video}
                                className='h-36 w-full object-cover rounded-md'
                            ></video>
                            <div className='desc flex'>
                                <img
                                    src={logo}
                                    alt='profile'
                                    className='rounded-full size-9 my-3 object-cover'
                                />
                                <figcaption className='mx-3 text-xl block'>
                                    {video.v_name}
                                    <div className='flex gap-x-2 text-sm'>
                                        <small>
                                            {video.channel.channel_name}
                                        </small>
                                        <small>{'views: ' + video.views}</small>
                                        <small>{'likes: ' + video.likes}</small>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
