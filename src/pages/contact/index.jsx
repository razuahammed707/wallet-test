import React, { useState } from 'react';
import ContractModal from '../../components/modals/ContractModal';
import ContactCard from './contactCard';

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='m-3'>
      <div className='relative'>
        <img src='/search.png' className='absolute top-4 left-3' alt='Plus Icon' />
        <input
          type='text'
          placeholder='Search Contact'
          className='bg-gray_bg px-10 py-3 w-full rounded-md'
        />
        <ContractModal openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </div>
  );
}
