/* eslint-disable react/no-unescaped-entities */
import Wrapper from "../assets/Wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Praxis butcher stumptown gorpcore fingerstache artisan succulents
            cornhole. Ennui fixie freegan JOMO la croix you probably haven't
            heard of them before they sold out pug flannel whatever lumbersexual
            kickstarter fingerstache drinking vinegar heirloom. Tofu mixtape
            tumblr, yuccie pinterest lo-fi single-origin coffee church-key
            sustainable sartorial vice la croix meh. Yr waistcoat austin green
            juice vinyl food truck pug selvage offal before they sold out.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
