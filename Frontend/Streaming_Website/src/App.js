import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RoomPage from "./components/screens/Room";
import ContactUs from "./pages/ContactUs";
//creating clone of streamyard
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
