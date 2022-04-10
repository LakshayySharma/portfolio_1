import { NavLink, Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import HomePage from "./Pages/HomePage";
import "./sass/main.scss";
import BlogApp from "./Pages/BlogApp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/mern-blog-app" element={<BlogApp />} />
      </Routes>
    </div>
  );
}

export default App;
