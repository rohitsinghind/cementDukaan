"use client"
import React, {useState} from 'react'
import AddAddressDialog from '../components/addAddressDialog'
import EditAddressDialog from '../components/editAddressDialog'

export default function page() {

    const [readOnly, setReadOnly] = useState(true)
    const [addAddressDialog, setAddAddressDialog] = useState(false)
    const [editAddressDialog, setEditAddressDialog] = useState(false)

    const [user, setUser] = useState({firstName:"",phoneNo:"",pincode:"",address:"",area:"",city:"Jamshedpur/Jharkhand"})

    const addresses = [
        {
          name: "Rohit kumar",
          address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
          pincode: "831013",
          area: "Adityapur 1",
          city: "Jamshedpur/Jharkhand",
          landmark: "near shiv mandir",
          phoneNo: "6202371577",
        },
        {
          name: "Rohit kumar",
          address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
          pincode: "831013",
          area: "Adityapur 1",
          city: "Jamshedpur/Jharkhand",
          landmark: "near shiv mandir",
          phoneNo: "6202371577",
        },
        {
          name: "Rohit kumar",
          address: "House no - 391, road no. 1, tripurari colony, manjhi tola",
          pincode: "831013",
          area: "Adityapur 1",
          city: "Jamshedpur/Jharkhand",
          landmark: "near shiv mandir",
          phoneNo: "6202371577",
        },
      ];

    const handleOnChange = (key) => {
        key.preventDefault();
        setUser({...user,[key.target.id]:key.target.value})
    }

    const editHandler = () => {
        setReadOnly(!readOnly)
    }

  return (
    <>
     <EditAddressDialog open={editAddressDialog} setOpen={setEditAddressDialog}/>
    <AddAddressDialog open={addAddressDialog} setOpen={setAddAddressDialog}/>
    <div className="max-w-screen-xl sm:px-4 px-2 py-6 mx-auto my-4 rounded">
        <div className='bg-white w-full p-4 rounded mb-4'>
            <div className="flex justify-between mb-2">
                <h1 className='text-xl'>Personal Information</h1>
                <button className='font-semibold text-base text-orange-600 hover:text-orange-500' onClick={editHandler}>{readOnly?"Edit":"Cancel"}</button>
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
        <div className='bg-white w-full p-4 rounded'>
            <div className="flex justify-between mb-4">
                <h1 className='text-xl'>Saved Addresses</h1>
            </div>
            <div>
            {addresses?.map((adderss, i) => {
                  return (
                    <div className="sm:flex w-full sm:mb-4">
                      <div class="flex w-full">
                        
                        <label
                          for="default-radio-1"
                          class="ml-4 font-medium flex justify-between w-full"
                        >
                          <span className="text-gray-900 text-sm mb-2">
                            {adderss?.name}
                            <br />
                            <span className="text-xs text-gray-600">
                              {adderss?.address}, {adderss?.landmark},{" "}
                              {adderss?.area}, {adderss?.city} -
                              {adderss?.pincode}. <br />
                              {adderss?.phoneNo}
                            </span>
                          </span>
                          <div className="flex gap-4 items-center">
                            <button className="text-orange-600 hover:text-orange-500 font-semibold text-sm hover:bg-orange-50 flex p-2 h-8 rounded-lg" onClick={()=>setEditAddressDialog(adderss)}>
                              Edit
                            </button>
                            <button className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg font-semibold text-sm flex p-2 h-8">
                              Delete
                            </button>
                            </div>
                        </label>
                      </div>
                    </div>
                  );
                })}
                  <button onClick={()=>setAddAddressDialog(true)} className="ml-4 flex gap-1 items-center text-orange-600 hover:text-orange-500 font-semibold text-sm hover:bg-orange-50 rounded-lg p-2">
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
                Add a new address
              </button>
            </div>
        </div>
    </div>
    </>
  )
}
