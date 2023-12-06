"use client"
import React, {useState} from 'react'

export default function page() {

    const [readOnly, setReadOnly] = useState(true)

    const [user, setUser] = useState({firstName:"",phoneNo:"",pincode:"",address:"",area:"",city:"Jamshedpur/Jharkhand"})

    const handleOnChange = (key) => {
        key.preventDefault();
        setUser({...user,[key.target.id]:key.target.value})
    }

    const editHandler = () => {
        setReadOnly(!readOnly)
    }

  return (
    <>
    <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto my-4 rounded">
        <div className='bg-white w-full p-4 rounded'>
            <div className="flex justify-between mb-2">
                <h1 className='text-2xl'>Personal Information</h1>
                <button className='font-semibold text-lg text-orange-600 hover:text-orange-500' onClick={editHandler}>{readOnly?"Edit":"Cancel"}</button>
            </div>
            <div class="my-8 grid grid-cols-2 gap-x-10 gap-y-4">
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
            <input type="text" id="firstName" disabled={readOnly} value={user?.firstName} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="First Name" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
            <input type="text" id="lastName" disabled={readOnly} value={user?.lastName} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Last Name" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input type="text" id="email" disabled={readOnly} value={user?.email} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Email Address" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
            <input type="text" id="phoneNo" disabled={readOnly} value={user?.phoneNo} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Mobile Number" required/>
        </div>
            </div>
            {readOnly?"":<button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Update
                </button>}
        </div>
    </div>
    </>
  )
}
