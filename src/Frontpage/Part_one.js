import React from 'react'
import plate from '../Images/plate01.png';

export default function Part_one() {
  return (
    <div>
      <div className=' h-auto bg-green-500 flex'>
        <div id='ImageDiv' className='  bg-black h-[00px] md:h-[600px] w-[30%] overflow-hidden'>
            <div className=''>
        {/* <img className=' rotate-180  w-[400px] h-[400px]' alt='Food plate' src={plate}></img> */}
        </div>
        </div>
        <div id='ContentDiv' className=' h-[200px] md:h-[600px] bg-gray-600 w-[70%]'>
        <div>1</div>
        </div>
      </div>
    </div>
  )
}
