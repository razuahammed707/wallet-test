import React from 'react';
import offerIcon from '../../assets/images/offer.png';
import inviteIcon from '../../assets/images/invite.png';
import transferIcon from '../../assets/images/transfer.png';

export default function NotificationBlock({ data }) {
  const { type, title, message, time } = data;

  const RenderIcon = ({ type }) => {
    if (type === 'invite') return <img src={inviteIcon} alt='' className='h-12 w-12' />;
    if (type === 'offer') return <img src={offerIcon} alt='' className='h-12 w-12' />;
    if (type === 'transaction') return <img src={transferIcon} alt='' className='h-12 w-12' />;
  };

  return (
    <div className='flex items-center justify-between px-2 hover:bg-gray py-1 cursor-pointer'>
      <div className='flex gap-3 items-center'>
        <RenderIcon type={type} />
        <div>
          <p className='font-semibold'>{title}</p>
          <small>{message}</small>
        </div>
      </div>
      <small className='text-gray_text'>{time}</small>
    </div>
  );
}
