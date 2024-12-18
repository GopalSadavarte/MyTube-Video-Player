import { Link } from '@inertiajs/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

export default function Slider ({ elements }) {
    const sliderRef = useRef(null)
    const [hideButton, setHideButton] = useState(false)
    const [scrollFirst, setScrollFirst] = useState(false)
    const [scrollEnd, setScrollEnd] = useState(false)
    const setScrollLeft = e => {
        sliderRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        })

        let scrollLeft = sliderRef.current.scrollLeft
        if (scrollLeft === 0) {
            setScrollFirst(true)
        }
        setScrollEnd(false)
    }
    const setScrollRight = e => {
        sliderRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        })

        let containerWidth = sliderRef.current.clientWidth
        let scrollWidth = sliderRef.current.scrollWidth
        let scrollLeft = sliderRef.current.scrollLeft
        if (scrollLeft === scrollWidth - containerWidth) {
            setScrollEnd(true)
        }
        setScrollFirst(false)
    }

    const handleManualScroll = e => {
        if (e.currentTarget.scrollLeft === 0) {
            setScrollFirst(true)
        } else if (e.currentTarget.scrollLeft > 0) {
            setScrollFirst(false)
        }

        if (
            e.currentTarget.scrollLeft ===
            e.currentTarget.scrollWidth - e.currentTarget.clientWidth
        ) {
            setScrollEnd(true)
        } else if (
            e.currentTarget.scrollLeft !==
            e.currentTarget.scrollWidth - e.currentTarget.clientWidth
        ) {
            setScrollEnd(false)
        }
    }

    useEffect(() => {
        sliderRef.current.scrollWidth > sliderRef.current.clientWidth
            ? setHideButton(true)
            : setHideButton(false)
    }, [])

    return (
        <section id='user-slider'>
            <div className='container relative select-none'>
                <div
                    className={`left-arrow absolute size-fit p-3 rounded-full top-1 bg-gray-600 cursor-pointer ${
                        hideButton ? '' : 'hidden'
                    }${scrollFirst ? 'hidden' : ''}`}
                    onClick={e => {
                        setScrollLeft(e)
                    }}
                >
                    <FaArrowLeft className='text-gray-300 size-3' />
                </div>
                <div
                    className={`right-arrow absolute right-0 size-fit p-3 top-1 rounded-full bg-gray-600 cursor-pointer ${
                        hideButton ? '' : 'hidden'
                    }${scrollEnd ? 'hidden' : ''}`}
                    onClick={e => {
                        setScrollRight(e)
                    }}
                >
                    <FaArrowRight className='text-gray-300 size-3' />
                </div>
                <div
                    className='elements w-[96%] ml-6 overflow-x-scroll shadow-md scrollbar-width-none'
                    id='slider'
                    ref={sliderRef}
                    onScroll={e => {
                        handleManualScroll(e)
                    }}
                >
                    <ul className='flex gap-2'>
                        {elements.map((ele, idx) => {
                            return (
                                <li
                                    className='h-fit w-fit px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 links'
                                    key={idx}
                                >
                                    <Link
                                        href={'/fetch/' + ele}
                                        className='w-max'
                                        as='button'
                                    >
                                        {ele}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
