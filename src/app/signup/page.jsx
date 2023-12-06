"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {

    const [creds, setCreds] = useState({userId:"", password:""})

    const handleOnChange = (key) => {
        key.preventDefault();
        setCreds({...creds,[key.target.id]:key.target.value})
    }

  return (
    <>
     {/* <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto my-4 rounded"> */}
     <div className="loginBg backdrop-blur-md w-full min-h-[684px] flex justify-center item-center">
        <div class=" m-auto inset-x-0 inset-y-0 w-96 my-auto h-fit bg-white rounded-lg shadow">
        
            <div class="p-6">
                <div className="flex justify-center">
                <Image
              className="w-42"
              src="/logo.png"
              height={50}
              width={170}
            />
                </div>
                <h3 className="font-semibold text-xl text-gray-600 text-center mt-6 mb-4">Signup</h3>
                <div class="">
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Email/Phone no.</label>
            <input type="text" id="userId" value={creds?.userId} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Enter Email/Phone No." required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="text" id="password" value={creds?.password} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Enter Password" required/>
        </div>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm items-center px-5 py-2.5 text-center w-full flex justify-center">
                    Login
                </button>
                <div className="flex items-center gap-4 mt-4 justify-center">
                <Link href="/signup" className='text-sm font-semibold text-gray-700 hover:text-gray-600'>Create an new account</Link><p>|</p><Link href="/forgot-password" className='text-sm font-semibold text-gray-700 hover:text-gray-600'>Forgot password?</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    {/* </div> */}
    </>
  )
}
