import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/authContext";
import axios from "axios";


const AllLessons = (props) => {
  const [posts, setPosts] = useState([]);


  const { currentUser, logout } = useContext(AuthContext);
  const grade = currentUser.grade;
  console.log(grade);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://sayed.onrender.com/api/${props.api}`, {params: { grade: grade }});
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [grade,props.api]);
  return (
    <>
    <section id="popular-courses " class="courses my-20 mx-3  sm:mx-32">
         <div class="aos-init aos-animate  " data-aos="fade-up">
 
             <div class=" pb-5 text-center">
                 <h2 class="text-gray-400 border-b-2 border-orange-300 pb-5">{props.title}</h2>
                 <p class="font-bold text-2xl mb-3 pt-5"> كل الدروس </p>
             </div>
             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12 w-full aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
     {posts.map((post) => (
         <div class="border-gray-100 bordert w-full shadow-sm rounded-sm show-on-scroll"  key={post.id}>
         <div class="course-item">
             <img src={`${post.imgurl?post.imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt61taF-Xs1cypQtAi1n4iO_FfbaZjDdiOdQ&usqp=CAU"}`} class="w-40 h-60" alt="lessonimg"
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
                     <Link className="link" to={`/${props.title}/${post.id}`}>
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

export default AllLessons