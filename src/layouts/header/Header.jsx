import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input, Icon } from "../../components";
import { debounce } from "lodash";
import { toggleAside } from "../../redux/slices/layoutSlice";
import closeIconSvg from "/src/assets/images/icons/close-icon.svg";
import searchIconSvg from "/src/assets/images/icons/search-icon.svg";

const SearchIcon = ({ onClick }) => {
  return (
    <Icon onClick={onClick} className="search-icon">
      <img src={searchIconSvg} alt="search icon" />
    </Icon>
  );
};

export const Header = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const onChangeHandler = debounce((e) => {
    setQuery(e.target.value);
  }, 200);

  return (
    <div className={`header ${isInputOpen ? "input-open" : ""}`} id="header">
      <div className="search-input__wrapper">
        <Input
          icon={<SearchIcon />}
          placeholder="Busca algo de nuestro menu..."
          className="search"
          onChange={(e) => onChangeHandler(e)}
        />
        <Icon
          className="close-icon"
          additionalClasses={["close-icon"]}
          onClick={() => setIsInputOpen(false)}
        >
          <img src={closeIconSvg} alt="close icon" />
        </Icon>
      </div>
      <div className="header__mobile" id="header__mobile">
        <Icon className="icon__burger" onClick={() => dispatch(toggleAside())}>
          <span className="line line-one"></span>
          <span className="line line-two"></span>
          <span className="line line-three"></span>
        </Icon>
        <SearchIcon onClick={() => setIsInputOpen(true)} />
      </div>
    </div>
  );
};
