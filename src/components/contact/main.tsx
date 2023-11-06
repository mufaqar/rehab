import React, { useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link';
import { useFormik } from "formik";
import { contactform } from '@/schemas/contactform';

const initialValues = {
  name: '',
  phone: '',
  services: '',
  time: '',
  message: '',
}
function main() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: contactform,
    onSubmit: (values: any) => {
      // console.log(values)
      alert("message send successfully")
    }
  })
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
            <form className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5' onSubmit={handleSubmit}>
              <div className='w-full'>
                <label htmlFor='name' className='px-4 py-1 axiformaRegular'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Your Name'
                  className='border border-[#D8D8D8] rounded-[5px] rounded-tl-[20px] rounded-br-[20px] px-5 py-2 outline-none w-full'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name ? (
                  <div className='text-red-500'>{errors.name}</div>
                ) : null}
              </div>
              <div className='w-full'>
                <label htmlFor='phone' className='px-4 py-1 axiformaRegular'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  placeholder='Your Phone'
                  className='border border-[#D8D8D8] rounded-[5px] rounded-tl-[20px] rounded-br-[20px] px-5 py-2 outline-none w-full'
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.phone && errors.phone ? (
                  <div className='text-red-500'>{errors.phone}</div>
                ) : null}
              </div>
              <div className='w-full'>
                <label htmlFor='services' className='px-4 py-1 axiformaRegular'>
                  Services
                </label>
                <select
                  name='services'
                  id='services'
                  className='border border-[#D8D8D8] rounded-[5px] rounded-tl-[20px] rounded-br-[20px] px-5 py-2 outline-none w-full'
                  value={values.services}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="services">Services</option>
                  <option value='Chiropractor Treatment'>Chiropractor Treatment</option>
                  <option value="Sports Physiotherapy">Sports Physiotherapy</option>
                  <option value="Pediatric Physiotherapy">Pediatric Physiotherapy</option>
                  <option value="Neuro Physiotherapy Rehab">Neuro Physiotherapy Rehab</option>
                  <option value="Pre And Post Surgery Rehabilitation">Pre And Post Surgery Rehabilitation</option>
                </select>
                {touched.services && errors.services ? (
                  <div className='text-red-500'>{errors.services}</div>
                ) : null}
              </div>
              <div className='w-full'>
                <label className='px-4 py-1 axiformaRegular'>Time</label>
                <input
                  type='time'
                  name='time'
                  id='time'
                  placeholder='Select Times'
                  className='border border-[#D8D8D8] rounded-[5px] rounded-tl-[20px] rounded-br-[20px] outline-none px-5 py-2 w-full'
                  value={values.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.time && errors.time ? (
                  <div className='text-red-500'>{errors.time}</div>
                ) : null}
              </div>
              <div className='w-full md:col-span-2'>
                <label htmlFor='message' className='px-4 py-1 axiformaRegular'>
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Type Your Message'
                  rows={4}
                  className='border border-[#D8D8D8] rounded-[5px] rounded-tl-[20px] rounded-br-[20px] px-5 py-3 outline-none lg:w-full w-full'
                  value={values.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className='px-6 w-full md:col-span-2'>
                <button
                  className='bg-[#0E9CD9] hover:bg-[#0B577E] px-4 py-3.5 rounded-[5px] rounded-tl-[20px] rounded-br-[20px] text-white text-lg flex items-center gap-2 justify-center w-full'
                  type='submit'
                >
                  Make an Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main