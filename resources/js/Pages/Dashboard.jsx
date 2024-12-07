import Layout from '../components/Layout/Layout'
import { Head } from '@inertiajs/react'
import Slider from '../components/Slider'
import Video from '../components/Video'
import { useContext } from 'react'
import { ToggleContext } from '../components/Elements/ToggleMenuContext'
export default function Dashboard ({ data }) {
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
                className={`child transition-transform overflow-scroll bg-gray-900 text-white h-screen
                    ${toggle[0] ? 'w-full' : 'w-screen'}`}
            >
                <Slider elements={elements} />
                <div className='w-full flex-wrap flex gap-3'>
                    {console.log(data)}
                    {data[0].video ? (
                        <Video path={data[0].video} />
                    ) : (
                        'Not Found'
                    )}
                </div>
            </div>
        </Layout>
    )
}
