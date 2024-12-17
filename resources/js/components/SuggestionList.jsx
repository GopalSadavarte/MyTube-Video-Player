import React from 'react'

export default function SuggestionList ({ suggestions, setQuery }) {
    return Array.from(suggestions).length > 0 ? (
        <div className='container absolute top-9 bg-gray-800 z-20 py-2 rounded-md'>
            <div className='suggestions-container'>
                <menu className='h-auto w-full'>
                    {Array.from(suggestions).map((ele, key) => {
                        return (
                            <li
                                key={key}
                                className='mx-2 p-3 hover:bg-gray-700 cursor-pointer rounded-md '
                                onMouseOver={e => {
                                    setQuery(e.currentTarget.textContent)
                                }}
                            >
                                <strong className='w-20 overflow-x-hidden'>
                                    {ele.v_name}
                                </strong>
                            </li>
                        )
                    })}
                </menu>
            </div>
        </div>
    ) : (
        ''
    )
}
