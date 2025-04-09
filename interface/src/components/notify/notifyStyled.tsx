import {styled, keyframes} from "styled-components";
import NotifyData from "../../interface/notifyTypes";


export const NotifyStyled = styled.section<Pick<NotifyData, "type">>`
  width: 12vw;
  height: auto;
  min-height: 6vh;
  max-height: 90vh;
  border-top-left-radius: 0.5vw;
  border-bottom-left-radius: 0.5vw;
  margin-top: 1vh;
  position: relative;
  right: -12vw;
  background-color: ${({ type }) =>
    type === "success"
      ? "#17e146"
      : type === "warning"
      ? "#b5e117"
      : type === "denied"
      ? "#d95f14"
      : type === "error"
      ? "black"
      : "none"};

  #containerMessage {
    padding: 0% 4% 2% 5%;
  }
  #message {
    color: aliceblue;
    text-align: justify;
    font-size: 0.8vw;
  }
  
`;
