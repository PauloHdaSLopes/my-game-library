import React from "react";
import GameCard from "../../Components/GameCard";
import { Subtitle } from "../../Components/UI";

const RecentlyPlayed = () => {
  return (
    <>
      <Subtitle>Recently played</Subtitle>
      <GameCard />
      <GameCard />
      <GameCard />
    </>
  );
};

export default RecentlyPlayed