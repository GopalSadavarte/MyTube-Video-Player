import { useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

export default function Video ({ path }) {
    const videoRef = useRef(null)
    const rangeRef = useRef(null)
    const [play, setPlay] = useState(false)
    const [pause, setPause] = useState(false)
    const [time, setTime] = useState(['0:0', '0:0'])
    const [update, setUpdate] = useState(0)

    return (
        <div className='h-[90vh] w-2/4 top-32 left-5 relative'>
            <video
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
                onTimeUpdate={e => {
                    setUpdate(e.currentTarget.currentTime)
                    setTime([
                        e.currentTarget.currentTime.toFixed(0),
                        e.currentTarget.duration.toFixed(0)
                    ])
                }}
                className='absolute transition-all delay-75 bg-cover mx-4'
            ></video>
            <FaPlay
                className={`text-gray-100 absolute h-8 w-8 transition-all delay-75 top-36 left-2/4 ${
                    pause ? '' : 'hidden'
                } `}
            />
            <FaPause
                className={`text-gray-100 left-2/4 absolute h-8 w-8 transition-all delay-75 top-36 ${
                    play ? '' : 'hidden'
                } `}
            />
            <small
                className='video-time absolute left-9 text-white z-1'
                style={{
                    top: '16rem'
                }}
            >
                {time[0] + '/' + time[1]}
            </small>
            <input
                type='range'
                min={0}
                max={100}
                ref={rangeRef}
                value={update}
                className='w-11/12 absolute top-2/4 left-9 appearance-none bg-red-500 h-1 rounded-lg'
            />
        </div>
    )
}
