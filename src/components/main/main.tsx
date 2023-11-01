import React from 'react'
import Link from 'next/link';
function main() {
  return (
    <div>
        <div
        className="bg-cover bg-center h-screen  py-5 w-full"
        style={{
          backgroundImage: `url('/images/main.jpg')`, }}>
       <div className='container mx-auto px-4 mt-10'>
  <div className='text-white border border-none md:w-[560px]  md:mt-10'>
    <h1 className='text-5xl md:text-7xl py-4 font-semibold leading-tight md:leading-[13vh] '>
      Integrated Physio Care
    </h1>
    <p className='text-lg md:text-2xl pb-10 md:w-96  '>
      Getting You Back To The Things You Love
    </p>
    <div>
      <Link href="/contact-us" className="bg-[#0E9CD9] px-6 py-3 rounded-md text-white text-lg md:text-xl ">
        Consult now
      </Link>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default main