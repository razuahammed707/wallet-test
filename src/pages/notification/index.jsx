import React from 'react';
import NotificationBlock from './NotificationBlock';

const notifications = [
  {
    type: 'offer',
    title: 'New Offer !!',
    message: 'maxwell.near made an offer of 0.3456 NEAR for #64784',
    time: '4 days ago',
  },
  {
    type: 'invite',
    title: 'App Invite',
    message: 'maxwell.near made an offer of 0.3456 NEAR for #64784',
    time: '4 days ago',
  },
  {
    type: 'transaction',
    title: 'Transferred Successful !!',
    message: 'maxwell.near made an offer of 0.3456 NEAR for #64784',
    time: '4 days ago',
  },
];

export default function Notifications() {
  return (
    <>
      <div className='flex items-center justify-between py-2 px-4 h-10 ring-1 ring-gray bg-gray_bg'>
        <h2 className='font-semibold'>Notifications</h2>
        <small className='text-purple font-semibold'>Mark All Read</small>
      </div>
      {notifications.map((ntf, index) => (
        <NotificationBlock key={index} data={ntf} />
      ))}
    </>
  );
}
