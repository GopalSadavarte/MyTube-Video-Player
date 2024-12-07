import Layout from '../components/Layout/Layout'
import { Head, Link } from '@inertiajs/react'
import { useContext } from 'react'
import { ToggleContext } from '../components/Elements/ToggleMenuContext'
import Slider from '../components/Slider'

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
                className={`child transition-transform overflow-scroll bg-gray-900 text-white h-screen ${
                    toggle[0] ? ' w-full' : 'w-screen'
                }`}
            >
                <Slider elements={elements} />
                <div className=' w-full flex-wrap flex gap-3'>
                    {data.map((d, key) => {
                        return (
                            <div className='w-52 h-40 rounded-sm' key={key}>
                                <Link
                                    href={
                                        '/show/' +
                                        d.video
                                            .split('videos/')[1]
                                            .split('.')[0]
                                    }
                                >
                                    <video
                                        src={d.video}
                                        className='h-full w-full'
                                    ></video>
                                    <figcaption>{d.v_name}</figcaption>
                                    <p>{d.description}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
