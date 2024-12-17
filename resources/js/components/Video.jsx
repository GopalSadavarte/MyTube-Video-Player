import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'
import {
    AiOutlineLike,
    AiFillLike,
    AiOutlineUpSquare,
    AiOutlineDislike,
    AiFillDislike
} from 'react-icons/ai'
import logo from '../../../public/img/logo.png'

export default function Video ({ video }) {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)
    const [pause, setPause] = useState(false)

    return (
        <div className='h-[90vh] w-[70%] top-10 left-2 relative'>
            <video
                controls
                src={video[0].video}
                ref={videoRef}
                onClick={e => {
                    e.preventDefault()
                    if (videoRef.current.paused) {
                        videoRef.current.play()
                        setPlay(true)
                    } else {
                        videoRef.current.pause()
                        setPause(true)
                    }
                    setTimeout(() => {
                        setPlay(false)
                        setPause(false)
                    }, 400)
                }}
                className='transition-all delay-75 bg-cover h-[80vh] w-full mx-4 object-cover'
            ></video>
            <FaPlay
                className={`text-gray-100 absolute h-8 w-8 transition-all delay-75 top-52 left-2/4 ${
                    pause ? '' : 'hidden'
                } `}
            />
            <FaPause
                className={`text-gray-100 left-2/4 absolute h-8 w-8 transition-all delay-75 top-52 ${
                    play ? '' : 'hidden'
                } `}
            />
            <div className='video-info w-full flex gap-x-3 select-none mt-2 rounded-lg py-3 ml-4 bg-gray-800'>
                <div className='channel-icon w-fit px-2 cursor-pointer'>
                    <img
                        src={logo}
                        alt='Channel'
                        className='h-14 w-32 rounded-full'
                    />
                    <figcaption className='text-sm w-full text-center'>
                        {video[0].channel.channel_name}
                    </figcaption>
                </div>
                <div className='video-description h-16 py-2 block'>
                    <big className='mt-3 mx-2 text-2xl'>{video[0].v_name}</big>
                    <p className='mx-2 w-[95%] h-full overflow-y-hidden my-2'>
                        {video[0].description}
                    </p>
                </div>
            </div>
            <div className='video-options'>
                <div className='options'>
                    <ul className='flex overflow-x-scroll h-20 gap-x-5'>
                        <li className='w-fit h-full'>
                            <AiOutlineLike />
                        </li>
                        <li className='w-fit h-full'>
                            <AiOutlineDislike />
                        </li>
                        <li className='w-fit h-full'>
                            <AiOutlineUpSquare />
                        </li>
                        <li className='w-fit h-full'>
                            <button className='bg-black text-white h-10 w-20 p-3 text-center rounded-xl '>
                                subscribe
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
