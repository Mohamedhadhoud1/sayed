import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  return (
   
<nav class="bg-blue-900 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center">
       <img src="https://scontent.faly8-2.fna.fbcdn.net/v/t1.6435-9/116887083_3312496638796785_1690796000580401029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGObKzEYiWmYicQkHMfx_ITJ32ndRWcWX0nfad1FZxZfS-EvhQb30BYFsQRAd3xzMjB-20wTAitKqSDQKeulLMl&_nc_ohc=lRGkNXQ17awAX9kUFzF&_nc_ht=scontent.faly8-2.fna&oh=00_AfB7blEMwDpYqNEKnuGUkx9zrOiTdil54fAFzr5m0XBtxw&oe=64F24A1D" class="h-8 mx-3 rounded-full" alt="Logo" /> 
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">أ / سيد سحلي</span>
  </a>
  <div class="flex items-center md:order-2" >
      <button type="button"onClick={(e) => setToggle2(!toggle2)}  class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
      {toggle2?(
        <div class="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown" >
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">محمد هدهود</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">hadhoud@gmail.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>

      ):null}
      
      <button data-collapse-toggle="navbar-user" onClick={(e) => setToggle(!toggle)}  type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="-user">
    <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-900 md:flex-row md:gap-x-8 md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الرئيسية</Link>
      </li>
      <li>
        <Link to="/post" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القراءة</Link>
      </li>
      <li>
        <Link to="/letrature" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النصوص</Link>
      </li>
      <li>
        <Link href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الأدب</Link>
      </li>
      <li>
        <a href="#footer" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">تواصل معنا</a>
      </li>
    </ul>
  </div>
  {toggle ? (
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="-user">
    <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-900 md:flex-row md:gap-x-8 md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الرئيسية</Link>
      </li>
      <li>
        <Link to="/post" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القراءة</Link>
      </li>
      <li>
        <Link to="/letrature" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النصوص</Link>
      </li>
      <li>
        <Link href="#" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الأدب</Link>
      </li>
      <li>
        <a href="#footer" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">تواصل معنا</a>
      </li>
    </ul>
  </div>
  ):null}
  </div>
</nav>

  )
}

export default Navbar;