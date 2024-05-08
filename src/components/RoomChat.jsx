import React from 'react'
import UserMedia from './UserMedia'
import BubbleChat from './BubbleChat'
import InputMessage from './InputMessage'
const dummy = [
    {
        id: 1,
        owner: 'home',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'read'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    },
    {
        id: 2,
        home: 'away',
        message: `<imgsrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt=""class="lg:size-12 size-14 rounded-lg object-cover"/>`, status: 'sent'
    }
]
export default function RoomChat({ state, setState }) {
    return (
        // <div className='flex flex-col justify-between'>
        //     <div>
        //         <div className='p-4 border-b'>
        //             <UserMedia variant='chat' state={state} setState={setState} />
        //         </div>
        //         <div className='h-[85vh] overflow-auto'>
        //             {dummy.map((x, y) =>
        //                 <BubbleChat message={x.message} owner={x.owner} status={x.status} key={y} />
        //             )}
        //         </div>
        //     </div>
        //     <InputMessage />
        // </div>
        <div class="grid w-full grid-rows-12 border-e bg-white">
            <div className='row-span-11'>
                <div className='p-4 border-b'>
                    <UserMedia variant='chat' state={state} setState={setState} />
                </div>
                <div className='h-[90%] overflow-auto'>
                    {dummy.map((x, y) =>
                        <BubbleChat message={x.message} owner={x.owner} status={x.status} key={y} />
                    )}
                </div>
            </div>
                <InputMessage />
        </div>
    )
}
