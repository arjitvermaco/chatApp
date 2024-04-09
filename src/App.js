import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firebaseadd from "./component/Fireadd";
import Firebasefetch from "./component/Firebasefetch";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Protectedchat from "./component/Protectedchat";

function App() {
  const user =useSelector(state=>state.user);
  console.log(user)
  return (
    <BrowserRouter>
  <Toaster/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/singup" element={<Singup/>}/>
     
      <Route element={<Protectedchat/>}>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/chat" element={<Chat/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
