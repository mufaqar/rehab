import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import {BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
function Footer() {
  return (
    <>
    <div className='container mx-auto px-4 mt-10'>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
        <div>
          <Link href='/'>
            <Image src='/images/logo.svg' alt='Rehab Fit' width={450} height={650} className='w-52' />
          </Link>
          <p className='py-3 text-sm '>
            Pain and Disability Management Council is an advanced rehabilitation clinic that creates a customized treatment plan to meet each patient’s unique medical needs including adults and children.
          </p>
          <div className='flex gap-4 text-[#0E9CD9] mt-3'>
          <Link href='https://facebook.com' target='_blank'>
            <FaFacebook className='text-2xl text-[#0E9CD9]'/>
          </Link>
          <Link href='/'>
            <BsYoutube  className='text-2xl text-[#0E9CD9]'/>
          </Link>
          <Link href='/'>
            <AiFillInstagram className='text-2xl text-[#0E9CD9]' />
          </Link>
          <Link href='/'>
            <AiFillLinkedin  className='text-2xl text-[#0E9CD9]'/>
          </Link>
          <Link href='/'>
            <BsTwitter  className='text-2xl text-[#0E9CD9]'/>
          </Link>
          
          </div>
        </div>

        <div className=' lg:ml-14'>
          <ul className='text-sm grid gap-2 md:gap-4'>
            <li>
              <Link href='/#products'>Neck Pain</Link>
            </li>
            <li>
              <Link href='/#products'>Shoulder Pain</Link>
            </li>
            <li>
              <Link href='/#products'>Back Pain</Link>
            </li>
            <li>
              <Link href='/#products'>Knee Pain</Link>
            </li>
            <li>
              <Link href='/#products'>Foot Pain</Link>
            </li>
            <li>
              <Link href='/#products'>Elbow Pain</Link>
            </li>
          </ul>
        </div>

        <div className=' md:mt-0'>
          <ul className='text-sm  grid gap-2 md:gap-4'>
            <li>
              <Link href='/#products'>Physiotherapy</Link>
            </li>
            <li>
              <Link href='/#products'>Orthopedic</Link>
            </li>
            <li>
              <Link href='/#products'>Orthosis Prosthesis</Link>
            </li>
            <li>
              <Link href='/#products'>Neurology</Link>
            </li>
            <li>
              <Link href='/#products'>Pediatric</Link>
            </li>
            <li>
              <Link href='/#products'>Speech Therapy</Link>
            </li>
          </ul>
        </div>

          <div>
               <div>
               <Link href='/' className='flex gap-3'>
                   <HiLocationMarker className='text-6xl text-[#0E9CD9]'/>
                   <div>
                      <h4 className='font-bold'>Address</h4>
                      <span>
                        Lahore poly clinic basement FDPP main gate Azam garden Multan road Lahore
                      </span>
                   </div>
              </Link>
                
               </div>
               <div className='py-4'>
               <Link href='tel:0923055862457' className='flex gap-3'>
                   <BsFillTelephoneFill className='text-2xl text-[#0E9CD9]'/>
                   <div>
                     <h4 className='font-bold'>Phone</h4>
                     <span>+92 305 5862457</span>
                   </div>
              </Link>
           
               </div>
          </div>
      </div>
    </div>
  <div className='border mt-10'></div>
   <div className='flex flex-wrap justify-between items-center text-[12px] container mx-auto px-4 py-3'>
    <p>Rehabfit 2024 ©, All rights reserved.</p>
    <p>Sitemap - Terms & Conditions - Privacy Policy</p>
   </div>

    </> 
  )
}

export default Footer;
