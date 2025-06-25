import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/login/login";
import CreateAccount from "./pages/createAccount/createAccount";
import
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<LoginPage/>} />
        <Route path="/createAccount" element={<CreateAccount />}/>
    </Routes>
  </BrowserRouter>      
  )
}

export default App
