import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar } from '../store/features/uiSlice';
import { useLocation } from 'react-router';

function Sidebar() {
    const uiState = useSelector(state => state.ui);
    const sidebar = uiState.sidebar;
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    console.log(pathname)
    // console.log(sidebar);
  return (
    <div className={`absolute ${sidebar ? `flex` : `hidden`} rounded-lg border-white/10 bg-gray-200/10 backdrop-blur-xs md:mt-[110px] mt-[70px] z-15 delay-300 top-[5%] left-[5%] w-[90%] py-4 md:ml-[10px] md:h-[20%] min-h-fit min-w-fit md:w-[120px] md: border translate-x-0`}>
      <div className=' m-2 w-full flex items-center gap-5 justify-center'>
        <div className='h-full w-fit mr-10'>
        <div 
        onClick={()=>dispatch(setSidebar())}
        className='absolute top-2 left-2 cursor-pointer bg-white text-black rounded-full pb-[3px] w-6 h-6 flex items-center justify-center'>x</div>
        </div>
        <div className=' w-full divide-y rounded-none'>
        <div className={` p-1 hover:scale-120 delay-75 text-normal ${pathname === "/" ? "bg-white text-black rounded-md": ""} `}>Details</div>
        <div className={`p-1 hover:scale-120 delay-75 text-normal`}>placeholder</div>
        <div className={`p-1 hover:scale-120 delay-75 text-normal`}>placeholder</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

// ${sidebar ? `flex` : `hidden`}