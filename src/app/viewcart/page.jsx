"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ViewCart() {

  const [products, setProducts] = useState([
        {
            title:"ACC PPC Cement, 50 kg",
            thumbnailImg:"https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
            rating:"4.0",
            price:599,
            originalPrice:999,
            discount:40,
            productId:"other-134",
            category:"others",
            delivery:120,
            productId:"fhgfhgf",
            qty:1
        },
        {
            title:"ACC PPC Cement, 50 kg",
            thumbnailImg:"https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
            rating:"4.0",
            price:599,
            originalPrice:999,
            discount:40,
            productId:"other-134",
            category:"others",
            delivery:120,
            qty:1
        },
        {
            title:"ACC PPC Cement, 50 kg",
            thumbnailImg:"https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
            rating:"4.0",
            price:599,
            originalPrice:999,
            discount:40,
            productId:"other-134",
            category:"others",
            delivery:120,
            qty:1
        }
  ])

  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discount: 0,
    delivery:0,
    total:0,
    saving:0
  })

  const calculatePrice = () => {
    let price = 0
    let originalPrice = 0
    let delivery = 0
    products?.forEach(product => {
        originalPrice += (product?.originalPrice * product?.qty)
        price += (product?.price * product?.qty)
        delivery += (product?.delivery * product?.qty)
    });
    setPriceDetails({
        price: originalPrice,
        discount: originalPrice - price,
        delivery:delivery,
        saving: originalPrice - price + delivery,
        total: price
    })
  }

  useEffect(() => {
    calculatePrice()
  }, [])
  

  return (
    <>
      <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto my-4 rounded">
        <div className="flex justify-between mb-6 lg:gap-8 gap-4 lg:flex-row flex-col w-full">
          <div className="lg:w-2/3">
            <div className="bg-white border border-gray-200 rounded-lg w-full px-4 py-6">
              {products?.map((product) => {
                const [qty, setQty] = useState(1);
                return (
                  <>
                    <div className="border-b border-gray-200 pb-6 mb-4">
                        <Link href={`product/${product?.productId}`}>
                      <div className="flex gap-12 items-center cursor-pointer">
                        <img
                          className="rounded w-28"
                          src={product?.thumbnailImg}
                          alt=""
                        />
                        <div>
                          <h5 className="sm:text-xl text-lg font-semibold tracking-tight text-stone-800">
                          {product?.title}
                          </h5>
                          <div className="flex items-center mb-2.5 mt-1.5">
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
                            {product?.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <span className="sm:text-lg text-sm  font-semibold text-stone-800">
                            ₹{product?.price * qty}
                            </span>
                            <span className="sm:text-md text-sm text-gray-500 line-through">
                             ₹{product?.originalPrice * qty}
                            </span>
                            <span className="sm:text-sm text-xs text-green-600">
                            {product?.discount}% off
                            </span>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <div className="flex gap-10 mt-2.5">
                        <div className="flex gap-1">
                          <button
                            disabled={qty < 2}
                            onClick={() => {
                              setQty(qty - 1);
                            }}
                            className={`p-1 border rounded-3xl hover:bg-gray-100 ${
                              qty < 2
                                ? "text-gray-400 border-gray-400"
                                : "border-gray-600"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-dash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                          </button>
                          <input
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            className="w-12 bg-gray-200 p-1 text-center rounded-lg"
                          />
                          <button
                            onClick={() => {
                              setQty(qty + 1);
                            }}
                            className="p-1 border border-gray-600 rounded-3xl hover:bg-gray-100"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                          </button>
                        </div>
                        <button className="font-semibold text-base text-gray-500 hover:text-gray-400">
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="flex justify-end">
              <Link href="/checkout">
                <button className="bg-orange-600 text-white py-4 px-16 rounded font-semibold hover:bg-orange-500">
                  PLACE ORDER
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-6">
              <div className="text-lg font-semibold text-gray-500 border-b border-gray-200 p-2">
                PRICE DETAILS
              </div>
              <div className="border-b border-gray-200 p-2">
                <div className="flex justify-between py-2">
                  <span>Price ({products?.length} item)</span>
                  <span>₹{priceDetails?.price.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Discount</span>
                  <span className="text-green-600">- ₹{priceDetails?.discount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Delivery Charges</span>
                  <span>
                    <span className="line-through text-gray-500">₹{priceDetails?.delivery.toLocaleString("en-IN")}</span>
                    <span className="text-green-600 ml-1.5">Free</span>
                  </span>
                </div>
              </div>
              <div className="text-lg font-semibold text-gray-900 border-b border-gray-200 p-2 flex justify-between">
                <span>Total Amount</span> <span>₹{priceDetails?.total.toLocaleString("en-IN")}</span>
              </div>
              <div className="text-green-600 font-semibold p-2">
                You will save ₹{priceDetails?.saving.toLocaleString("en-IN")} on this order
              </div>
            </div>
            <div className="flex mt-4 px-4 gap-2.5 items-center text-xs text-gray-500 font-semibold">
            <img width='40' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABkklEQVR4nM2VSUsDQRCFP72oN0FF8OAx7oy5iIhLIAQ1nqIHQXBBRUQURBEMiE6iRDCJ2/xhKXjCMKQnkxjRgmKa7n7vVdd0VcM/sS5gDDgETgAP6O4EcQ8wD1wCj0AdeAWeNLcI9LVD3A+sAkWgDFQlsCm3cU3fovYapqmNAAXgHigBLyLYAMaBlNzSlQWuJG5BPAA7wGicgC/iCnABLIdIXb6g/1IR1m8m8AGkExCnIp4WtqlA0CLxVGgcdFrAU+4PfkPAC+33dZK2BCYSkHtJT2BX8jOU121dwXSDtARam9X8tLB3cQLnwDswB0w2iNIVeUoYw17HCeyrQtccqfAd5ObrwhqH05ZUMKeOlASRtIT9TFjrT04bVHTVSISeRFzknjCGHaCJ7QHPwFEDkmhavv1YmF0S2JCanbXmXIJ6yGmvnXCYhLYS6qaZGPKM9pSEaekF21LOa2rhUfKC1sraa5iWzJ7EvKKzFNzqDchqXNda/qfP5wxwoyv4JrexzVn1dsR6VSNW6eZ21+29/nv7AstUZKGFdRWeAAAAAElFTkSuQmCC"/>
              <span>
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
