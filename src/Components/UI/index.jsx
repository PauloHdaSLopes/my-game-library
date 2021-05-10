import styled from "styled-components";

export const Title = styled.h1`
  color: #f1f1f1;
  height: 28px;
  font-size: 24px;
  margin-left: 8px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #000000;
  margin: 8px;
  text-align: center;
`;

export const ProfilePhoto = styled.img`
  border-radius: 40px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 80px;
  height: 80px;

  margin: 4px 4px;
`;

export const ContainerHeader = styled.div`
  @media (max-width: 800px) {
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* position: absolute; */
  width: 100vw;
  height: 100px;
  /* left: 0px;
  top: 0px; */

  background: url(${(props) => props.image});
  border-radius: 0px 0px 0px 50px;
  border: 1px solid black;
`;

export const Card = styled.div`
  width: 355px;
  height: 140px;
  background: url(${(props) => props.image});
  background-size: cover;
  border-radius: 15px;
  /* border: solid 1px #d1d1d1; */
  margin: 8px;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Figure = styled.img`
  width: 94.67px;
  height: 100px;

  background: url(${(props) => props.image});
  background-size: cover;
  border-radius: 10px 0px 0px 10px;
`;

export const CardCover = styled.div`
  width: 94.67px;
  height: 100px;

  background: #C4C4C4;
  border-radius: 10px 0px 0px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardDescription = styled.div`
  width: 230px;
  height: 100px;

  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 10px 10px 0px;

  padding-left: 8px;

  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const CardDescriptionTitle = styled.h3`
  color: #000000;
  font-size: 18px;
`;

export const CardDescriptionInfo = styled.p`
  color: #000000;
  font-size: 14px;
`

export const CardDescriptionGenre = styled.p`
  color: #000000;
  font-size: 14px;
  font-style: italic;
`

export const ContainerFooter = styled.div`
  bottom: 0px;
  position: fixed;
  height: 50px;
  width: 100vw;

  background: #3737F0;
  border-radius: 50px 50px 0px 0px;
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Button = styled.button`
  color: rgba(188, 234, 241, 0.379391);
  text-shadow: 0px 0px 15px #FFFFFF;
`