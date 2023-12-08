"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function page() {
  const [orders, setOrders] = useState([
    {
      orderId: "CD344574278331024",
      createdAt: "July 22, 2023",
      price: 2997,
      discount: 1200,
      delivery: 500,
      total: 1797,
      saving: 1700,
      paymentMethod: "COD",
      address: {
        name: "Rohit kumar",
        address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
        pincode: "831013",
        area: "Adityapur 1",
        city: "Jamshedpur/Jharkhand",
        landmark: "near shiv mandir",
        phoneNo: "6202371577",
      },

      products: [
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          productId: "fhgfhgf",
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Cancelled", desc: "Sun, 15th Feb 2023", color: "red" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
      ],
    },
    {
      orderId: "CD344574278331024",
      createdAt: "July 22, 2023",
      price: 2997,
      discount: 1200,
      delivery: 500,
      total: 1797,
      saving: 1700,
      paymentMethod: "COD",
      address: {
        name: "Rohit kumar",
        address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
        pincode: "831013",
        area: "Adityapur 1",
        city: "Jamshedpur/Jharkhand",
        landmark: "near shiv mandir",
        phoneNo: "6202371577",
      },

      products: [
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          productId: "fhgfhgf",
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Cancelled", desc: "Sun, 15th Feb 2023", color: "red" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
      ],
    },
    {
      orderId: "CD344574278331024",
      createdAt: "July 22, 2023",
      price: 2997,
      discount: 1200,
      delivery: 500,
      total: 1797,
      saving: 1700,
      paymentMethod: "COD",
      address: {
        name: "Rohit kumar",
        address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
        pincode: "831013",
        area: "Adityapur 1",
        city: "Jamshedpur/Jharkhand",
        landmark: "near shiv mandir",
        phoneNo: "6202371577",
      },

      products: [
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          productId: "fhgfhgf",
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Cancelled", desc: "Sun, 15th Feb 2023", color: "red" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
        {
          title: "ACC PPC Cement, 50 kg",
          thumbnailImg:
            "https://m.media-amazon.com/images/I/41D1rkLWDWL._SY445_SX342_QL70_FMwebp_.jpg",
          rating: "4.0",
          price: 599,
          originalPrice: 999,
          discount: 40,
          productId: "other-134",
          category: "others",
          delivery: 120,
          qty: 1,
          timeline: [
            {
              title: "Ordered Confirmed",
              desc: "Sun, 11th Feb 2023",
              color: "green",
            },
            { title: "Shipped", desc: "Sun, 14th Feb 2023", color: "green" },
            { title: "Delivered", desc: "Sun, 15th Feb 2023", color: "gray" },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto my-4 rounded">
        {orders?.map((order) => {
          return (
            <>
              <h1 className="font-semibold text-gray-600 text-lg my-2 text-center mt-4">
                Ordered on {order?.createdAt}
              </h1>
              <div className="flex justify-between mb-6 lg:gap-8 gap-4 lg:flex-row flex-col-reverse w-full">
                <div className="lg:w-2/3">
                  <div className="bg-white border border-gray-200 rounded-lg w-full px-4 py-6">
                    {order?.products?.map((product) => {
                      const [qty, setQty] = useState(1);
                      return (
                        <>
                          <div className="border-b border-gray-200 pb-6 mb-4">
                            <Link href={`product/${product?.productId}`}>
                              <div className="flex gap-12 items-center justify-between cursor-pointer">
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
                                <div className="flex flex-col items-center gap-2">
                                  <img
                                    className="rounded w-28"
                                    src={product?.thumbnailImg}
                                    alt=""
                                  />
                                  <div className="flex gap-2 items-center border border-gray-300 w-20 py-1 justify-center text-base text-gray-600 rounded">
                                    Qty: {product?.qty}
                                  </div>
                                </div>
                              </div>
                              <ol class="relative text-gray-500 border-s border-gray-200 ml-8 mt-4">
                                {product?.timeline?.map((item) => {
                                  return (
                                    <li class="mb-10 ms-6">
                                      <span
                                        class={`absolute flex items-center justify-center w-8 h-8 bg-${item?.color}-200 rounded-full -start-4 ring-4 ring-white`}
                                      >
                                        {item?.color === "gray" ? (
                                          <svg
                                            class={`w-3.5 h-3.5 text-${item?.color}-500`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 50 50"
                                          >
                                            <path
                                              stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"
                                            />
                                          </svg>
                                        ) : (
                                          <svg
                                            class={`w-3.5 h-3.5 text-${item?.color}-500`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 16 12"
                                          >
                                            <path
                                              stroke="currentColor"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M1 5.917 5.724 10.5 15 1.5"
                                            />
                                          </svg>
                                        )}
                                      </span>
                                      <h3 class="font-medium leading-tight sm:text-lg text-sm">
                                        {item?.title}
                                      </h3>
                                      <p class="sm:text-sm text-xs">
                                        {item?.desc}
                                      </p>
                                    </li>
                                  );
                                })}
                              </ol>
                              <div className="flex justify-end">
                                <button className="flex mt-4 px-4 gap-2.5 items-center text-xs text-gray-500 font-semibold hover:text-gray-700">
                                  CANCEL ORDER
                                </button>
                              </div>
                            </Link>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-white border border-gray-200 rounded-lg px-4 py-6">
                    <div className="sm:text-lg text-base font-semibold text-gray-500 border-b border-gray-200 p-2">
                      ORDER DETAILS
                    </div>
                    <div className="border-b border-gray-200 p-2 sm:text-base text-sm">
                      <div className="flex justify-between py-2">
                        <span>Order Id. </span>
                        <span>{order?.orderId}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Price ({order?.products?.length} item)</span>
                        <span>₹{order?.price.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Discount</span>
                        <span className="text-green-600">
                          - ₹{order?.discount.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Delivery Charges</span>
                        <span>
                          <span className="line-through text-gray-500">
                            ₹{order?.delivery.toLocaleString("en-IN")}
                          </span>
                          <span className="text-green-600 ml-1.5">Free</span>
                        </span>
                      </div>
                    </div>
                    <div className="sm:text-lg text-base font-semibold text-gray-900 border-b border-gray-200 p-2 flex justify-between">
                      <span>Total Amount</span>{" "}
                      <span>₹{order?.total.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="text-green-600 font-semibold p-2">
                      <span>Payment Method:</span> <span>COD</span>
                    </div>
                    <div className="sm:text-lg text-base font-semibold text-gray-900 p-2">
                      <div>Shipping Details:</div>
                      <div className="mt-1 font-normal sm:text-base text-sm0.  text-gray-600">
                        <div className="sm:text-lg text-base">
                          {order?.address?.name} - {order?.address?.phoneNo}
                        </div>
                        <span>
                          {order?.address?.address}, {order?.address?.landmark},{" "}
                          {order?.address?.area}, {order?.address?.city} -
                          {order?.address?.pincode}.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex mt-4 px-4 gap-2.5 items-center text-xs text-gray-500 font-semibold hover:text-gray-700">
                      NEED HELP?
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
