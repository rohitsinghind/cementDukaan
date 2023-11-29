'use client'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeCarousal() {
  return (
    <>
     <Carousel className='mb-10' showArrows={true} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                <div>
                    <img src="https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://cultivatedculture.com/wp-content/uploads/2019/05/Chromatic-LinkedIn-Cover-Photo-Background.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
    </Carousel>
    </>
  )
}