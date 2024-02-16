import "./index.css"

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./modules/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <Route path="/" component={Login} />
      </main>
    </Router>
  );
}

const Home = () => (
  <>
    <h1>Home</h1>
  </>
);