import React from "react";
import{Route,Routes} from "react-router-dom"; 
import Main from "./pages/Main"; 
import ChainInfo from "./pages/Chain-info";
import FakeBayc from "./pages/FakeBayc";
//import FakeBaycTokenInfo from "./pages/FakeBaycTokenInfo"; 
import FakeMeebits from "./pages/FakeMeebits"; 
import FakeNefturians from "./pages/FakeNefturians"; 
import FakeNefturiansUserInfo from "./pages/FakeNefturiansUserInfo"; 
import WrongNetwork from "./pages/WrongNetwotk"; 
import NotFound from "./pages/NotFound"; 

function AppRoutes(){
    return(
    <Routes>
        <Route path='/' element = {<ChainInfo/>}/>
        <Route path='/FakeBayc' element = {<FakeBayc/>}/>
        <Route path='/FakeMeebits' element = {<FakeMeebits/>}/>
        <Route path='/FakeNefturians' element = {<FakeNefturians/>}/>
        <Route path='/FakeNefturiansUserInfo' element = {<FakeNefturiansUserInfo/>}/>
        <Route path='/WrongNetwork' element = {<WrongNetwork/>}/>
        <Route path='/NotFound' element = {<NotFound/>}/>
    </Routes>
    )
}

export default AppRoutes; 
//        <Route path='/FakeBaycTonkenInfo' element = {<FakeBaycTokenInfo/>}/>
//        <Route path='/' element = {<Main/>}/>
