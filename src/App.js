import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Error404 from "./components/Error404";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route  activeClassName="active" path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route  activeClassName="active" path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route activeClassName="active" path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route activeClassName="active" path="/user/:id" element={<User />} />
        </Routes>
        <Routes>
          <Route activeClassName="active" path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
