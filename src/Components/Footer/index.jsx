import React from "react";
import PlayArrow from "@material-ui/icons/PlayArrow";
import ShowChart from "@material-ui/icons/ShowChart";
import Settings from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { ContainerFooter, CircleBottomButton } from "../UI";

import Add from "@material-ui/icons/Add";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <Link to="/">
          <PlayArrow fontSize="large" />
        </Link>
        <Link to="/analytics">
          <ShowChart fontSize="large" />
        </Link>
        <Link to="/settings">
          <Settings fontSize="large" />
        </Link>
      </ContainerFooter>
      <Link to="/add">
        <CircleBottomButton>
          <Add />
        </CircleBottomButton>
      </Link>
    </>
  );
};

export default Footer;
