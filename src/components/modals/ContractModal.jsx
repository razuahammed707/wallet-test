import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import importIcon from '../../assets/images/import.png';

export default function ContractModal({ openModal, setOpenModal }) {
  return (
    <>
      <img
        src='/plus.png'
        className='absolute right-3 top-4'
        alt='Plus Icon'
        onClick={() => setOpenModal(true)}
      />

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpenModal}>
          <div className='flex items-center justify-center min-h-screen'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-modal_bg bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='ease duration-500'
              enterFrom='opacity-0 scale-y-150'
              enterTo='opacity-100'
              leave='ease-out duration-500'
              leaveFrom='opacity-100 scale-y-150'
              leaveTo='opacity-0 scale-y-150'
            >
              <div className='bg-white rounded-xl text-center py-4 shadow-xl transform transition-all w-3/4 text-blue'>
                <Link to='/contact/new'>
                  <button className='w-full py-3 px-5 text-sm font-semibold flex gap-3 items-center justify-center'>
                    <img src='/plus.png' alt='' /> <p>New Contact</p>
                  </button>
                </Link>
                <hr className='bg-gray text-gray' />
                <button className='w-full py-3 px-5 text-sm font-semibold flex gap-3 items-center justify-center'>
                  <img src={importIcon} alt='' /> <p>Import Contracts</p>
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
