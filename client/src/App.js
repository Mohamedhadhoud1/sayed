import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import "./styles.scss";
import AllLetrature from "./pages/AllLetrature";
import AllLessons from "./pages/AllLessons";
import Admin from "./pages/Admin";
import AdminNew from "./pages/AdminNew";
import { AuthContext } from "./context/authContext";
import React, { useEffect, useState, useContext } from 'react';
import NotFound from "./pages/NotFound";
import FakeStudents from "./pages/FakeStudents";
import Meetings from "./pages/Meetings";

const Layout = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <>
      
      <Navbar />
      { currentUser?( <Outlet />   ):<NotFound/>}
      <Footer />
   
    </>
  );
};

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/قراءة",
        element: <AllLessons title="القراءة" api="lessons"/>,
      },
      {
        path: "/نصوص",
        element: <AllLessons title="النصوص" api="letrature"/>,
      },
      {
        path: "/أدب",
        element: <AllLessons title="الأدب" api="let"/>,
      },
      {
        path: "/بلاغة",
        element: <AllLessons title="البلاغة"/>,
      },
      {
        path: "/نحو",
        element: <AllLessons title="النحو"/>,
      },
      {
        path: "/قصة",
        element: <AllLessons title="القصة"/>,
      },
      {
        path: "/القراءة/:id",
        element: <Single  lessontitle="شرح الدرس" api="lessons"/>,
      },
      {
        path: "/النصوص/:id",
        element: <Single  lessontitle="شرح النص" api="letrature"/>,
      },
      {
        path: "/الأدب/:id",
        element: <Single  lessontitle="شرح الأدب" api="let"/>,
      },
      {
        path: "/البلاغة/:id",
        element: <Single  lessontitle="شرح البلاغة"/>,
      },
      {
        path: "/النحو/:id",
        element: <Single  lessontitle="شرح النحو"/>,
      },
      {
        path: "/القصة/:id",
        element: <Single  lessontitle="شرح القصة"/>,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/adminNew",
        element: <AdminNew/>,
      },
      {
        path: "/waitingStudents",
        element: <FakeStudents/>,
      },
      {
        path: "/meetings",
        element: <Meetings/>,
      },
     
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
 
  return (
   
    <div className="app">
      <div className="">
    
        <RouterProvider router={router} />
       
      </div>
    </div>
  
  );
}

export default App;
