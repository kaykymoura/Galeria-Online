import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo à</h1>
      <p>Galeria Online</p>
      <button>
        <Link to="/galeria">Entrar</Link>
      </button>
    </div>
  );
};

export default Home;
