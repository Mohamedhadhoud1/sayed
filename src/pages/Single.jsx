import React from 'react'
import Video from '../components/Video'

const post = 
  {
    id: 1,
    title: "درس كذا كذا",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const Single = (props) => {
  return (
    <>
    <div className='text-center m-10'>
      <img src={`${post.img}`} class="w-96 h-96 m-auto" alt="lessonimg" />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </div>
    <Video lessontitle={props.lessontitle}/>
    </>
  )
}

export default Single