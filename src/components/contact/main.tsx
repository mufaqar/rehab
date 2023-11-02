import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link';
function main() {
  return (
    <div className='bg-[#F3F9FD] w-full h-auto py-14'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2  grid-cols-1 gap-5  '>
          <div className='lg:w-[460px] w-full mx-auto mt-8'>
            <div>
              <h2 className='md:text-5xl text-4xl font-semibold axiformaRegular mb-5'>Where to Find Clinic</h2>
              <p className='text-base axiformaRegular'>Pain and Disability Management Council is an advanced rehabilitation clinic that creates a customized treatment plan to meet each patient’s unique medical needs including adult and children.</p>
            </div>
            <div className='mt-8'>
              <Link href='/' className='flex gap-3 items-center'>
                <BsFillTelephoneFill className='text-xl text-[#2563EB] axiformaRegular' />
                <span>+92 320 3588468 </span>
              </Link>
              <Link href='' className='flex gap-3 items-center py-3'>
                <FaLocationArrow className='text-3xl text-[#2563EB] axiformaRegular' />
                <span>Lahore poly clinic basement FDPP main gate azam garden multan road lahore</span>
              </Link>
              <Link href='' className='flex gap-3 items-center'>
                <GrMail className='text-2xl text-[#2563eb] axiformaRegular' />
                <span>opto-template@mail.com opto@test.com</span>
              </Link>
            </div>
          </div>

          <div className='bg-white lg:w-[550px] w-full mx-auto h-auto md:px-10 px-5 py-14 rounded-tr-[80px] rounded-bl-[80px]'>
            <div>
              <h3 className='md:text-[32px] text-2xl font-bold text-center axiformaRegular pb-5'>Contact with Us</h3>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-5'>
              <div className='w-full'>
                <h4 className='px-4 py-1 axiformaRegular'>Name</h4>
                <input type="text" placeholder='Your Name' className='border border-[#D8D8D8] rounded-full px-5 py-2 outline-none w-full' />
              </div>
              <div className='w-full'>
                <h4 className='px-4 py-1 axiformaRegular'>Phone Number</h4>
                <input type="text" placeholder='Your Phone' className='border border-[#D8D8D8] rounded-full px-5 py-2 outline-none w-full' />
              </div>
              <div className='w-full'>
                <h4 className='px-4 py-1 axiformaRegular'>Service</h4>
                <input type="text" placeholder='Select Service' className='border border-[#D8D8D8] rounded-full px-5 py-2 outline-none w-full' />
              </div>
              <div className='w-full'>
                <h4 className='px-4 py-1 axiformaRegular'>Time</h4>
                <input type="text" placeholder='Select Times' className='border border-[#D8D8D8] rounded-full outline-none px-5 py-2 w-full' />
              </div>
              <div className='w-full md:col-span-2'>
                <h4 className='px-4 py-1 axiformaRegular'>Message</h4>
                <textarea name="" id="" placeholder='Type Your Message' className='border border-[#D8D8D8] rounded-2xl px-5 py-3 outline-none lg:w-full w-full'></textarea>
              </div>
            </div>
            <div className='px-6' >
              <Link href='/'>
                <button className='bg-[#0E9CD9] hover:bg-[#0B577E] axiformaRegular w-full py-3 rounded-full text-white mt-5 '>Make an Appointment</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default main