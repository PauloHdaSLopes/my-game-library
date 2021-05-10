import React from "react";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ShowChart from "@material-ui/icons/ShowChart";
import Settings from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { ContainerFooter } from "../UI";

const Footer = () => {

  return (
    <ContainerFooter>
      <Link to="/">
        <PlayArrow />
      </Link>
      <Link to="/analytics">
        <ShowChart />
      </Link>
      <Link to="/settings">
        <Settings />
      </Link>
    </ContainerFooter>
  );
};

export default Footer;
