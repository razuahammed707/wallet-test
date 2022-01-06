import React from 'react';
import badgeIcon from '../../assets/images/badge.png';
import editIcon from '../../assets/images/edit.png';
import TabPanel from './TabPanel';

export default function Profile() {
  return (
    <div className='px-5 py-3'>
      <div className='flex items-center justify-between'>
        <div className='rounded-full h-12 w-12 bg-gray_bg flex items-center justify-center'>SR</div>
        <div className='flex items-center gap-4'>
          <img src={badgeIcon} alt='' />
          <img src={editIcon} alt='' />
        </div>
      </div>
      <div className='font-semibold mt-2'>
        <p className=''>Devon Lane</p>
        <small className='text-gray_text '>devonlane@gmail.com</small>
      </div>
      <TabPanel />
    </div>
  );
}
