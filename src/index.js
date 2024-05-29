import React from 'react';
import ReactDOM from 'react-dom/client';


import Home from './View/Home/Home';
// import { Form } from '../src/view/Career/Career';
// import { Network } from  '../src/view/Presence/Presence';
// import Card from '../src/component/Products/Products';
// import About from './component/About/About';
// import Catelogue from './component/Catelogue/Catelogue';
// import Contact from './component/Contact/Contact';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      
    },
    // {
    //   path:'/Career',
    //   element:<Form/>,
    // },
    // {
    //   path:'/Presence',
    //   element:<Network/>
    // },
    // {
    //   path:'/Card',
    //   element:<Card/>
    // },
    // {
    //   path:'/About',
    //   element:<About/>
    // },
    // {
    //   path:'/Catelogue',
    //   element:<Catelogue/>
    // },
    // {
    //   path:'/Contact',
    //   element:<Contact/>
    // }
   
    
  ])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);

