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
    bla
    <div className='text-center m-10'>
      <img src={`${post.img}`} class="w-96 h-96 m-auto" alt="lessonimg" />
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </div>
    <div>
    </div>
    <div className='mb-10 text-center'>
            <iframe class="block mx-auto" src="https://drive.google.com/file/d/1komu_ApIBEw1pecwMUY5rSJCmQ6DdH-2/preview" width="90%" height="800" allow="autoplay"></iframe> </div>
            
    <div className='m-auto text-center'>
            <iframe class="block mx-auto" src="https://docs.google.com/forms/d/e/1FAIpQLSdPuO3vxZhsNE1NEKXfpyiyROqHMx4AcNvtQrj6m1gz_Y9abA/viewform?embedded=true" width="90%" height="700" frameborder="0">جارٍ التحميل…</iframe>
            </div>
           
    <Video lessontitle={props.lessontitle}/>
    </>
  )
}

export default Single