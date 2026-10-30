import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home Pahe</h1>

      <button onClick={() => navigate("/product")}>View Product</button>
    </>
  );
}

export default Home;
