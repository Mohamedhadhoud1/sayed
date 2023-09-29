import React from 'react'
import Video from '../components/Video'
import Lessons from '../components/Lessons'

const Home = () => {
  
  return (
    <div className='mx-10'>
    <Lessons lessons="دروس" imoprtantLessons="أهم الدروس" link="القراءة"/>
    <Lessons lessons="نصوص" imoprtantLessons="أهم النصوص" link="النصوص" />
    <Video url={''}/>
    <button onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} id="myBtn" title="Go to top" className='fixed top-3/4 left-1 sm:left-10 text-3xl font-bold bg-blue-900 text-white px-3 mb-3'>&#8593;</button>
    </div>
  )
}

export default Home