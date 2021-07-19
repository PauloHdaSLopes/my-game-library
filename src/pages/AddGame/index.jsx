import React, { useState } from "react";

import {
  CardDescriptionTitle,
  Input,
  CircleButton,
} from "../../Components/UI";

import { sendNewGameForSearch } from '../../api/game'

const AddGame = () => {

  const [gameForSearch, setGameForSearch] = useState("")

  const buttonStyle = {
    background: "#000000",
    color: "#FFFFFF",
    opacity: 0.2,
    width: "30px",
    height: "30px",
  };

  const containerStyle = {
    width: "342px",
    height: "70px",
    "border-radius": "30px",
    padding: "20px"
  }

 const handleInputChange = (event) => {
    const valueFromInput = event.target.value 
    
    setGameForSearch(valueFromInput)
 }

  const handleClick = (event) => {
    sendNewGameForSearch(gameForSearch)
      .then( resp => {
        alert("Game includo na fila de busca com sucesso!")
        console.log(resp)
        setGameForSearch("")
      })
      .catch( err => {
        alert("Ocorreu um erro na solicitacao!", err)
      })
  }

  return (
    <div style={ containerStyle }>
      <CardDescriptionTitle>Which game you want to add ?</CardDescriptionTitle>
      <Input type="text" onChange={handleInputChange}/>
      <CircleButton style={buttonStyle} onClick={handleClick}>+</CircleButton>
    </div>
  );
};

export default AddGame;
