import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function innovation() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-20 mt-10'>
       <div>
          <h3 className='text-[25px] text-[#0E9CD9]'>Physiotherapy Clinic</h3>
          <h2 className='lg:text-[48px] text-[20px] lg:leading-[10vh] font-semibold text-[#363853]'>Innovation, Integration, Accessibility</h2>
          <p className='text-[#363853] py-4 pb-6'>Welcome to Rehab Fit by Physio Connect largest Integrative and most accessible rehabilitation provider. Our clinicians pride themselves ensuring the highest quality of care is accessible to every member . With our Innovative, Integrative, Accessible Rehabilitative care, you can rest assured that you will recover as quickly as possible with evidence-based gold standard treatment.</p>
          <div>
          <Link href="/contact-us" className="bg-[#0E9CD9]  px-6 py-2 rounded-md text-white text-[18px]">
          Consult now
          </Link>
          </div>
       </div>
       <div className='mx-auto'>
       <Link href="/">
          <Image src="/images/1.png" alt="Rehab Fit" width={450} height={650} className='' />
       </Link>
       <Link href="/">
          <Image src="/images/Group.png" alt="Rehab Fit" width={450} height={650} className=' mt-4' />
       </Link>
       </div>
      </div>
    </div>
  )
}

export default innovation