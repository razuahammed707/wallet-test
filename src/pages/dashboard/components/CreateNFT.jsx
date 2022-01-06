import React from 'react';
import vectorLight from '../../../assets/images/Vector.png';
import logo from '../../../assets/images/Vector_circle.png';
import logo2 from '../../../assets/images/Vector-circle2.png';

export default function CreateNFT() {
  return (
    <div className='my-3 h-44 bg-light_gray rounded-md p-3 text-gray_text relative'>
      <h1 className='text-2xl font-semibold'>
        Start <br /> Creating your <br /> NFT Today
      </h1>
      <div className='bg-purple py-2.5 pl-5 pr-2.5  mt-2 text-base font-semibold rounded-lg tracking-wider flex items-center cursor-pointer text-white justify-between w-1/2'>
        Create NFT
        <img src={vectorLight} alt='' className='h-3' />
      </div>
      <img src={logo} alt='' className='absolute top-0 right-0' />
      <img src={logo2} alt='' className='absolute top-0 right-0' />
    </div>
  );
}
