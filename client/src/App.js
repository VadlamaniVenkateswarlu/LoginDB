import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Form from "./Components/Form"; 
import Login from "./Components/Login"; 
import Deshboard from "./Components/Deshboard";
import Tasks from "./Components/Tasks";
import TopNavigate from "./Components/TopNavigate";
import SignOut from "./Components/SignOut";
import UpdateData from "./Components/UpdateData";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/form' element={<Form />} />
        <Route path='/Deshboard' element={<Deshboard/>} />
        <Route path='/Tasks' element={<Tasks/>} />
        <Route path='/TopNavigate' element={<TopNavigate/>} />
        <Route path='/UpdateData' element={<UpdateData/>} />

        <Route path='/SignOut' element={<SignOut/>} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
