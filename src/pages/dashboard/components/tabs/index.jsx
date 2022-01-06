import React, { useState } from 'react';
import Collectibles from './Collectibles';
import Transactions from './Transactions';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <button
        className={`w-1/2 font-semibold p-2 ${activeTab === 1 && 'border-b-2'} `}
        onClick={() => setActiveTab(1)}
      >
        Collectibles
      </button>
      <button
        className={`w-1/2 font-semibold p-2 ${activeTab === 2 && 'border-b-2'} `}
        onClick={() => setActiveTab(2)}
      >
        Transactions
      </button>
      <hr className='bg-gray text-gray' />
      {activeTab === 1 && <Collectibles />}
      {activeTab === 2 && <Transactions />}
    </div>
  );
}
