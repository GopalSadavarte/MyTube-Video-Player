import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

export default function Video ({ path }) {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)
    const [pause, setPause] = useState(false)

    return (
        <div className='h-[90vh] w-[70%] top-10 left-2 relative'>
            <video
                controls
                src={path}
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
                className='absolute transition-all delay-75 bg-cover h-[80vh] w-full mx-4 object-cover'
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
        </div>
    )
}
