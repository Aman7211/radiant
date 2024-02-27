import React from 'react';
import img from './media/img01.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiamondIcon from '@mui/icons-material/Diamond';

const Card = ({ data }) => {
  return (
    <div className="container mx-auto px-5 ">
      {data.map((item) => (
        <div key={item.id} className='flex flex-col md:flex-row my-[50px] bg-slate-50 mx-[50px] py-[35px] px-[20px]'>


         <div className='z-2 '>
          {item.id == 1 ? (
            <div className='flex my-[-50px] mx-[-75px]'>
              <button className='text-white bg-orange-500 text-center items-center flex px-2 rounded-lg'><EmojiEventsIcon className='my-3 mx-2'/>Best Choice </button>
            </div>
          ) : null }

          {item.id == 2 ? (
           <div className='flex my-[-50px] mx-[-75px]'>
           <button className='text-white bg-orange-500 text-center items-center flex px-2 rounded-lg'><DiamondIcon className='my-3 mx-2'/>Best Value </button>
         </div>
          ) : null}
          </div>
          <div >{item.id}</div>
          <div className='mx-11'>
            <img src={img} alt="image" />
          </div>



          <div className='flex flex-col md:flex-row z-1'>
            <div>
              <h2><span className='font-bold'>{item.heading}</span>-{item.headingcontent}</h2>
              <h2 className='font-bold mb-2'>Main highlights </h2>
              <p className='mx-2'>{item.main}</p>
              <div className='font-medium text-blue-500 mt-5'>Show more<span><KeyboardArrowDownIcon /></span></div>
            </div>
            <div>
              <div className='px-5 bg-blue-100 rounded-xl py-5'>
                <p className='font-medium text-center text-[22px]'> {item.rating}</p>
                <p className='text-center'> {item.review}</p>
                <p className='text-center flex text-yellow-600 justify-center '>
                  <span><StarIcon /></span>
                  <span><StarIcon /></span>
                  <span><StarIcon /></span>
                  <span><StarIcon /></span>
                  <span><StarIcon /></span>
                </p>

              </div>
              <div className='my-5'>
                <button className='bg-blue-500 text-white px-[90px] py-1 my-2 rounded text-center mx-auto'>View</button>
              </div>
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};

export default Card;
