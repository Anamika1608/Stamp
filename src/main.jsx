import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom"

import Stamps from './components/Stamps/Stamps.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import Identifier from './components/Identifier/Identifier.jsx'
import Generate from './components/Generate/Generate.jsx'
import Model from './components/Model/Model.jsx'
import Bharat_1 from './AR/Bharat_1.jsx'
import Bharat_2 from './AR/Bharat_2.jsx'
import Bharat_3 from './AR/Bharat_3.jsx'
import Odisha_1 from './AR/odisha_1.jsx'
import Odisha_2 from './AR/odisha_2.jsx'
import Odisha_3 from './AR/odisha_3.jsx'
import Odisha_4 from './AR/odisha_4.jsx'
import Odisha_5 from './AR/odisha_5.jsx'
import Odisha_6 from './AR/odisha_6.jsx'
import Temple_1 from './AR/Temple_1.jsx'
import Temple_2 from './AR/Temple_2.jsx'
import Temple_3 from './AR/Temple_3.jsx'
import Temple_4 from './AR/Temple_4.jsx'
import Temple_5 from './AR/Temple_5.jsx'
import Temple_6 from './AR/Temple_6.jsx'
import TajMahal from './AR/TajMahal.jsx'
import Olympics_1 from './AR/Olympics_1.jsx'
import Olympics_2 from './AR/Olympics_2.jsx'
import Olympics_3 from './AR/Olympics_3.jsx'
import Olympics_4 from './AR/Olympics_4.jsx'
import Forum from './components/Forum/Forum.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="create-stamp" element={ <Generate/>} />
      <Route path="stamp-identifier" element={<Identifier />} />
      <Route path="3D-stamps" element={<Model />} />
      <Route path="/bharat-1" element={<Bharat_1 />} />
      <Route path="/bharat-2" element={<Bharat_2 />} />
      <Route path="/bharat-3" element={<Bharat_3 />} />
      <Route path="/odisha-1" element={<Odisha_1 />} />
      <Route path="/odisha-2" element={<Odisha_2 />} />
      <Route path="/odisha-3" element={<Odisha_3 />} />
      <Route path="/odisha-4" element={<Odisha_4 />} />
      <Route path="/odisha-5" element={<Odisha_5 />} />
      <Route path="/odisha-6" element={<Odisha_6 />} />
      <Route path="/temple-1" element={<Temple_1 />} />
      <Route path="/temple-2" element={<Temple_2 />} />
      <Route path="/temple-3" element={<Temple_3 />} />
      <Route path="/temple-4" element={<Temple_4 />} />
      <Route path="/temple-5" element={<Temple_5 />} />
      <Route path="/temple-6" element={<Temple_6 />} />
      <Route path="/taj_mahal" element={<TajMahal />} />
      <Route path="/olympics-1" element={<Olympics_1 />} />
      <Route path="/olympics-2" element={<Olympics_2 />} />
      <Route path="/olympics-3" element={<Olympics_3 />} />
      <Route path="/olympics-4" element={<Olympics_4 />} />
      <Route path="/buy-stamps" element={<Stamps />} />
      <Route path="/discussion-forum" element={<Forum />} />
     
      
    </Route>
  ) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <RouterProvider router={router} />
  </React.StrictMode>,
)
