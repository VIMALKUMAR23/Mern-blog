import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Admin" element={<AdminDashboard/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
