'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeCarousal() {
  return (
    <>
     <Carousel className='mb-10' showArrows={true} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                <div>
                    <img src="https://resumekraft.com/wp-content/uploads/2021/08/art-linkedin-background-photo-1024x256.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://resumekraft.com/wp-content/uploads/2021/08/art-linkedin-background-photo-1024x256.jpg" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://resumekraft.com/wp-content/uploads/2021/08/art-linkedin-background-photo-1024x256.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
    </Carousel>
    </>
  )
}