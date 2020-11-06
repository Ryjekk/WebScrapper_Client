import React from "react";
import {Link} from "react-router-dom";
//Style
import {Options} from "../../../Styles/styles";
import {LinkList} from '../style'

const Drawer = () => {
  return (
      <LinkList>
        <Link to='/'>
          <Options>一 Home</Options>
        </Link>
        <Link to='/'>
          <Options>一 Latest</Options>
        </Link>
        <Link to='/'>
          <Options>一 Guests</Options>
        </Link>
        <Link to='/'>
          <Options>一 ntsPicks</Options>
        </Link>
        <Link to='/posh'>
          <Options>一 poshIsolation</Options>
        </Link>
      </LinkList>
  );
};

export default Drawer;
