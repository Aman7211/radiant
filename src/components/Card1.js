import React from 'react';
import img from './media/img01.png';

const Card1  = ({ data }) => {
  return (
    <div className='flex md:flex-row flex-col md:justify-evenly mt-5'>
      {data.map((item) => (
        <div className="p-4 bg-slate-50">
          <div className='flex justify-center'>
            <img src={img} alt="image" height={"103px"} width={"141px"}/>
          </div>
          <div className='mt-5'>
          <button className='font-medium text-start text-sm bg-slate-200 px-2 rounded'> 28%</button>
          <button className='font-medium text-start text-sm bg-slate-200 px-2 rounded mx-2'>Limited time</button>
            </div>


            <div>
              <h2 className='font-bold text-center text-slate-600 mt-3'>{item.name}</h2>
              <p className='font-light text-[13px] text-slate-500 my-2 '>{item.heading} </p>

              <div className='font-light text-black mt-5'>$ 39.96 <span className='font-thin mx-2 text-[12px]'>$ 49.96
                </span><span className='text-red-500 font-thin mx-2 text-[12px]'>(20% off)</span></div>
    
            <div>
    

              <div className='my-5'>
              </div>
            </div>

          </div>
          <button className='bg-blue-500 text-white md:px-[90px] px-[20px] py-1 my-2 rounded text-center mx-9 md:mx-auto'>View Deal</button>

        </div>
      ))}

    </div>
  );
};
export default Card1
