import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/login/login";
import CreateAccount from "./pages/createAccount/createAccount";
import Config from "./pages/config/config";
import Home from "./pages/Home/Home";
import Chat from "./pages/chat/chat";
import Private_chat from "./pages/mobile-private-chat/private-chat";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/settings" element={<Config />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/private-chat" element={<Private_chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
