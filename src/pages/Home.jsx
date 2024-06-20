import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerPizza from "../assets/pizza.jpeg";
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerPizza})` }}>
      <div className="headerContainer">
        <h1>Singg's Pizzeria </h1>
        <p>PIZZA TO FIT ANY TASTE </p>
        <Link to="menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
