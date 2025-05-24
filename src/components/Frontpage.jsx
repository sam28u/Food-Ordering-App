import React from 'react'
import Search from './Search'

const Frontpage = () => {
  return (
    <div className='w-full h-[75vh] bg-bottom sm:bg-center bg-cover bg-[url(/images/bg.png)] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pt-30 sm:pt-20 '>
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 merienda leading-snug">
        "Class Can Wait,<br className='sm:hidden' /> Food Can’t!"
      </h1>
      <div className="w-full max-w-2xl">
        <Search />
      </div>
    </div>
  )
}

export default Frontpage
