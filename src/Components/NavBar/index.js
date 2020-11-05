import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Drawer from "./Drawer";
import { Navigation, NavTopL, NavTopR, NavBotL, NavBotR, Logo } from './style'

import LogoImg from '../../Assets/img/scrapper.png'
import {Options} from "../../Styles/styles";

const NavBar = () => {
  const [toggled, toggleDrawer] = useState(false);

  const schowDrawer = () => toggleDrawer(!toggled);
  let linkDrawer = null;
  if (toggled) {
    linkDrawer =  <Drawer/>
  }

  return (
    <Navigation>
      <NavTopL>
        <Link to='/'>
          <Logo src={LogoImg}/>
        </Link>
      </NavTopL>
      <NavTopR>
        <Options onClick={schowDrawer}>三</Options>
      </NavTopR>
        {linkDrawer}
      <NavBotL>
          <Link to='/about'>
              <Options>三 About</Options>
          </Link>
      </NavBotL>
      <NavBotR>
        <Link to='/nts'>
          <Options>NTS 二</Options>
        </Link>
      </NavBotR>
    </Navigation>
  )
}

export default NavBar;
