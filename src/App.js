import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Clothes from './Components/Clothes/Clothes';
import Details from './Components/Details/Details';
import Orders from './Components/Orders/Orders';
import AboutUs from './Components/AboutUs/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/clothes',
          element:<Clothes></Clothes>
        },
        {
          path: '/:category/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params})=>fetch(`https://clothing-store-server-j3j4chx3n-nahidchy.vercel.app/products/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:'/aboutus',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])
  return (
 <div className='bg-[#0d0d0d] min-h-screen'>
     <div>
   <RouterProvider router={router}></RouterProvider>
    </div>
 </div>
  );
}

export default App;
