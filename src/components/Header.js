import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Header = () => {
  return (
    <div className='h-[64px] bg-[#212731] text-white py-3 md:pl-[300px] pl-[20px] flex'>
        <span className='hidden md:flex  bg-white border border-slate-300  px-3 text-black py-2 rounded-xl'><SearchIcon/>
        <input class="placeholder:italic block bg-white py-2 pl-9 pr-3  focus:outline-none
     sm:text-sm"  type="text" name="search"></input></span>
     <div className='flex'>
     <div className=' text-start md:hidden'>
     Radiant Riches LLC
     </div>
     <div className='md:hidden pl-[100px]'><MoreVertIcon/></div>
     </div>
     <div>
        <ul className='md:flex hidden'>
           <li className='mx-11 my-2'>Category</li>
           <li className='mx-11 my-2'>Website Builders</li> 
           <li className='mx-11 my-2'>Today's deals</li> 
        </ul>
     </div>
    </div>
  )
  }

export default Header