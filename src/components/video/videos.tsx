import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import YouTube, { YouTubeProps } from "react-youtube";

function Videos() {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }
    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className='bg-[#0B577E] h-auto text-white py-14 mt-20'>
            <div className='container mx-auto px-4'>
                <div className=' text-center'>
                    <h2 className='lg:text-[72px] md:text-[60px] text-[30px] font-semibold axiformaRegular'>
                        Daily Routine Therapy
                    </h2>
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-7'>
                    {Video.map((item, idx) => (
                        <div key={idx}>
                            <div className='relative'>
                                <YouTube
                                    videoId={item.videoLink}
                                    opts={opts}
                                    className={`videocontainer aspect-square`}
                                    iframeClassName={`responsive-iframe`}
                                    onReady={onPlayerReady} />
                                {/* <Image src="/images/video/play.svg" alt="Rehab Fit" width={90} height={90} className='absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full' /> */}
                            </div>
                            <div className='mt-5'>
                                <Link href="#" className="text-[22px] font-semibold axiformaRegular">{item.title}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Videos

const Video = [
    {
        videoLink: "yAoLSRbwxL8",
        title: 'World cancer awareness',
        img: "/images/video/1.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'Say Goodbye to Vertigo: Epley Maneuver Explained',
        img: "/images/video/2.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'Free physical therapy and medical camp',
        img: "/images/video/3.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'All about Misconceptions and Myths Regarding Physiotherapy Treatment',
        img: "/images/video/4.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: "Dr. Darkhshan Nausheen's Epic Tribute to Young PTs",
        img: "/images/video/5.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'How about "Real Patients, Real Stories: Inspiring Reviews',
        img: "/images/video/6.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'Review of therapeutic ultrasound |CSL-6 |Dr Darkhshan Nausheen',
        img: "/images/video/7.png",
    },
    {
        videoLink: "yAoLSRbwxL8",
        title: 'Pt reviews :successful recovery :after multiple fractures',
        img: "/images/video/8.png",
    },
];