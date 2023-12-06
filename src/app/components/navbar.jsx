"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItem, setcartItem] = useState(0);

  const handleSearch = () => {
    try {
      setSearchActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 sm:py-2 py-2.5">
          <Link href="/">
            <Image
              className="w-32 md:w-full sm:mr-0 mr-4"
              src="/logo.png"
              height={50}
              width={170}
            />
          </Link>

          <div
            className="md:grow md:mx-12 md:block hidden w-0 shadow-md rounded-3xl"
          >
            <div className="flex w-full">
              <div className="relative w-full">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-3xl"
                  placeholder="Search Cements, Bricks, Bars Others..."
                />
                <Link href={`/products/${searchQuery}`}>
                <button
                  className="absolute top-0 right-0 pr-4 p-2.5 text-sm font-medium h-full text-white bg-orange-600 rounded-r-3xl  hover:bg-orange-500"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex sm:gap-4 gap-0 items-center">
            {searchActive ? (
              ""
            ) : (
              <button
                onClick={() => setSearchActive(true)}
                type="button"
                className="text-center text-stone-800 hover:bg-orange-50 rounded-3xl hover:text-stone-950 p-3 block md:hidden md:w-0"
              >
                <span className="sr-only">search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            )}
            <Link
              href="/login"
              className="text-stone-800 border-2 border-stone-800 hover:bg-orange-50 hover:text-stone-950 font-semibold rounded-3xl text-sm sm:px-5 px-2.5 py-2.5 text-center md:block md:w-auto hidden w-0"
            >
              Loging/Signup
            </Link>
            <button
              type="button"
              className="text-center text-stone-800 hover:bg-orange-50 rounded-3xl hover:text-stone-950 p-3 block md:hidden md:w-0"
            >
              <span className="sr-only">Account</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </button>
            <Link href="/viewcart">
            <button
              type="button"
              className="relative inline-flex items-center p-2 text-center text-stone-800 hover:bg-orange-50 rounded-3xl hover:text-stone-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <span className="sr-only">Cart</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-red-500  rounded-full -top-2 -right-2">
                {cartItem}
              </div>
            </button>
            </Link>
            <div className="dropdown relative">
            <button
              type="button"
              className="text-center text-stone-800 hover:bg-orange-50 rounded-3xl hover:text-stone-950 p-3 dropbtn"
            >
              <span className="sr-only">More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </button>
            <div className="absolute z-10 bg-white shadow-xl rounded-lg py-2 border-t-4 border-slate-300 top-10 right-0 flex flex-col dropcontent hidden w-36">
              <Link
              href='/order'
                className="text-stone-800 border-b-2 border-slate-400 hover:bg-orange-50 hover:text-stone-950 font-semibold text-sm px-4 py-1.5"
              >
                My Orders
              </Link>
              <Link
                href="/account"
                className="text-stone-800 border-b-2 border-slate-400 hover:bg-orange-50 hover:text-stone-950 font-semibold text-sm px-4 py-1.5"
              >
                Accounts
              </Link>
              <Link
                href="/support"
                className="text-stone-800 border-b-2 border-slate-400 hover:bg-orange-50 hover:text-stone-950 font-semibold text-sm px-4 py-1.5"
              >
                Customer Care
              </Link>
              <button
                type="button"
                className="text-stone-800 border-b-2 border-slate-400 hover:bg-orange-50 hover:text-stone-950 font-semibold text-sm px-4 py-1.5 text-start"
              >
                Logout
              </button>
            </div>
            </div>

          </div>

          {searchActive ? (
            <div
              className="w-full block md:hidden md:w-0"
            >
              <div className="flex w-full pt-4">
                <div className="relative w-full">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-3xl"
                    placeholder="Search Cements, Bricks, Bars Others..."
                  />
                  <Link href={`/products/${searchQuery}`}>
                  <button
                    className="absolute top-0 right-0 pr-4 p-2.5 text-sm font-medium h-full text-white bg-orange-600 rounded-r-3xl  hover:bg-orange-500"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
               </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
}
