import React from 'react';
import Cards from './components/Cards';
import CreateNFT from './components/CreateNFT';
import Tabs from './components/tabs';
import './style.css';

export default function Dashboard() {
  return (
    <div className='p-3'>
      <Cards />
      <CreateNFT />
      <Tabs />
    </div>
  );
}
