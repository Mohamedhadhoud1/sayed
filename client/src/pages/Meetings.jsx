import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";

const Meetings = () => {
    const [inputs, setInputs] = useState({
        title: "",
        url:"",
        grade:"",
        date:"",
       // endDate:""
      });
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(inputs);
      };
    
      const handleSubmit = async (e) => {
        console.log("res");
        e.preventDefault();
        try {
         const res= await axios.post(`https://sayed.onrender.com/api/meetings/`, inputs);
          navigate("/Admin");
          console.log(res);
        } catch (err) {
          setError(err.response.data);
          
        }
      };
      
  return (
    <section class="bg-gray-50 dark:bg-gray-900 ltr">
  <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto  lg:py-0 ">
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:my-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  أضف اجتماع جديد 
              </h1>
              {err && <p className='text-red-600 text-center'>{err}</p>}
              <form class="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)}>
                  <div>
                      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العنوان</label>
                      <input type="text" name="title" id="title"  onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                  </div>
                  <div>
                      <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رابط الاجتماع</label>
                      <input type="text" name="url" id="url"  onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                  </div>
                  <div>
                      <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">موعد الاجتماع</label>
                      <input type="datetime-local" name="date" id="date"  onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                  </div>
                  
                  <div>
                      <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الصف</label>
                      <select onChange={handleChange} name="grade" id="grade" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                           <option value="" hidden>اختر الصف</option>
                           <option value="7">الصف الأول الإعدادي</option>
                           <option value="8">الصف الثاني الإعدادي</option>
                           <option value="9">الصف الثالث الإعدادي</option>
                           <option value="10">الصف الأول الثانوي</option>
                           <option value="11">الصف الثاني الثانوي</option>
                           <option value="12">الصف الثالث الثانوي</option>
                         </select></div> 
                  <button type="submit"  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">أضف</button>
                 
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Meetings