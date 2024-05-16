import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RoomPage from "./components/screens/Room";
import Stream from "./pages/Stream";
import ContactUs from "./pages/ContactUs";
// import Stream from "./pages/Stream";

//creating clone of streamyard
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* <Route path="/stream" element={<Stream />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
