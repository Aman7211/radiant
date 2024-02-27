import React from 'react'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Footer = () => {
  return (
    <div className='mt-6px md:h-[300px] bg-[#212731]'>
      <div className="container md:mx-auto mx-6 flex md:justify-evenly flex-col md:flex-row">

        <div className='mt-[50px]'>
         <h1 className='text-white mb-3'>CATEGORIES</h1>
         <ul className='text-slate-400'>
          <li className='my-1'>Web Builder</li>
          <li className='my-1'>Hosting</li>
          <li className='my-1'>Data Center</li>
          <li className='my-1'>Robotic Automation</li>
         </ul>

        </div>

          <div className='mt-[50px]'>
         <h1 className='text-white mb-3'>CONTACT</h1>
         <ul className='text-slate-400'>
          <li className='my-1'>Contact</li>
          <li className='my-1'>Privacy Policy</li>
          <li className='my-1'>Terms of Service</li>
          <li className='my-1'>Categories</li>
          <li className='my-1'>About</li>

         </ul>
        </div>

          <div className='md:mt-[100px] mt-[50px]'>
         <h1 className='text-white mb-3'>United State <span><ArrowDropDownCircleIcon /></span></h1>
        </div>


      </div>
    </div>
  )
}

export default Footer