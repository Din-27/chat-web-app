import React from 'react'
import Badges from './Badges'
import PhoneIcon from '@mui/icons-material/Phone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dropdown from './Dropdown';

export default function UserMedia({ variant, state, setState }) {
    if (variant === 'chat') {
        return (
            <div className="flex justify-between items-center">
                <div class="flex items-center gap-2 mx-4">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        class="lg:size-20 size-14 rounded-full object-cover"
                    />

                    <div>
                        <h3 class="lg:text-2xl text-lg/tight font-bold text-gray-900">Podolsky</h3>

                        <Badges variant='dot' value='online' />
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div className='lg:flex hidden my-auto items-center px-4 py-2 bg-purple-100 rounded-lg text-purple-600 space-x-2'>
                        <PhoneIcon fontSize='large' />
                        <p className='lg:block hidden font-bold text-lg'>Call</p>
                    </div>
                    <div className='flex my-auto items-center p-2 bg-purple-100 rounded-lg text-purple-600 space-x-2'>
                        <div onClick={() => setState({ ...state, drop: state.drop ? false : true })}>
                            <MoreVertIcon fontSize='large' />
                        </div>
                        {state.drop && <Dropdown state={state} setState={setState} />}
                    </div>
                </div>
            </div>
        )
    }
    const pesan = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
    nesciunt quas non animi.`
    return (
        <div className='my-2 border rounded-xl'>
            <div class="flex items-start gap-4 py-2 px-1">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="rounded-full lg:size-20 size-14 object-cover"
                />

                <div className='grid items-center'>
                    <h3 class="lg:text-lg/tight font-medium text-gray-900">Podolsky</h3>

                    <div className='flex justify-around items-center'>
                        <p class="lg:block hidden mt-0.5 text-gray-700 lg:text-base text-xs">
                            {pesan.slice(0, 30)} . . .
                        </p>
                        <p class="lg:hidden mt-0.5 text-gray-700 lg:text-base text-xs">
                            {pesan.slice(0, 6)} . . .
                        </p>
                        <div className='my-auto'>
                            <Badges variant='sent' value='sent' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
