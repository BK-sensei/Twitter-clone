import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ModalContextProvider } from './Context/ModalContext';

import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile'
import Explorer from './Pages/Exolorer'
import UserHome from './Pages/UserHome'
import Tweet from './Pages/Tweet'
import NotFound from './Pages/NotFound';


const App = () => {
  return (
    <ModalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/:id" element={<UserProfile />} />
          <Route path="/home" element={<UserHome />} />
          <Route path="/tweet/:id" element={<Tweet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ModalContextProvider>
  );
};

export default App;
