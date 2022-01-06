import React, { useState } from 'react';
import home from '../assets/images/home.svg';
import notification from '../assets/images/notification.png';
import setting from '../assets/images/settings.png';
import circle from '../assets/images/circle.png';
import circle2 from '../assets/images/Group 431.png';
import circle3 from '../assets/images/Group 253.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import BackButton from '../assets/images/back-icon.svg';
import HomeButton from '../assets/images/HomeButton.svg';
import AccountsModal from './modals/AccountsModal';

const accounts = [
  {
    name: 'jhonjoe.near',
    icon: <img src={circle} alt='' className='h-10 w-10 ' />,
    active: true,
  },
  {
    name: 'jhonjoe.near',
    icon: <img src={circle2} alt='' className='h-10 w-10 ' />,
  },
  {
    name: 'jhonjoe.near',
    icon: <img src={circle3} alt='' className='h-10 w-10 ' />,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const name = useParams();
  const navigate = useNavigate();

  return (
    <div className='h-16 bg-gray_bg grid grid-cols-4 items-center px-5 '>
      <div className=''>
        {name['*'] === '' ? (
          <Link to='/'>
            <img src={home} alt='' className='w-8 h-10' />
          </Link>
        ) : (
          <>
            <div className='flex '>
              <img
                src={BackButton}
                alt=''
                className='h-5.5 w-5.5 cursor-pointer'
                onClick={() => {
                  navigate(-1);
                }}
              />
              <Link to='/'>
                <img src={HomeButton} alt='' className='h-5.5 w-5.5 ml-2 ' />
              </Link>
            </div>
          </>
        )}
      </div>

      <div className='bg-white px-3 py-2 rounded-3xl ring-1 ring-gray flex gap-2 col-span-2'>
        <img src={circle} alt='' />
        <AccountsModal openModal={open} setOpenModal={setOpen} accounts={accounts} />
      </div>
      <div className='flex gap-2 flex-row-reverse'>
        <img src={setting} alt='' className='h-6 w-6' />
        <Link to='/notification'>
          <img src={notification} alt='' className='h-6 w-6 ' />
        </Link>
      </div>
    </div>
  );
}
