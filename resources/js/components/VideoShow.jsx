import logo from '../../../public/img/logo.png'
export default function VideoShow ({ d, volume, keyValue, videoKey }) {
    return (
        <>
            <video
                src={d.video}
                className='w-full h-52 object-cover rounded-md'
                onMouseEnter={e => {
                    e.currentTarget.volume =
                        volume && videoKey === keyValue ? 1 : 0
                    e.currentTarget.play()
                }}
                onMouseLeave={e => {
                    e.currentTarget.pause()
                    e.currentTarget.currentTime = 0
                }}
            ></video>

            <div className='video-info w-full flex'>
                <img
                    src={logo}
                    alt='profile'
                    className='size-12 rounded-full object-cover m-2 text-white'
                />
                <div className='block text-white w-full h-20 overflow-hidden'>
                    <p className='h-9 w-full overflow-hidden text-xl'>
                        {d.v_name}
                    </p>
                    <small className='flex gap-4'>
                        <span>{d.channel.channel_name}</span>
                        <span>{'view: ' + d.views}</span>
                        <span>{'likes: ' + d.likes}</span>
                    </small>
                </div>
            </div>
        </>
    )
}
