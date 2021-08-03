import React from "react";

import { Title, ProfilePhoto, ContainerHeader } from "../UI";

const background = "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA="
const profile = "https://br.web.img2.acsta.net/pictures/15/07/28/15/58/287488.jpg"

const Header = () => {
  return (
    <ContainerHeader image={background}>
      <ProfilePhoto image={profile}/>
      <Title>Hello, User</Title>
    </ContainerHeader>
  );
};

export default Header;
