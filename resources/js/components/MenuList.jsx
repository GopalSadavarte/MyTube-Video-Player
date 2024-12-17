import React from 'react'
import { MdClose, MdBlock, MdSaveAlt } from 'react-icons/md'
export default function MenuList ({
    menuDisplay,
    videoKey,
    keyValue,
    setMenuDisplay
}) {
    return (
        <div
            className={`h-fit w-fit bg-gray-700 absolute top-24 left-36 rounded-lg ${
                menuDisplay && videoKey === keyValue ? '' : 'hidden'
            }`}
        >
            <div className='menu-elements pt-1 pb-2'>
                <div
                    className='close-icon w-full h-fit pt-1 pr-1'
                    onClick={e => {
                        setMenuDisplay(false)
                    }}
                >
                    <MdClose className='ml-auto mr-3 mt-2 text-xl cursor-pointer transition-all rounded-full hover:bg-gray-600' />
                </div>
                <menu type='context' className='w-max'>
                    <li className='w-44 h-auto p-2 gap-x-2 mx-2 rounded-md flex cursor-pointer hover:bg-gray-600'>
                        <MdBlock className='my-auto' />
                        Not interested
                    </li>
                    <li className='w-44 h-auto p-2 flex gap-x-2 rounded-md  mx-2 cursor-pointer hover:bg-gray-600'>
                        <MdSaveAlt className='my-auto' />
                        Save to watch later
                    </li>
                    <li className='w-44 h-auto p-2 flex gap-x-2 rounded-md mx-2 cursor-pointer hover:bg-gray-600'>
                        <MdClose className='text-2xl' />
                        Don't recommend channel
                    </li>
                </menu>
            </div>
        </div>
    )
}
