import React from 'react'
import { Link } from '@inertiajs/react'

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
                        <div className='video h-40 my-8 w-full' key={key}>
                            <video
                                src={video.video}
                                className='h-32 w-full object-cover rounded-md'
                            ></video>
                            <div className='desc flex'>
                                <img
                                    // src={video.profile}
                                    alt='profile'
                                    className='rounded-full h-7 w-7 object-cover'
                                />
                                <figcaption className='mx-3 text-xl block'>
                                    {video.v_name}
                                    <div className='flex'>
                                        <small>channel name</small>
                                        <small>view : 8000</small>
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
