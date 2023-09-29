import React, { useState,useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from "axios";
const localizer = momentLocalizer(moment)

const MeetingsCalender = () => {
    const [events,setEvents]=useState([]);

   
        const fetchData = async () => {
          try {
            const res = await axios.get(`https://sayed.onrender.com/api/meetings`, {params: { grade: 12 }});
            setEvents(res.data);
            console.log(res.data)
          } catch (err) {
            console.log(err);
          }
        };
        //fetchData();
        console.log("res.data")
   
  return (
    <div>
    <Calendar
      localizer={localizer}
      events={[{
        title:"kssk",
        start:new Date(2023,8,29),
        end:new Date(2023,8,29)
      }]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  )
}

export default MeetingsCalender