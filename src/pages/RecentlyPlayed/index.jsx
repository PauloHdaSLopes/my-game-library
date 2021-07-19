import React from "react";
import GameCard from "../../Components/GameCard";
import { Subtitle } from "../../Components/UI";

import { gamesFromApi } from "../../api/game"

const RecentlyPlayed = () => {
  return (
    <div>
      <Subtitle>Recently played</Subtitle>
      {
        gamesFromApi.map( g => {
          const genre = g.genre.reduce( (result, value) => result + " " + value)
          const hasGameTime = g.gameTimes.length > 0
          const gameTime = hasGameTime ?  g.gameTimes.reduce( (result, value) => `${result} ${value.name}: ${value.timeInHours} `, '') : "no data"
          return <GameCard title={g.name} info={gameTime} genre={genre} />
        })
      }
    </div>
  );
};

export default RecentlyPlayed