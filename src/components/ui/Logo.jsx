import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-img.svg";
import logoText from "../../assets/images/logo-text.svg";

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoImg} alt="logo-img" className="logo__img" />
      <img src={logoText} alt="logo-text" className="logo__text" />
    </Link>
  );
};
