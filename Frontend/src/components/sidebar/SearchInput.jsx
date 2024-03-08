import React from 'react'

export default function () {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-borderd rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-600 text-white'>
            <img src="./search.svg" alt="icon" />
        </button>
    </form>
  )
}
