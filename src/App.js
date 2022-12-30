import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
