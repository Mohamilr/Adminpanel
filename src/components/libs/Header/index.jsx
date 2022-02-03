import React from "react";
import { HeaderStyle } from "./style";

const Header = ({ text, onClick }) => {
  return <HeaderStyle onClick={onClick}>{text}</HeaderStyle>;
};

export default Header;
