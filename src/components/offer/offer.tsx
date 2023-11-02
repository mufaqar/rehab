import React from 'react';
import Link from 'next/link';

const offerings = [
  { id: 1, title: 'Chiropractor Treatment' },
  { id: 2, title: 'Chiropractor Treatment' },
  { id: 3, title: 'Chiropractor Treatment' },
  { id: 4, title: 'Chiropractor Treatment' },
  { id: 5, title: 'Chiropractor Treatment' },
  { id: 6, title: 'Chiropractor Treatment' },
  { id: 7, title: 'Chiropractor Treatment' },
  { id: 8, title: 'Chiropractor Treatment' },
  { id: 9, title: 'Chiropractor Treatment' },
  { id: 10, title: 'Chiropractor Treatment' },
  { id: 11, title: 'Chiropractor Treatment' },
  { id: 12, title: 'Chiropractor Treatment' },
  { id: 13, title: 'Chiropractor Treatment' },
  { id: 14, title: 'Chiropractor Treatment' },
  { id: 15, title: 'Chiropractor Treatment' },
  { id: 16, title: 'Chiropractor Treatment' },
  { id: 17, title: 'Chiropractor Treatment' },
  { id: 18, title: 'Chiropractor Treatment' },
  { id: 19, title: 'Chiropractor Treatment' },
  { id: 20, title: 'Chiropractor Treatment' },
  // Add more items as needed
];

function Offer() {
  return (
    <div className='bg-[#0B577E] h-auto text-white py-14 mt-20'>
      <div className='container mx-auto px-4'>
         <div className=' text-center'>
            <h2 className='lg:text-[72px] md:text-[60px] text-[30px] font-semibold axiformaRegular'>What We Offer</h2>
            <p className='text-lg lg:text-xl xl:text-2xl axiformaRegular lg:w-[70%] xl:w-[90%] mx-auto'>
              We Offer Physiotherapy Treatments Across Neuro Ortho Chiro Pediatrics Geriatrics Sports Related Issues Covering A Wide Range Of Conditions and Symptoms
            </p>
         </div>
         <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-4'>
            {offerings.map((item) => (
              <div key={item.id} className='border border-[#0E9CD9] text-center p-3 rounded-tl-[5px] rounded-tr-[20px] rounded-br-[5px] rounded-bl-[20px] flex items-center gap-3'>
                <div className='w-12 h-12 bg-[#0E9CD9] rounded-tr-[12px] rounded-bl-[12px]'></div>
                <Link href="/#products" className="font-semibold axiformaRegular">{item.title}</Link>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

export default Offer;
