import React, { useState,useEffect,useContext,useCallback } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";
import { AuthContext } from '../context/authContext';

const localizer = momentLocalizer(moment)

const MeetingsCalender = () => {
    const [events,setEvents]=useState([]);
    const { currentUser, logout } = useContext(AuthContext);
   let len = events.length;
    useEffect(() => {
      console.log('Fetching data...');
      const fetchData = async () => {
        try {
          const res = await axios.get(`https://sayed.onrender.com/api/meetings`, { params: { grade: 12 } });
          setEvents(prevEvents => [...prevEvents, ...res.data]);
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      };
  
     // fetchData();
    }, useCallback(opts => dispatch(actions.events(opts)),[events.length]));
        console.log("res.data")
   
        // function formatDate(date) {
        //   var hours = date.toLocaleString('ar', { hour: 'numeric', hour12: true });
        //   var minutes = date.getMinutes();
        //   //var ampm = hours >= 12 ? 'مساءً' : 'صباحا';
        //   var day =date.toLocaleString('ar', {weekday:'long'});
        //   //hours = hours % 12;
        //   //hours = hours ? hours : 12; // the hour '0' should be '12'
        //   minutes = minutes < 10 ? '0'+minutes : minutes;
        //   var strTime = hours + ':' + minutes;
        //   return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() +' '+ day+`    `+ strTime;
        // }
        const handleDelete = async (id)=>{
          try {
            await axios.delete(`https://sayed.onrender.com/api/meetings/${id}`);
            alert("تم حذف الاجتماع بنجاح")
          } catch (err) {
            console.log(err);
            alert(err.response.data)
          }
        }


  return (
    <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
          الاجتماعات القادمة
        </h2>
  
       
      </div>
  
      <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
        <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
          {events.map((event)=>(

         
          <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center justify-between text-center">
            <p class="w-80 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
             {new Date(event.date).toLocaleString('ar',{timeZone:"UTC"})}
            </p>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              <a href={event.url} class="hover:underline">{event.title} 
               <svg aria-hidden="true" class="w-5 h-5 ml-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
             </a>
            </h3>
            {currentUser.role==1?
            <button type="submit" onClick={()=>handleDelete(event.id)} class="w-1/5 mr-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">حذف الاجتماع</button>
            :null}
          </div>
   ))}
         
  
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default MeetingsCalender