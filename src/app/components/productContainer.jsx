"use client";
import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";

export default function ProductContainer({ title, category }) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto sm:px-4 px-2 py-6 bg-white my-4 rounded">
        <div className="flex justify-between mb-6">
          <div className="text-xl font-semibold text-stone-800">{title}</div>
          <Link href={`/products/${category}`}>
          <button
            type="button"
            className="text-white bg-orange-600 hover:bg-orange-500 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-5 sm-gap-4 gap-2 sm:grid-cols-3 grid-cols-2">
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
          <ProductCard
            thumbnailImg={
              "https://m.media-amazon.com/images/I/41wK6dzfcIL._AC_UF1000,1000_QL80_.jpg"
            }
            title={"ACC PPC Cement, 50 kg"}
            rating={4.1}
            price={599}
            originalPrice={999}
            discount={40}
            productId={"cement1023"}
            category="cement"
          />
        </div>
      </div>
    </>
  );
}
