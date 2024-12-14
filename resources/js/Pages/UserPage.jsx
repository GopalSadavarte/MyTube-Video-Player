import Layout from '../components/Layout/Layout'
import Form from '../components/Form'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import toast from 'react-hot-toast'

export default function UserPage () {
    const {
        data: videoData,
        setData: setVideoData,
        post,
        errors,
        setError
    } = useForm({
        name: '',
        description: '',
        video: ''
    })
    const handleSubmit = e => {
        e.preventDefault()
        post('/upload', {
            onSuccess: e => {
                toast.success('File uploaded successfully!')
                setVideoData({ name: '', description: '', video: '' })
            },

            onError: error => {
                setError(error)
                toast.error(errors.description || errors.name || errors.video)
            }
        })
    }
    return (
        <Layout>
            <Head title='User Dashboard' />
            <div className='container bg-gray-900 text-white h-screen'>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Amet dolorem facere rem voluptatem sunt illum quidem, ab
                    beatae aut voluptates quos id minus tempora expedita maxime
                    doloribus nobis nihil iusto porro, similique reprehenderit
                    hic repudiandae, assumenda quia. At quos vero minus veniam
                    nesciunt sint? Voluptate recusandae alias asperiores eos
                    inventore necessitatibus iusto rerum in eveniet a ipsam,
                    laudantium, quis possimus quae minus. Quaerat quia eligendi
                    unde magnam commodi ullam perspiciatis quis, labore delectus
                    vero impedit cupiditate iusto repellendus illo consequatur?
                    Iure soluta harum dolor eligendi, voluptatibus molestias
                    eius maxime! Molestiae quam asperiores libero iusto eveniet
                    commodi delectus! Ea, eum delectus?
                </p>

                <div className='new'>
                    <Form
                        handleSubmit={handleSubmit}
                        setVideoData={setVideoData}
                        videoData={videoData}
                    />
                </div>
            </div>
        </Layout>
    )
}
