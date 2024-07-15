import React from 'react'

export default function dashboard() {
    return (
        <div>
            <h1 className='text-white font-bold text-3xl'>PORT Next: {process.env.NEXT_PUBLIC_PORT}</h1>
            <h1 className='text-white font-bold text-3xl'>PORT: {process.env.PORT}</h1>
            <h1 className='text-white font-bold text-3xl'>port: {process.env.port}</h1>

            <h1 className='text-white font-bold text-3xl'>NODE_ENV: {process.env.NODE_ENV}</h1>
            <h1 className='text-white font-bold text-3xl'>NODE_ENV Next: {process.env.NEXT_PUBLIC_NODE_ENV}</h1>
        </div>
    )
}
