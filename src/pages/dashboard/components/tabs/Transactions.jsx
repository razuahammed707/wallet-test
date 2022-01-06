import React, { useState } from 'react';
import sent from '../../../../assets/images/Vector_receive.png';
import receive from '../../../../assets/images/Vector_sent.png';

const histories = [
  {
    status: 'sent',
    author: 'devon.near',
    id: '0.456 NEAR',
  },
  {
    status: 'receive',
    author: 'jhondoe.near',
    id: '0.852 NEAR',
  },
  {
    status: 'sent',
    author: 'devon.near',
    id: '0.951 NEAR',
  },
  {
    status: 'receive',
    author: 'devon.near',
    id: '0.753 NEAR',
  },
];

const HistoryBlock = ({ status, author, id }) => (
  <div className='flex justify-between items-center mt-5 px-4'>
    <div className='flex gap-3 items-center'>
      <div className='rounded-full h-10 w-10 flex gap-5 bg-light_gray items-center justify-center'>
        {status === 'receive' && <img src={receive} alt='' className='h-3' />}
        {status === 'sent' && <img src={sent} alt='' className='h-3' />}
      </div>
      <div className='font-semibold'>
        <p className={`${status === 'sent' ? 'text-purple' : 'text-green'}`}>{id}</p>
        {status === 'sent' ? (
          <p>
            Sent to
            <span className='text-purple'> {author}</span>
          </p>
        ) : (
          <p>
            Received from
            <span className='text-green'> {author}</span>
          </p>
        )}
      </div>
    </div>
    <p className='text-gray_text'>3 days ago</p>
  </div>
);

export default function Transactions() {
  const [activeTab, setActiveTab] = useState('all');
  return (
    <div>
      <div className='flex items-center gap-3 justify-center mt-2'>
        <button
          className={`py-1 px-3 rounded-xl ${activeTab === 'all' && 'border border-gray_text'}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`py-1 px-3 rounded-xl ${activeTab === 'sent' && 'border border-gray_text'}`}
          onClick={() => setActiveTab('sent')}
        >
          Sent
        </button>
        <button
          className={`py-1 px-3 rounded-xl ${activeTab === 'receive' && 'border border-gray_text'}`}
          onClick={() => setActiveTab('receive')}
        >
          Received
        </button>
      </div>
      {activeTab === 'all' &&
        histories.map(item => (
          <HistoryBlock key={item.id} status={item.status} author={item.author} id={item.id} />
        ))}
      {activeTab === 'sent' &&
        histories
          .filter(item => item.status === 'sent')
          .map(item => (
            <HistoryBlock key={item.id} status={item.status} author={item.author} id={item.id} />
          ))}
      {activeTab === 'receive' &&
        histories
          .filter(item => item.status === 'receive')
          .map(item => (
            <HistoryBlock key={item.id} status={item.status} author={item.author} id={item.id} />
          ))}
    </div>
  );
}
