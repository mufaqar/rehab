import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const offerings = [
  { id: 1, title: 'Chiropractor Treatment', img: "/images/services/1.png" },
  { id: 2, title: 'Sports Physiotherapy', img: "/images/services/2.png" },
  { id: 3, title: 'Pediatric Physiotherapy', img: "/images/services/3.png" },
  { id: 4, title: 'Home Care Physiotherapy', img: "/images/services/4.png" },
  { id: 5, title: 'Neuro Physiotherapy-Rehab', img: "/images/services/5.png" },
  { id: 6, title: 'Pre And Post Surgery Rehabilitation', img: "/images/services/6.png" },
  { id: 7, title: 'Geriatric Physiotherapy', img: "/images/services/7.png" },
  { id: 8, title: 'Strength Training', img: "/images/services/8.png" },
  { id: 9, title: 'Advanced Physiotherapy', img: "/images/services/9.png" },
  { id: 10, title: "Women's Health Physiotherapy", img: "/images/services/10.png" },
  { id: 11, title: 'Musculoskeltal Physiotherapy', img: "/images/services/11.png" },
  { id: 12, title: 'Vestibular Rehabilitation (VR)', img: "/images/services/12.png" },
  { id: 13, title: 'Workplace Ergonomics: Assesment & Training', img: "/images/services/13.png" },
  { id: 14, title: 'Therepeutic Massage', img: "/images/services/1.png" },
  { id: 15, title: 'Tele-Physiotherapy', img: "/images/services/2.png" },
  { id: 16, title: 'Cardiac Rehabilitation', img: "/images/services/3.png" },
  { id: 17, title: 'Clinical Physiotherapy', img: "/images/services/4.png" },
  { id: 18, title: 'Physical Therapy', img: "/images/services/5.png" },
  { id: 19, title: 'Spinal Injury Rehabilitation', img: "/images/services/6.png" },
  { id: 20, title: 'Speech Therapy', img: "/images/services/7.png" },
  // Add more items as needed
];

function Offer() {
  return (
    <div className='bg-[#0B577E] h-auto text-white py-14 mt-20'>
      <div className='container mx-auto px-4'>
        <div className=' text-center'>
          <h2 className='lg:text-[72px] md:text-[60px] text-[30px] font-semibold axiformaRegular'>What We Offer</h2>
          <p className='text-lg lg:text-xl xl:text-2xl axiformaRegular lg:w-[70%] xl:w-[90%] mx-auto'>
            We Offer Physiotherapy Treatments Across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports Related Issues Covering A Wide Range Of Conditions and symptoms
          </p>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-4'>
          {offerings.map((item) => (
            <div key={item.id} className='border border-[#0E9CD9] text-center p-3 rounded-tl-[5px] rounded-tr-[20px] rounded-br-[5px] rounded-bl-[20px] flex items-center gap-3'>
              <Image src={item.img} alt="icon" width={41} height={37} className='w-12 h-12 bg-[#0E9CD9] rounded-tr-[12px] rounded-bl-[12px] p-2' />
              <Link href="#" className="font-semibold axiformaRegular">{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offer;
