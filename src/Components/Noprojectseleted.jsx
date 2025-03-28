import React from 'react'
import noprojectimg from '../download.jpg'
import Button from './Button.jsx'

function Noprojectseleted({ onStartAddProject }) {
    return (
        <div className='mt-2 text-center w-2/3'>
            <img src={noprojectimg} alt="An empty tast list" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a Project or get started with a new one</p>
            <p className='mt-8 '>
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    )
}

export default Noprojectseleted
