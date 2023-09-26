import Video from '../components/Video'
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from "../context/authContext";
import axios from "axios";

// const post = 
//   {
//     id: 1,
//     title: "درس كذا كذا",
//     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
//     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
// };

const Single = (props) => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const grade = currentUser.grade;
 console.log(grade,"grade")
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://sayed.onrender.com/api/${props.api}/${postId}/${grade}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [grade,postId,props.api]);
  return (
    <>
    
    <div className='text-center m-10'>
      <img src={`${post.imgurl}`} class="w-96 h-96 m-auto" alt="lessonimg" />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </div>
    <div>
    </div>
    <div className='my-32 text-center'>
            <iframe class="block mx-auto" src="https://drive.google.com/file/d/1komu_ApIBEw1pecwMUY5rSJCmQ6DdH-2/preview" width="90%" height="800" allow="autoplay"></iframe> </div>
            
    <div className='m-auto text-center'>
            <iframe class="block mx-auto bg-blue-200" src="https://docs.google.com/forms/d/e/1FAIpQLSdPuO3vxZhsNE1NEKXfpyiyROqHMx4AcNvtQrj6m1gz_Y9abA/viewform?embedded=true" width="90%" height="700" frameborder="0">جارٍ التحميل…</iframe>
            </div>
           
    <Video lessontitle={props.lessontitle}/>
    </>
  )
}

export default Single