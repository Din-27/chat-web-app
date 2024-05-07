import React from 'react'
import Badges from './Badges'

export default function BubbleChat({ owner, message, status }) {
    if (owner === 'home') {
        return (
            <div className='my-6'>
                {/* <div class="flex items-start gap-6 mx-4"> */}
                <div className='flex justify-end mx-6 items-end'>
                    <Badges variant={status} />
                    <div className='lg:max-w-lg max-w-48 border p-4 rounded-xl bg-purple-600'>
                        <p class="break-all text-wrap font-bold text-left mt-0.5 text-white lg:text-base text-xs">
                            {message}
                        </p>
                    </div>
                </div>
                {/* <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        class="lg:size-12 size-14 rounded-lg object-cover"
                    /> */}
                {/* </div> */}
            </div>
        )
    }
    return (
        <div className='my-6'>
            {/* <div class="flex items-start gap-6 mx-4"> */}
            {/* <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="lg:size-12 size-14 rounded-lg object-cover"
                /> */}

            <div className='flex justify-start items-end mx-6'>
                <div className='lg:max-w-lg max-w-48 border p-4 rounded-xl bg-gray-200'>
                    <p className='break-all font-bold text-left mt-0.5 text-gray-700 lg:text-base text-xs'>{message}</p>
                </div>
                {/* <Badges variant='sent' /> */}
            </div>
            {/* </div> */}
        </div>
    )
}
