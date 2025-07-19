import React, { useEffect, useRef, useState } from 'react'

const Addtocart = ({ addtocart, fun, data }) => {
    const cart = useRef();
    const [width, setwidth] = useState('0rem')
    useEffect(() => {
        if (addtocart) {
            setwidth('100%');
            cart.current.style.display = 'block';
        }
        else {
            setwidth('0%')
            cart.current.style.display = 'none';
        }

    }, [addtocart])
    const cartopenclose = (e) => {
        if (e.target === e.currentTarget) {
            fun(!addtocart)
        }
    }
    return (
        <div className='fixed z-40 right-0 top-0 min-h-screen bg-[#3b3b3b8d] duration-200' style={{ width: width }} onClick={cartopenclose} >
            <div ref={cart} className='w-1/4 absolute top-0 right-0 bg-white h-full z-50'>
                <div className='flex items-center justify-between p-4 border-b-2 border-gray-300 '>
                    <span className='font-bold text-xl'>SHOPPING CART</span>
                    <div className='cursor-pointer p-1' onClick={cartopenclose}>
                        <i className="fa-solid fa-xmark "></i>
                    </div>
                </div>
                <div>
                    {
                        (data.length == 0) ? <div className='flex justify-center py-10'>
                            <h1 className='font-semibold text-xl'>Your cart is empty</h1>
                        </div> : <div>
                            {
                                data.map(() => {
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
