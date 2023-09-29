import React from 'react'

function Video(props) {
  return (
   
<div class="my-20 mx-3 sm:mx-32 transition ease-in-out delay-150 hover:-translate-z-1" data-aos="zoom-in" data-aos-delay="100">
    <div class="section-title pb-5 mr-1">
      <h2 class="text-gray-400">فيديو</h2>
      <p class="font-bold text-2xl mb-3 ">{props.lessontitle}</p>
    </div>
    <div class="flex justify-center sm:h-96 h-60 ">
       
        <section class="lg:w-8/12 w-full h-full ">
            <h3 class="text-xl text-center pt-6 font-medium ">فيديو</h3>


             <iframe width="100%" height="100%" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

        

        
        </section>
    </div>
</div>
  )
}

export default Video