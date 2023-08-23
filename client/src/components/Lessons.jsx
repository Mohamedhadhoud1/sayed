import React from 'react'
import { Link } from 'react-router-dom';
const posts = [
      {
        id: 1,
        title: "درس كذا كذا",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
      {
        id: 2,
       
        title: "درس كذا كذا",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
      {
        id: 3,
        title: "درس كذا كذا",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
      
    ];
    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }
    
const Lessons = (props) => {
  return (
    <>
   <section id="popular-courses " class="courses my-20 mx-3  sm:mx-32">
        <div class="aos-init aos-animate  " data-aos="fade-up">

            <div class="section-title pb-5 ">
                <h2 class="text-gray-400">{props.lessons}</h2>
                <p class="font-bold text-2xl mb-3 "> {props.imoprtantLessons} </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12 w-full aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
    {posts.map((post) => (
        <div class="border-gray-100 bordert w-full shadow-sm rounded-sm"  key={post.id}>
        <div class="course-item">
            <img src={`${post.img}`} class="w-full h-60" alt="lessonimg"
                data-pagespeed-url-hash="3708496358"
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div class="course-content">
                <div class="flex justify-between content-center align-middle items-stretch">
                    <h4 class=" m-2 px-2 py-1 mt-6 text-gray-600">
                    
            <h1>{post.title}</h1>
          </h4>
                </div>
                <p class="text-gray-600 text-sm p-2">
                    {post.desc }
                </p>
            </div>
          
            <div class="flex justify-between content-center align-middle items-stretch">
                    <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                    <Link className="link" to={`/${props.link}/${post.id}`}>
            <h1>المزيد</h1>
          </Link></h4>
                </div>
        </div>
    </div>
      
        
    ))}
  </div>
  </div>

    </section>


  </>
  )
}

export default Lessons