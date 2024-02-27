import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Data from './components/Data';
import { useState } from 'react';
import Card from './components/Card';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img from './components/media/img01.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Card1 from './components/Card1';
import Data2 from './components/Data1';

function App() {
  const [data1, setData1] = useState(Data);
  const [data2, setData2] = useState(Data2);

  console.log(data1);
  return (
    <>
      <Header />
      <section>
        <div className="container-lg mx-auto">
          <h1 className='md:text-[40px] text-[20px] font-light mt-11 text-start mx-11 md:mx-[120px]'>Best Website builders in the US</h1>
          <div className='border border-b-2 mt-2 mx-11 md:mx-[120px] '></div>
          <div className='flex text-center justify-start md:mx-[76px]  text-slate-600 font-light flex-col md:flex-row'>
            <ul className='mt-3 flex flex-col md:flex-row'>
              <li className='md:mx-11'><CheckCircleIcon /> Last Updated - February 22, 2020</li>
              <li className='md:mx-11'><InfoIcon />Advertising Closure</li>
            </ul>
            <p className='mt-3  md:ml-[520px]'>Top Relevant<ArrowDropDownIcon /></p>
          </div>
          <div className='border border-b-1 mt-2 mx-11  md:mx-[120px]'></div>
        </div>
      </section>

      <section>
        <div className='container-md mx-auto'>
          <ul className='flex justify-center md:justify-evenly flex-wrap overflow-hidden'>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>Tools</li>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>AWS Builder</li>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>Start Build</li>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>Build Supplies</li>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>Tooling</li>
            <li className='p-2 border border-white hover:border-blue-300 rounded-lg my-2'>Blue Hosting</li>
          </ul>

          <div className='md:mx-[125px] text-slate-500 font-light mt-4'>
            <p>Home <span><KeyboardArrowRightIcon /></span> Hosting for all <span><KeyboardArrowRightIcon /></span> Hosting <span><KeyboardArrowRightIcon /></span> Hosting6 <span><KeyboardArrowRightIcon /></span> Hosting5</p>
          </div>
        </div>
      </section>

      <section>
        <Card data={data1} />
      </section>

      <section>
        <div className="container mx-auto px-5 ">
          <div className='flex flex-col md:flex-row my-[50px] bg-slate-50 mx-[50px] py-[35px] px-[20px]'>
            <div >4</div>
            <div className='mx-11'>
              <img src={img} alt="image" />
            </div>

            <div className='flex flex-col md:flex-row z-1'>
              <div>
                <h2><span className='font-bold'>CDK Resposive Builder</span>:An extensive library of widgets and apps, and detailed step-by-step guides</h2>

                <button className='bg-slate-300 px-2 rounded my-2'>26% off</button>
                <h2 className='font-bold mb-2'>Main highlights </h2>

                <p className='mx-2 bg-orange-100 px-3 py-3'>
                  <div className='mb-2'><button className='text-blue-500 bg-slate-200 px-2 rounded'>9.9</button><span className='mx-3'>Building Responsive</span></div>
                  <div className='mb-2'><button className='text-blue-500 bg-slate-200 px-2 rounded'>8.9</button><span className='mx-3'>Cool</span></div>
                  <div><button className='text-blue-500 bg-slate-200 px-2 rounded'>8.9</button><span className='mx-3'>Docs</span></div>
                </p>
                <div className='mt-2'>
                  Why we love it
                  <div className='text-blue-600 mt-2'>
                    <CheckBoxIcon /> <span className='text-slate-600 mx-2'>Documentation</span>
                  </div>
                  <div className='text-blue-600'>
                    <CheckBoxIcon /> <span className='text-slate-600 mx-2'>Easy Use</span>
                  </div>
                  <div className='text-blue-600'>
                    <CheckBoxIcon /> <span className='text-slate-600 mx-2'>Out of Box</span>
                  </div>
                </div>
                <div className='font-medium text-blue-500 mt-5'>Show more<span><KeyboardArrowDownIcon /></span></div>
              </div>
              <div>
                <div className='px-5 bg-blue-100 rounded-xl py-5'>
                  <p className='font-medium text-center text-[22px]'> 9.1</p>
                  <p className='text-center'> Very Good</p>
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
        </div>
      </section>

      <section>
        <div className='md:mx-[145px]'>
          <h1 className='md:text-[32px] text-[20px] font-normal text-center'>Related deals you might like for</h1>
        </div>
        <div className='md:mx-[145px] mx-11'>
          <Card1 data={data2} />
        </div>
      </section>

      <section className='my-11 flex md:flex-row flex-col '>
        <div className='md:mx-[125px] ml-5 font-light text-slate-600 text-start md:text-[35px] text-[20px] my-4 md:my-1'>
         <h1>Sign up and get exclusive special deals</h1>
        </div>
        <div>
        <input type='email' className='md:pr-11 pr-4 pl-2 py-2 ml-5 bg-slate-200 text-white md:w-[350px]' placeholder='Enter Email '></input>
        <button className='bg-blue-500 w-[100px] py-2 text-white'> 
          Signup
        </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
