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
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
  background: ${(props) =>
    props.image ? `url(${props.image})` : "rgba(0, 0, 0, 0.5)"};
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  /* border: solid 1px #d1d1d1; */
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Figure = styled.img`
  width: 94.67px;
  height: 100px;

  //background: ${(props) => (props.image ? `url(${props.image})` : `url(})`)};
  background-size: auto;
  border-radius: 10px 0px 0px 10px;
`;

export const CardCover = styled.div`
  width: 94.67px;
  height: 100px;

  background: #c4c4c4;
  border-radius: 10px 0px 0px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDescription = styled.div`
  width: 230px;
  height: 100px;

  background: rgba(165, 165, 165, 0.7);
  border-radius: 0px 10px 10px 0px;

  padding-left: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardDescriptionTitle = styled.h3`
  color: #000000;
  font-size: 18px;
`;

export const CardDescriptionInfo = styled.p`
  color: #000000;
  font-size: 14px;
`;

export const CardDescriptionGenre = styled.p`
  color: #000000;
  font-size: 14px;
  font-style: italic;
`;

export const ContainerFooter = styled.div`
  bottom: 0px;
  position: fixed;
  height: 50px;
  width: 100vw;

  background: #3737f0;
  border-radius: 50px 50px 0px 0px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  color: rgba(188, 234, 241, 0.379391);
  text-shadow: 0px 0px 15px #ffffff;
`;

export const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`;

export const CircleBottomButton = styled(CircleButton)`
  position: fixed;
  right: 10px;
  bottom: 60px;
  background: #91dce9;
  color: #ffffff;
  &:hover {
    background: #5d99a3;
  }
  &:active {
    background: #5d99a3;
  }
`;

export const LoginTitle = styled.h1`
  color: #A5A5A5;
  height: 28px;
  font-size: 24px;
  margin-left: 8px;
  text-align: center;
  font-size: 36px;
`;

export const LoginButton = styled.button`
  background: #8FD1DC;
  border: 3px solid #A3DAE3;
  border-radius: 10px;
  height: 40px;
  width: 330px;
  margin-top: 12px;
  color: #FFFFFF;
  font-size: 24px;
`

export const Input = styled.input`
  width: 310px;
  height: 40px;
  background: #DEDEDE;
  border-radius: 8px;
  border: none;
  padding: 0px 10px;
  border-bottom: ${(props) => props.hasError ? "2px #ee7070 solid" : ""};
`;

export const Label = styled.label`
  font-size: 18px;
  color: #A5A5A5;
  margin-bottom: 6px;
`

export const HelperText = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 5px;
  color: red;
  margin-left: 10px;
  height: 17px;
`