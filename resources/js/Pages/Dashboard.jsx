import Layout from '../components/Layout/Layout'
import { Head } from '@inertiajs/react'
import Slider from '../components/Slider'
import Video from '../components/Video'
import VideoSlider from '../components/VideoSlider'
import { useContext } from 'react'
import { ToggleContext } from '../components/Elements/ToggleMenuContext'
export default function Dashboard ({ data, allVideos }) {
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
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes',
        'Entertainment',
        'Facts',
        'Programming',
        'Jokes'
    ]
    return (
        <Layout>
            <Head title='MyTube' />
            <div
                id='video-view-container'
                className={`child transition-transform overflow-scroll bg-gray-900 text-white h-screen
                    ${toggle[0] ? 'w-full' : 'w-screen'}`}
            >
                <Slider elements={elements} />
                <div className='w-full flex-wrap flex gap-3'>
                    {data[0].video ? (
                        <Video video={data} />
                    ) : (
                        <div className='top-10 left-2 select-none relative bg-gray-700 items-center content-center h-[90vh] w-[70%]'>
                            <small className='mx-[45%]'>Not Available</small>
                        </div>
                    )}
                    <VideoSlider videos={allVideos} />
                </div>
            </div>
        </Layout>
    )
}
