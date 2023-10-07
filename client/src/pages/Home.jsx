import React from 'react'
import Video from '../components/Video'
import Lessons from '../components/Lessons'

const Home = () => {
  
  return (
    <>
    
    <section class="topper">
  <div class="navigation">

  <div class="top text-center w-full" >
    <div class="top1 text-white ">
      <h3 className='text-right text-xl'>تعلم اللغة العربية بكل سهولة</h3>
      <p id="p" className='font-bold'>
        <br/>
        الاستاذ سيد سحلي
        </p>
       <p className='text-left mt-10 text-2xl'>
        أستاذ اللغة العربية للمرحلة الثانوية و الاعدادية
      </p>
    
    </div>
  
  </div>
  </div>

    </section>
    <div className='bg-gradient-to-b from-slate-700 to-slate-50'>
    <div className='mx-10 '>
    <Lessons lessons="دروس" imoprtantLessons="أهم الدروس" link="القراءة" api="lessons"/>
    <Lessons lessons="نصوص" imoprtantLessons="أهم النصوص" link="النصوص" api="letrature"/>
    {/* <Video url={''}/> */}
    <button onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})} id="myBtn" title="Go to top" className='fixed top-3/4 left-1 sm:left-10 text-3xl font-bold bg-blue-900 text-white px-3 mb-3'>&#8593;</button>
    </div>
    </div>
    </>
  )
}

export default Home