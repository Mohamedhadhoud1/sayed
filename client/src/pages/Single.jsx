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
        console.log(post)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [grade,postId,props.api]);
  // const text=post.pdfurl;
  // const matches1 = text.match(/"([^"]+)"/)[1];
  // console.log(matches1)
  // const matches2 = post?.quiz?.match(/"([^"]+)"/)[1];

  return (
    <>
    
    <div className='text-center m-10'>
      <img src={`${post.imgurl}`} class="w-96 h-96 m-auto" alt="lessonimg" />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </div>
    <div>
    </div>
    {post.pdfurl=="" || post.videourl==null ? null: 
    <div className='my-32 text-center'>
            <iframe class="block mx-auto" src={post.pdfurl? post.pdfurl.match(/"([^"]+)"/)[1]:""} width="90%" height="800" allow="autoplay"></iframe> 
            </div>}
    {post.quiz=="" || post.videourl==null ? null:    
    <div className='m-auto text-center mb-12'>
            <iframe class="block mx-auto bg-blue-200" src={post.quiz? post.quiz.match(/"([^"]+)"/)[1]:""} width="90%" height="700" frameborder="0">جارٍ التحميل…</iframe>
    </div>}
        {post.videourl=="" || post.videourl==null ? null:
    <Video lessontitle={props.lessontitle} url={post.videourl}/>
    }
    </>
  )
}

export default Single