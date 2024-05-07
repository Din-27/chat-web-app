import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UserMedia from './UserMedia';

export default function RoomMessage() {
    return (
        <div>
            <div className='flex py-6 px-4 justify-between border-b items-center'>
                <h3 className='font-bold text-2xl'>Messages</h3>
                <div className='p-1 border rounded-lg bg-purple-100'>
                    <AddCircleIcon className='text-purple-600' fontSize='large' />
                </div>
            </div>
            <div className='px-4 my-4'>
                <input
                    type="text"
                    class="outline-none ring-none w-full rounded-lg bg-gray-100 px-4 py-4 text-sm shadow-sm border"
                    placeholder="Search messages"
                />
                <div className='md:h-[80vh] h-[74vh] overflow-auto'>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((x) => <UserMedia />)}
                </div>
            </div>
        </div>
    )
}
