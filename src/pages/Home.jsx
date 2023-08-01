import React from 'react'
import Video from '../components/Video'
import Lessons from '../components/Lessons'

const Home = () => {
  return (
    <div className='mx-10'>
    <Lessons lessons="دروس" imoprtantLessons="أهم الدروس" link="post"/>
    <Lessons lessons="نصوص" imoprtantLessons="أهم النصوص" link="letrature" />
    <Video/>
   
    </div>
  )
}

export default Home