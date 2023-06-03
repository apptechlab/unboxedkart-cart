import Link from 'next/link'
import React from 'react'

const FindAStore = () => {
  return (
    <Link href='/stores'>
      <div className='flex flex-row p-4 m-2 bg-white rounded-2xl'>
        <p className="font-bold text-black ">Find a Store</p>
      </div>
    </Link>

  )
}

export default FindAStore