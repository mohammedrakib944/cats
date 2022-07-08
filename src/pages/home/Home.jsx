import "./home.css";
import { Twitter, Discord, Messenger } from "react-bootstrap-icons";

import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="heroSection">
        <header className="Header"></header>
        <div className="Title"></div>
      </div>
      <div className="lightsContainer">
        <ul className="Links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Manifesto</a>
          </li>
          <li>
            <a href="#">Journey</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="secondSection">
        <div className="socialLinks">
          <Button text={<Twitter />} />
          <Button text={<Messenger />} />
          <Button text={<Discord />} />
        </div>

        <div className="mintButton">
          <Button text="Mint" fonts />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
