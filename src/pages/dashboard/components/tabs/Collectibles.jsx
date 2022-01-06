import React from 'react';
import arrowDark from '../../../../assets/images/Vector-dark.png';

const data = [
  {
    title: 'Digital Ninja',
    author: 'johndoe.near',
  },
  {
    title: 'Panda',
    author: 'johndoe.near',
  },
  {
    title: 'Corexlab',
    author: 'johndoe.near',
  },
];

export default function Collectibles() {
  return (
    <div>
      {data.map(item => (
        <div key={item.title} className='flex items-center justify-between my-2 pr-5'>
          <div className='flex items-center gap-3'>
            <img
              src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
              alt=''
              className='w-16 h-16 rounded'
            />
            <div>
              <h1 className='font-bold'>{item.title}</h1>
              <>
                <span className='mr-1'>by</span>
                <a href className='text-purple'>
                  {item.author}
                </a>
              </>
            </div>
          </div>
          <img src={arrowDark} alt='' className='h-3' />
        </div>
      ))}
    </div>
  );
}
