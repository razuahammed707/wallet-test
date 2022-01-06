import React, { useState } from 'react';
import arrow from '../../../assets/images/Vector.png';

const InputField = ({ label, type, name, placeholder, handleChange }) => (
  <div>
    <label htmlFor='name' className='text-xs '>
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='w-full ring-1 ring-modal_bg py-2 px-3 rounded-md text-sm focus:outline-0'
      onChange={handleChange}
    />
  </div>
);

export default function NewContract() {
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div className='text-gray_text '>
      <h2 className='py-3 text-center font-bold text-sm'>New Contract</h2>
      <hr className='bg-gray text-gray' />
      <form action='' className='px-5 py-1 flex flex-col gap-2 justify-center'>
        <InputField
          label='Full Name'
          type='text'
          name='name'
          placeholder='Ex. John Doe'
          handleChange={handleChange}
        />
        <InputField
          label='Email'
          type='email'
          name='email'
          placeholder='Ex. johndoe@gmail.com'
          handleChange={handleChange}
        />
        <InputField
          label='Phone (optional)'
          type='number'
          name='phone'
          placeholder='Ex +123456789'
          handleChange={handleChange}
        />
        <InputField
          label='Near Account ID (optional)'
          type='text'
          name='accountId'
          placeholder='Ex. johndoe.near'
          handleChange={handleChange}
        />
        <button className='bg-purple text-white text-sm py-1 px-3 rounded-md mx-auto mt-3 flex items-center justify-center gap-4 w-1/4'>
          Save
          <img src={arrow} alt='' className='h-3' />
        </button>
      </form>
    </div>
  );
}
