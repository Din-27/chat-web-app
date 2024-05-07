import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Badges({ variant, value }) {
    if (variant === 'dot') {
        return (
            <span
                class="mb-1 space-x-1 mt-2 inline-flex items-center justify-center bg-emerald-100 pr-3 rounded-full text-emerald-700"
            >
                <FiberManualRecordIcon fontSize='small' />
                <p class="whitespace-nowrap text-xs lg:text-sm">{value}</p>
            </span>
        )
    }
    if (variant === 'sent') {
        return (
            <span
                class="mb-1 space-x-1 inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-emerald-700"
            >
                <DoneAllIcon fontSize='small' />
                {/* <p class="whitespace-nowrap text-xs lg:text-sm">{value}</p> */}
            </span>
        )
    }
    if (variant === 'success') {
        return (
            <span
                class="mb-1 mt-2 inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>

                <p class="whitespace-nowrap text-xs lg:text-sm">{value}</p>
            </span>
        )
    }

    if (variant === 'warning') {
        return (
            <span
                class="mb-1 mt-2 inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                    />
                </svg>

                <p class="whitespace-nowrap text-sm">{value}</p>
            </span>
        )
    }

    if (variant === 'error') {
        return (
            <span
                class="mb-1 mt-2 inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="-ms-1 me-1.5 h-4 w-4"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                </svg>

                <p class="whitespace-nowrap text-sm">{value}</p>
            </span>
        )
    }
}
