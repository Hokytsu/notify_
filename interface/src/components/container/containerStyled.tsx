import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: 24vw;
  height: 100vh;
  position: absolute;
  top: 0vh;
  flex-direction: column;
  gap: 0vh;
  padding-top: 5vh; //Distância entre o topo da tela e a primeira notify (A notify em sí tem 1vh de margin-top)
  overflow: hidden;
  /* right: -12vw;//Metade do width do container */
 
  transition: all 0.5s ease-in-out;
 
`;
