import React from 'react';
import arrowDark from '../../../assets/images/Vector-dark.png';
import vectorLight from '../../../assets/images/Vector.png';
import rectangle from '../../../assets/images/Rectangle 226.png';
import rectangle2 from '../../../assets/images/Rectangle 224.png';
import rectangle3 from '../../../assets/images/Rectangle 225.png';
import rectangle4 from '../../../assets/images/Rectangle 223.png';
import {Link} from "react-router-dom"

export default function Cards() {
  return (
    <div className='flex gap-3 justify-center'>
      <div className='xs:w-40 xs:h-24 sm:h-28 w-1/2 bg-gray p-2 rounded-md'>
        <Link to="/contact"><div className='flex justify-between align items-center'>
          <h1 className='text-base font-semibold'>Contacts</h1>
          <img src={arrowDark} alt='' className='h-3' />
        </div>
        </Link>
        <div className='flex mt-2 contact-container'>
          <img
            src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <img
            src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <img
            src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <img
            src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
            alt=''
            className='w-10 h-10 rounded-full'
          />
        </div>
      </div>

      <div className='xs:w-40 h-24 w-1/2 bg-purple p-2 text-white relative rounded-md'>
        <div className='flex justify-between align items-center'>
          <h1 className='text-base font-semibold'>web3 Apps</h1>
          <img src={vectorLight} alt='' className='h-3' />
        </div>
        <img src={rectangle} alt='' className='absolute bottom-0 right-12' />
        <img src={rectangle2} alt='' className='absolute bottom-0 right-0' />
        <img src={rectangle3} alt='' className='absolute bottom-5 right-5' />
        <img src={rectangle4} alt='' className='absolute top-0 right-0' />
        <button className='bg-green rounded-md px-1.5 py-1 text-xs tracking-wide mt-1'>
          12 Connected
        </button>
      </div>
    </div>
  );
}
