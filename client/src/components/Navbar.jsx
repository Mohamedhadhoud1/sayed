import React, { useEffect, useState, useContext } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const logo=require("../sayedlogo.jpg")
  const [students,setStudents] = useState([]);
  const [meetings,setMeetings] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
console.log(currentUser?.role,"role");
  useEffect(()=>{
    const getStudents = async () =>{
      try{
      const studentsFromServer = await axios.get("https://sayed.onrender.com/api/students")
      console.log(studentsFromServer)
      setStudents(studentsFromServer)
    }catch(err){
      console.log(err);
    }
  }
    getStudents()
  },[])

  useEffect(()=>{
    const getmeetings = async () =>{
      try{
      const res = await axios.get(`https://sayed.onrender.com/api/meetings/`,{params: { grade: currentUser.grade }})
      console.log(res.data)
      setMeetings(res.data)
    }catch(err){
      console.log(err);
    }
  }
    getmeetings()
  },[])

  return (
   
<nav class="bg-blue-900 border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" class="flex items-center">
       <img src={logo} class="h-8 mx-3 rounded-full" alt="Logo" /> 
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">أ / سيد سحلي</span>
  </a>
  <div class="flex items-center md:order-2" >
      <button type="button"onClick={(e) => setToggle2(!toggle2)}  class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src={currentUser!=null ? currentUser?.img : "bla"} alt="user photo"/>
      </button>
      {toggle2?(
        <div class="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown" >
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">{currentUser==null?"No User":currentUser?.userName}</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{currentUser?.email}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link to="/meetingsCalender" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">الاجتماعات القادمة
           <span className='bg-blue-600 rounded-full inline-block text-center w-5 h-5 mr-2 text-white'> {meetings.length}</span>
            </Link>
          </li>
         
          {currentUser ? (
          <li>
            <span onClick={()=>{logout(); navigate("/login");}} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">تسجيل الخروج</span>
          </li>
          ):<Link to="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">تسجيل الدخول</Link>}
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
     {currentUser?.role=="1" ?(
       <li>
        <Link to="/admin" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">صفحة الأدمن</Link>
      </li>
      ):
      <li>
        <Link to="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الرئيسية</Link>
      </li>
      }
      <li>
        <Link to="/قراءة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القراءة</Link>
      </li>
      <li>
        <Link to="/نصوص" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النصوص</Link>
      </li>
      <li>
        <Link to="أدب" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الأدب</Link>
      </li>
      <li>
        <Link to="بلاغة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">البلاغة</Link>
      </li>
      <li>
        <Link to="نحو" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النحو</Link>
      </li>
      <li>
        <Link to="قصة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القصة</Link>
      </li>
      <li>
        <a href="#footer" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">تواصل معنا</a>
      </li>
    </ul>
  </div>
  {toggle ? (
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="-user">
    <ul class="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-900 md:flex-row md:gap-x-8 md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    {currentUser?.role=="1" ?(
       <li>
        <Link to="/admin" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">صفحة الأدمن</Link>
      </li>
      ):
      <li>
        <Link to="/" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الرئيسية</Link>
      </li>}
      <li>
        <Link to="/قراءة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القراءة</Link>
      </li>
      <li>
        <Link to="/نصوص" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النصوص</Link>
      </li>
      <li>
        <Link to="أدب" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">الأدب</Link>
      </li>
      <li>
        <Link to="بلاغة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">البلاغة</Link>
      </li>
      <li>
        <Link to="نحو" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">النحو</Link>
      </li>
      <li>
        <Link to="قصة" class="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">القصة</Link>
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