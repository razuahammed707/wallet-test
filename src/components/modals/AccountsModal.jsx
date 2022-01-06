import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import activeIcon from '../../assets/images/right-sign.png';

export default function AccountsModal({ openModal, setOpenModal, accounts }) {
  return (
    <>
      <div
        type='button'
        onClick={() => setOpenModal(true)}
        className='text-sm font-medium flex items-center justify-between'
      >
        <p>Jhondoe.near</p>
      </div>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpenModal}>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20  sm:block sm:p-0'>
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

            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease duration-500'
              enterFrom='opacity-0 scale-y-150'
              enterTo='opacity-100'
              leave='ease-out duration-500'
              leaveFrom='opacity-100 scale-y-150'
              leaveTo='opacity-0 scale-y-150'
            >
              <div className='bg-white rounded-2xl py-4 overflow-hidden shadow-xl transform transition-all w-3/4 absolute top-16'>
                <Dialog.Title as='small' className='leading-6 font-medium text-gray_text p-4'>
                  My Accounts
                </Dialog.Title>
                {accounts.map((account, index) => (
                  <div className='grid grid-cols-6 py-2 px-4 items-center justify-between hover:bg-gray'>
                    {account.icon}
                    <div className='col-span-4 text-sm px-2'>
                      <p className='font-semibold'>{account.name}</p>
                      <small>0.34 NEAR</small>
                    </div>
                    {account.active && <img src={activeIcon} alt='' />}
                  </div>
                ))}
                <hr className='bg-gray text-gray' />
                <div as='button' className='w-full py-2 px-5 text-sm font-semibold cursor-pointer'>
                  Create Account
                </div>
                <div as='button' className='w-full py-2 px-5 text-sm font-semibold cursor-pointer'>
                  Import Account
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
