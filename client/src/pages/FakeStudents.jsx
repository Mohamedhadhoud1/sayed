import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FakeStudents = () => {
    const [students,setStudents]=useState([]);
    const [fakestudents,setFakeStudents]=useState([]);
    useEffect(()=>{
        const getStudents = async () =>{
          try{
          const res = await axios.get("https://sayed.onrender.com/api/students")
            setStudents(res.data);
        }
        catch(err){
          console.log(err);
        }
      }
        getStudents()
      },[students])
      useEffect(()=>{
        const getFakeStudents = async () =>{
          try{
          const res = await axios.get("https://sayed.onrender.com/api/students/fake")
            setFakeStudents(res.data);
        }
        catch(err){
          console.log(err);
        }
      }
        getFakeStudents()
      },[fakestudents])
    
      const handleFakeDelete = async (id)=>{
        try {
          await axios.delete(`https://sayed.onrender.com/api/auth/students/fakeStudent/${id}`);
          //navigate("/")
        } catch (err) {
          console.log(err);
        }
      }
      const handleDelete = async (id)=>{
        try {
          await axios.delete(`https://sayed.onrender.com/api/auth/students/${id}`);
          //navigate("/")
        } catch (err) {
          console.log(err);
        }
      }
      const handleAdd = async (student)=>{
          try {
           const res= await axios.post("https://sayed.onrender.com/api/auth/Register", {
            userName:student.userName,
            email:student.email,
            password:student.password,
            grade:student.grade,
            img:student.img
          });
            
            console.log(res);
          } catch (err) {
            console.log(err.response.data);
            
          }
      }

  return (
<>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg ltr my-10 mx-20 mb-40">
  
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className='font-bold mb-7 text-xl'>الطلاب المسجلين</caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                     الاسم
                </th>
                <th scope="col" class="px-6 py-3">
                    إيميل
                </th>
                <th scope="col" class="px-6 py-3">
                    الصف
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                
            </tr>
        </thead>
        <tbody>
            {students.map((student)=>(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.userName}
                </th>
                <td class="px-6 py-4">
                    {student.email}
                </td>
                <td class="px-6 py-4">
                    {student.grade}
                </td>
               
                <td class="px-6 py-4 text-right ">
                <button type="submit" onClick={()=>handleDelete(student.id)} class="w-3/4 mr-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">حذف الطالب</button>
                 
                </td>
            </tr>
            
            )

            )}
            
        </tbody>
    </table>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg ltr my-10 mx-20 mb-40">
  
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <caption className='font-bold mb-7 text-xl'>طلاب قيد الانتظار</caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
                   الاسم
              </th>
              <th scope="col" class="px-6 py-3">
                  إيميل
              </th>
              <th scope="col" class="px-6 py-3">
                  الصف
              </th>
              <th scope="col" class="px-6 py-3">
                  
              </th>
              
          </tr>
      </thead>
      <tbody>
          {fakestudents.map((fakestudent)=>(
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {fakestudent.username}
              </th>
              <td class="px-6 py-4">
                  {fakestudent.email}
              </td>
              <td class="px-6 py-4">
                  {fakestudent.grade}
              </td>
             
              <td class="px-6 py-4 text-right ">
              <button type="submit" onClick={()=>handleFakeDelete(fakestudent.id)} class="w-5/12 mr-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">حذف الطالب</button>
              <button type="submit" onClick={()=>handleAdd(fakestudent)} class="w-5/12 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">تأكيد الطالب</button>
               
              </td>
          </tr>
          
          )

          )}
          
      </tbody>
  </table>
</div>
</>

  )
}

export default FakeStudents