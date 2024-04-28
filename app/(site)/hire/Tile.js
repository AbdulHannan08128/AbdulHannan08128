import React from 'react'
import Link from 'next/link';

const Tile = ({href, img}) => {
  return (
    <>
     <div className="bg-gray-200 p-2 rounded-lg flex items-center justify-center w-30 h-30">
        <Link href={href}>
          
            <img src={img} alt="Tile 4" className="max-w-full max-h-full rounded-full" />
          
        </Link>
      </div>
    
    </>
  )
}

export default Tile