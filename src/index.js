import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from './View/Home/Home';
import {Career} from './View/Career/Career-Pooja';
import {Presence} from './View/Presence/Presence';
// import  Card from './View/Product/Products';
import About from './View/About/About';
import Catelogue from './View/Catelogue/Catelogue';
import Contact from './View/Contact/Contact';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      
    },
    {
      path:'/career',
      element:<Career/>,
    },
    {
      path:'/Presence',
      element:<Presence/>
    },
    // {
    //   path:'/Card',
    //   element:<Card/>
    // },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'/Catelogue',
      element:<Catelogue/>
    },
    {
      path:'/Contact',
      element:<Contact/>
    }
   
    
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

