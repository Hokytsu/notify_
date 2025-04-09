import styled from "styled-components";
import { IconProps } from "../../../../interface/iconType";

export const TitleStyled = styled.div`
  padding: 2% 5% 2% 3%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.15vw;

  #title {
    color: aliceblue;
    text-align: center;
    height: 100%;
    font-size: 0.9vw;
  }
`;
export const ImgStyled = styled.img<Omit<IconProps, "type">>`
  width: ${(props) => props.width}vw;
  height: ${(props) => props.height}vh;
  opacity: ${(props) => props.opacity};
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;
