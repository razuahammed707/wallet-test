import Header from '../components/Header';
import Dashboard from '../pages/dashboard';
import Notifications from '../pages/notification';
import Contact from '../pages/contact';
import { Routes, Route } from 'react-router-dom';
import NewContract from '../pages/contact/newContract';
import Profile from '../pages/profile';

function WalletLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/notification' element={<Notifications />}></Route>
        <Route path='/contact/*'>
          <Route path='' element={<Contact />} />
          <Route path='new' element={<NewContract />} />
          <Route path=':id' element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default WalletLayout;
