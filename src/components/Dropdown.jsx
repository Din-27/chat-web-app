import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

export default function Dropdown({ state, setState }) {
    return (
        <div
            class="absolute end-0 h-auto z-10 top-20 right-4 w-56 divide-y divide-gray-100 rounded-md border bg-white shadow-lg"
            role="menu"
        >
            <div
                class="lg:hidden flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
            >
                <PhoneIcon fontSize='medium' />
                <p className='font-bold'>Call</p>
            </div>
            {/* <div class="p-2">
                <strong class="block p-2 text-xs font-medium uppercase text-gray-400"> General </strong>
                <div onClick={() => setState({ options: true, drop: false })}
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Profile
                </div>

                <div
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Contact
                </div>

                <div
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Setting
                </div>

                <div
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                >
                    Blacklist
                </div>
            </div>

            <div class="p-2">
                <strong class="block p-2 text-xs font-medium uppercase text-gray-400"> Danger Zone </strong>

                <form method="POST" action="#">
                    <button
                        type="submit"
                        class="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>

                        Delete Account
                    </button>
                </form>
            </div> */}
        </div>
    )
}
