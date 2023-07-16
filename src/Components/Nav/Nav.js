import React, { useContext } from 'react';
import logo from '../Assets/clothing logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = <>
    <li className=''><Link className='text-white hover:text-white after:text-white' to='/'>Home</Link></li>
    <li><Link className='text-white hover:text-white' to='/orders'>Orders</Link></li>
    <li><Link className='text-white hover:text-white' to='/aboutus'>About Us</Link></li>
    {
      !user?.email &&


      <li><Link className='text-white hover:text-white' to='/login'>Log In</Link></li>
    }
  </>
  const handleLogOut = () => {
    logOut()
      .then(() => {
        //  signout successfull
      })
      .catch(err => console.error(err))
  }
  return (
     <div className='bg-slate-900 lg:h-24 h-20 flex'>
    <div className="navbar container  text-white">
     <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="flex flex-col justify-center gap-5 py-4 px-4 dropdown-content mt-3 bg-black z-[999] p-2 shadow  rounded-box w-52">
            {menuItems}
          </ul>
        </div>
    <img className='lg:h-16 lg:w-16 h-10 w-10 object-cover' alt='logo' src={logo}/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-center gap-10 menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? <button onClick={handleLogOut} className="border border-gray-500 p-2 lg:p-3 bg-[#551fff] rounded-lg text-white font-semibold ">Log Out</button> :
          <Link to='/signup'><button className='border border-gray-500 p-2 lg:p-3 bg-[#551fff] rounded-lg text-white font-semibold' >Sign Up</button></Link>}
      </div>
     </div>
    </div>
  );
};

export default Nav;
