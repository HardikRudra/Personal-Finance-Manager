import React from 'react'

function Page() {
  return (
    <div>
        <span>
            <button className="queued">
                Queued
            </button>
        </span>
        <span>
            <button className='pending'>
                Pending
            </button>
        </span>
        <span>
            <button className='done'>
                Done
            </button>
        </span>
        <div className='line1'></div>
       
    </div>
  )
}

export default Page;