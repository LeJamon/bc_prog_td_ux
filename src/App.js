import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
 

import Layout from './pages/Layout';
import React from "react";
import ChainInfo from "./pages/ChainInfo";
import NotFound from "./pages/NotFound";
import FakeBayc from "./pages/FakeBayc";
import Main from './pages/Main';
import Connect from './utils/Connect';


export default function App(){

  return (
    
   <div>
     <Connect></Connect>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Layout />} />
          <Route path="ChainInfo" element={<ChainInfo />} />
          <Route path="FakeBayc" element={<FakeBayc />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}


