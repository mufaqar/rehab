import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Blog() {
  return (
    <div className="bg-cover bg-center h-auto py-10 w-full" style={{ backgroundImage: `url('/images/f.png')` }}>
      <div className="container mx-auto px-4">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="bg-[#0E9CD9] lg:w-[358px] w-full h-[363px] py-10 rounded-tr-[10vh] rounded-md rounded-bl-[10vh]">
            <Image src="/images/Group 4077.svg" alt="Rehab Fit" width={450} height={650} className="w-20 mx-auto" />
            <div className="text-center px-8 text-white mt-4">
              <p className="text-2xl md:text-3xl lg:text-4xl">Affordable Rehabilitation You'll Love</p>
            </div>
          </div>
          <div className="bg-[#0E9CD9] lg:w-[358px] h-[363px] w-full py-10 rounded-tr-[10vh] rounded-md rounded-bl-[10vh]">
            <div className="text-center mt-10">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white px-4 md:px-14 pb-6">
                Book Now with an Expert Physiotherapist
              </p>
              <div>
                <Link href="/contact-us" className="bg-white text-[#0E9CD9] px-6 py-3 rounded-md text-lg md:text-xl">
                  Consult now
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#0E9CD9] lg:w-[358px] w-full h-[363px] py-10 rounded-tr-[10vh] rounded-md rounded-bl-[10vh]">
            <div className="text-center">
              <Image src="/images/Group 4081.svg" alt="Rehab Fit" width={450} height={650} className="w-20 mx-auto" />
              <p className="text-xl md:text-2xl lg:text-3xl text-white px-4 md:px-14 pb-6">
                Our Convenient Location & Home Physiotherapy
              </p>
              <div className="flex text-white items-center font-semibold justify-center">
                <Image src="/images/Group 4078.svg" alt="Rehab Fit" width={450} height={650} className="w-10" />
                <p className="ml-2 text-lg md:text-xl">+92 320 3588468</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
