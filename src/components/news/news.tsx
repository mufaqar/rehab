import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function news() {
  return (
    <div className='container mx-auto px-4 py-14'>
       <div className='text-center mb-10 '>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-6'>News & Upcoming Events</h1>
        <p className='text-lg md:text-xl lg:text-2xl mx-auto md:w-[80%] xl:w-[90%] mb-6'>Latest Happenings & hot topics in the field of physiotherapy along with updates from CB Physiotherapy</p>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/1.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl'>Clinic Treatments</h3>
            <p className='w-64 mx-auto md:w-auto'>
              High-Quality Physiotherapy Care At Our Physiotherapy Centre Near You. Best Treatment For Ortho / Neuro Issues
            </p>
          </div>
        </div>

        <div className='border border-none'>
          <Link href="/">
            <Image src="/images/3.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl'>Physiotherapy At Home</h3>
            <p className='w-64 mx-auto md:w-auto'>
              Home Visits By Certified CB physiotherapists For Patients With Mobility Issues and for Patients Looking For Convenience
            </p>
          </div>
        </div>

        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/3 (2).png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl'>Online Physiotherapy</h3>
            <p className='w-64 mx-auto md:w-auto'>
              Digital Physio Assistant For Personalized PT Exercises At Home. Enables Affordable & Long-term Care
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default news