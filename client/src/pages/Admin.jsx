import React, { useEffect, useState, useContext } from 'react'
import { Link ,useNavigate, useLocation} from 'react-router-dom';
import { AuthContext } from "../context/authContext";
import axios from "axios";
// const posts = [
//   {
//     id: 1,
//     title: "درس كذا كذا",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
//   {
//     id: 2,
   
//     title: "درس كذا كذا",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
//   {
//     id: 3,
//     title: "درس كذا كذا",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
// {
//   id: 1,
//   title: "درس كذا كذا",
//   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//   img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
// {
//   id: 2,
 
//   title: "درس كذا كذا",
//   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//   img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
// {
//   id: 3,
//   title: "درس كذا كذا",
//   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//   img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// },
  
// ];

const AllLessons = (props) => {

  const [posts, setPosts] = useState([]);


  const { currentUser, logout } = useContext(AuthContext);
  const grade = currentUser.grade;
  console.log(posts.length);

  const [inputs, setInputs] = useState({
    grade:"",
    api:""
  });
  const navigate = useNavigate();
  const location = useLocation();
 

  const postId = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
  };
//   useEffect(()=>{
  
//   handleSubmit();
// },[posts])
const handleSubmit = async (e) => {
  console.log("res");
  if (e) {
    e.preventDefault();
  }
  try {
      const res = await axios.get(`https://sayed.onrender.com/api/${inputs.api}`, {params: { grade: inputs.grade }});
      setPosts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
};
  const handleDelete = async (id)=>{
    try {
      await axios.delete(`https://sayed.onrender.com/api/${inputs.api}/${id}`);
      const filtered =  posts.filter((posttodelete) => { 
        return posttodelete.id !== id});
        setPosts(filtered) 
      //navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
   if(currentUser.role!="1"){
    navigate("/");
   }
  },);
 
  return (
    <>
     <div class="flex justify-between content-center align-middle items-stretch">
                     <ul className='flex flex-row'>
                    <li>
                     <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                     <Link className="link" to="/AdminNew">
             <h1>أضف درس جديد</h1>
           </Link></h4>
           </li>
           <li>
           <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                     <Link className="link" to="/waitingStudents">
             <h1>طلبة قيد الإنتظار</h1>
           </Link></h4>
           </li>
           <li>
           <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                     <Link className="link" to="/meetings">
             <h1>أضف اجتماع قادم</h1>
           </Link></h4>
           </li>
           <li>
           <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                     <Link className="link" to="/meetingsCalender">
             <h1>عرض الاجتماعات</h1>
           </Link></h4>
           </li>
           </ul>
                 </div>
                 
    <form class="space-y-4 md:space-y-6 md:w-1/2 mx-3" >
    <div>
                      <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الصف</label>
                      <select onChange={handleChange} name="grade" id="grade" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                           <option value="" selected disabled hidden> أختر الصف</option>
                           <option value="7">الصف الأول الإعدادي</option>
                           <option value="8">الصف الثاني الإعدادي</option>
                           <option value="9">الصف الثالث الإعدادي</option>
                           <option value="10">الصف الأول الثانوي</option>
                           <option value="11">الصف الثاني الثانوي</option>
                           <option value="12">الصف الثالث الثانوي</option>
                         </select></div>
                 
                  <div>
                      <label for="api" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نوع الدرس</label>
                      <select onChange={handleChange} name="api" id="api" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                           <option value="" selected disabled hidden>أختر نوع الدرس</option>
                           <option value="lessons"> قراءة </option>
                           <option value="letrature"> نصوص </option>
                           <option value="let"> أدب </option>
                           <option value="grammer"> نحو </option>
                           <option value="eloquence">بلاغة </option>
                           <option value="story"> قصة </option>
                         </select></div>
                         <button type="submit" onClick={(e)=>handleSubmit(e)} class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">عرض الدروس</button>
                 
                  </form>
        
    <section id="popular-courses " class="courses my-20 mx-3  sm:mx-32">
         <div class="aos-init aos-animate  " data-aos="fade-up">
 
             <div class=" pb-5 text-center">
                 <h2 class="text-gray-400 border-b-2 border-orange-300 pb-5">{props.title}</h2>
                 <p class="font-bold text-2xl mb-3 pt-5"> كل الدروس </p>
             </div>
             {posts.length!=0 ?( 
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
             <div className='flex flex-row'>
             <div class="flex justify-between content-center align-middle items-stretch">
                     <h4 class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">
                     <Link className="link" to={`/AdminNew`} state={{ post: post,type:inputs.api }}>
             <h1>تعديل</h1>
           </Link></h4>
                 </div>
                
                     <button type="submit" onClick={()=>handleDelete(post.id)} class="bg-blue-900 m-2 px-2 py-1 mt-6 text-white">حذف</button>
             
                 </div>
         </div>
     </div>
       
         
     ))}
   </div>
    ):<p className='text-xl font-bold text-red-600'>لا يوجد دروس</p>}   
   </div>
 
     </section>
         
 
 
   </>
  )
}

export default AllLessons