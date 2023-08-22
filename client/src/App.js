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

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
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
        element: <AllLessons title="القرءة"/>,
      },
      {
        path: "/نصوص",
        element: <AllLessons title="النصوص"/>,
      },
      {
        path: "/أدب",
        element: <AllLessons title="الأدب"/>,
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
        path: "/قراءة/:title",
        element: <Single  lessontitle="شرح الدرس"/>,
      },
      {
        path: "/نصوص/:title",
        element: <Single  lessontitle="شرح النص"/>,
      },
      {
        path: "/أدب/:title",
        element: <Single  lessontitle="شرح الأدب"/>,
      },
      {
        path: "/بلاغة/:title",
        element: <Single  lessontitle="شرح البلاغة"/>,
      },
      {
        path: "/نحو/:title",
        element: <Single  lessontitle="شرح النحو"/>,
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
