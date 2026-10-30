import { Link } from "react-router-dom";
import CounterContext from "../../contexts/CounterCOntext.jsx";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext.jsx";

function Navbar({ fal, name, age }) {
  const { count, setCount } = useContext(CounterContext);
  const { token } = useContext(AuthContext);

  console.log(token, "token");

  // console.log(fal, name, age);
  return (
    <>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/news">News</Link>
        <Link to="/dashboard">Expense Tracker</Link>
        <Link to="/blogs">Blogs</Link>

        <Link to="/auth">Auth</Link>
        {/* <button>Login</button> */}
        {token ? <button>Logout</button> : <button>Login</button>}
        {/* <h1>{count}</h1> */}

        {/* <p>Home</p>
        <p>About</p>
        <p>Product</p> */}
      </nav>
    </>
  );
}

export default Navbar;
