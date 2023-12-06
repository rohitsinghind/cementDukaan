"use client";
import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductContainer from "@/app/components/productContainer";
import { 
    FacebookShareButton, 
    FacebookIcon,  
    WhatsappShareButton, 
    WhatsappIcon, 
    LinkedinShareButton, 
    LinkedinIcon, 
    EmailShareButton,
    EmailIcon
  } from 'next-share'; 

export default function Product({ params }) {

    const shareUrl = "https://localhost:3000/product/id"

    const copyText = () => {
        navigator.clipboard.writeText(shareUrl);
        setIsCopied(true)
      }

  return (
    <>
      <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto bg-white my-4 rounded">
        <div className="flex justify-between mb-6 lg:gap-8 gap-4 lg:flex-row flex-col">
          <div className="lg:w-1/2 sm:px-0 px-2.5">
            <Carousel
              dynamicHeight={true}
              showArrows={false}
              showThumbs={true}
              showStatus={true}
            >
              <div>
                <img src="https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg" />
                {/* <p className="legend">Legend 1</p> */}
              </div>
              <div>
                <img src="https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg" />
                {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                <img src="https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg" />
                {/* <p className="legend">Legend 3</p> */}
              </div>
            </Carousel>
          </div>
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow lg:py-8 sm:py-5 py-2.5 lg:px-14 sm:px-8 px-2.5">
            <div className="flex justify-between items-center">
              <div>
                <h5 className="sm:text-xl text-lg font-semibold tracking-tight text-stone-800">
                  ACC PPC Cement, 50 kg
                </h5>
                <div className="flex items-center mb-2.5 mt-2">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-orange-200 text-stone-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                    4.0
                  </span>
                </div>
              </div>
              <div className="relative dropdown">
                <button className="text-gray-500 hover:bg-gray-100 p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-share-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                  </svg>
                </button>
                <div class="absolute dropcontent right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl hidden flex gap-2.5 p-4">
                    <FacebookShareButton url={shareUrl}> <FacebookIcon size={32} round /> </FacebookShareButton>
                    <WhatsappShareButton url={shareUrl} ><WhatsappIcon size={32} round /></WhatsappShareButton> 
                    <LinkedinShareButton url={shareUrl} > <LinkedinIcon size={32} round /></LinkedinShareButton> 
                    <EmailShareButton url={shareUrl} > <EmailIcon size={32} round /></EmailShareButton>
                    <button className="text-lg font-bold p-2.5 bg-gray-700 text-gray-100 rounded-3xl" onClick={copyText}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
                    </svg>
                    </button>
                </div>
              </div>
            </div>
            <div className="sm:text-base text-xs font-semibold text-green-600 mt-6 mb-2">
              40% off
            </div>
            <div className="flex items-center gap-2.5">
              <span className="sm:text-xl text-sm  font-semibold text-stone-800">
                ₹599
              </span>
              <span className="sm:text-lg text-sm text-gray-500 line-through">
                ₹999
              </span>
            </div>
            <div className="w-fit bg-green-100 text-green-800 text-base font-medium mr-2 px-2.5 py-0.5 rounded mt-2 flex items-center">
              Free delivery only in{" "}
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>{" "}
              Jamshedpur
            </div>
            <div className="flex items-center gap-2.5 mb-8 mt-2">
              <button
                type="button"
                className="bg-white text-orange-600 hover:bg-orange-50 border-2 border-orange-600 font-semibold rounded-3xl sm:text-sm text-xs px-5 py-2.5 text-center inline-flex items-center mt-2.5 w-full flex justify-center items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                Add to cart
              </button>
              <Link href={`../viewcart/${'id'}`} className="w-full">
              <button
                type="button"
                className="text-white bg-orange-600 hover:bg-orange-500 font-semibold rounded-3xl sm:text-sm text-xs px-5 py-2.5 text-center inline-flex items-center mt-2.5 w-full flex justify-center items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                Buy now
              </button>
              </Link>
            </div>

            <h2 class="mb-2 text-base font-semibold text-gray-900">
              Product Description:
            </h2>
            <ul class="test-sm max-w-md space-y-1 text-gray-500 list-disc list-inside">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="lg:mx-12"> */}
        <ProductContainer title="Related items" category="cement" />
      {/* </div> */}
    </>
  );
}
