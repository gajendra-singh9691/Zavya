import React, { useEffect, useState } from 'react'

const Addtocart = ({addtocart,fun,data}) => {
    const [width,setwidth] = useState('0rem')
useEffect(()=>{
    if (addtocart) {
        setwidth('100%');
    }
    else {
        setwidth('0%')
    }
},[addtocart])
  return (
    <div className='absolute z-40 right-0 top-0 min-h-screen bg-[#3b3b3b8d] duration-200' style={{width : width}} onClick={()=>fun(!addtocart)}>
      <div className='w-1/4 absolute top-0 right-0 bg-white h-full z-50'>
        <div className='flex items-center justify-between p-4 border-b-2 border-gray-300 '>
            <span>SHOPPING CART</span>
            <div className='cursor-pointer p-1'>
                <i className="fa-solid fa-xmark "></i>
            </div>
        </div>
        <div>
            {
                (data.length == 0) ? <h1>Your cart is empty</h1> : <div>
                    {
                        data.map(()=>{
                            return <div>
                                hello
                            </div>
                        })
                    }
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Addtocart
