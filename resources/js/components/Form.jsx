export default function Form ({ handleSubmit, videoData, setVideoData }) {
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='form-element block'>
                <label htmlFor='name' className='form-label block'>
                    Video Name
                </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={videoData.name}
                    onChange={e => {
                        setVideoData({
                            ...videoData,
                            name: e.target.value
                        })
                    }}
                    className='block text-black'
                />
            </div>
            <div className='form-element block'>
                <label htmlFor='desc' className='block form-label'>
                    Video Description
                </label>
                <textarea
                    name='desc'
                    id='desc'
                    cols={30}
                    rows={4}
                    value={videoData.description}
                    onChange={e => {
                        setVideoData({
                            ...videoData,
                            description: e.target.value
                        })
                    }}
                    className='block resize-none text-black'
                ></textarea>
            </div>
            <div className='form-element block my-3'>
                <label htmlFor='video' className='block form-label'>
                    Video File
                </label>
                <input
                    type='file'
                    className='block'
                    onChange={e => {
                        setVideoData({
                            ...videoData,
                            video: e.target.files[0]
                        })
                    }}
                />
            </div>
            <input
                type='submit'
                value='Save'
                className='bg-gray-400 cursor-pointer px-6 text-gray-800 rounded-sm transition-all hover:bg-gray-500'
            />
        </form>
    )
}
