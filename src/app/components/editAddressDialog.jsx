"use client"
import React,{useState, useEffect} from 'react'

export default function EditAddressDialog({open, setOpen}) {

    const [address, setAddress] = useState({name:"",phoneNo:"",pincode:"",address:"",area:"",landmark:"",city:"Jamshedpur/Jharkhand"})

    const handleOnChange = (key) => {
        key.preventDefault();
        setAddress({...address,[key.target.id]:key.target.value})
    }

    console.log(address)

    useEffect(() => {
        setAddress(open)
    }, [open])
 
  return (
    <>
    <div className={`bg-[#000000af] overflow-hidden backdrop-blur-md w-full h-screen fixed top-0 ${open?"":"hidden"}`}>
        <div class="fixed z-10 my-auto mx-auto inset-x-0 inset-y-0 w-96 h-fit max-h-screen my-4 overflow-y-scroll bg-white rounded-lg shadow">
            <button onClick={()=>setOpen(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6">
                
                <h3 className="font-semibold text-sm text-gray-600 text-center mb-3">Edit Address</h3>
                <div class="">
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Full name</label>
            <input type="text" id="name" value={address?.name} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Full name" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Phone no.</label>
            <input type="number" id="phoneNo" value={address?.phoneNo} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Phone no." required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Pincode</label>
            <input type="number" id="pincode" value={address?.pincode} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Pincode" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Address</label>
            <input type="text" id="address" value={address?.address} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Full address" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">Area</label>
            <input type="text" id="area" value={address?.area} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="Area" required/>
        </div>
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900">City</label>
            <input type="text" id="city" disabled={true} value={address?.city} onChange={handleOnChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-2.5" placeholder="City" required/>
        </div>
            
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Add
                </button>
            </div>
        </div>
        </div>
        </div>
        </> 
  )
}
