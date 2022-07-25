import React from 'react'

export const Cart = ({totalQuantity}) => {
  return (
    <div className='sticky bottom-0 w-screen p-4 flex flex-col md:flex-row justify-between bg-red-900  text-white'>
       
        <div>
        <h3>Total Quantity : {totalQuantity}</h3>
      <h3>Total Price: &#8377; {totalQuantity * 10}</h3>

      </div>
      {totalQuantity > 10 && <div className='text-gray-100'>You can only select at max 10 items, please update the selection! </div>}
      <button className={`border p-2 rounded ${totalQuantity > 11 ? 'bg-gray-300' : 'bg-green-800 '}`} disabled={totalQuantity > 11}> Buy Now! </button>
    </div>
  )
}

