import { Link } from 'react-router-dom';
import arrowDark from '../../assets/images/Vector-dark.png';

function ContactCard() {
  return (
    <Link to={`/contact/${989856}`}>
      <div className='flex items-center justify-between my-5 px-3 hover:bg-gray rounded-md'>
        <div className='flex items-center gap-3'>
          <div>
            <input type='checkbox' />
          </div>
          <img
            src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
            alt=''
            className='w-10 h-10 rounded-full'
          />
          <div>
            <h1 className='font-medium'>Eshter Howard</h1>
            <span className='mr-1 text-sm text-gray_text'>Esher.near</span>
          </div>
        </div>
        <img src={arrowDark} alt='' className='h-3' />
      </div>
    </Link>
  );
}

export default ContactCard;
