import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen grid place-items-center z-99999 backdrop-blur'>
 <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
    </div>
  )
}

export default Loading