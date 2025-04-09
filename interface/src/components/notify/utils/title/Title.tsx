import NotifyData from "../../../../interface/notifyTypes";
import { IconProps } from "../../../../interface/iconType";
import denied from "../../../../assets/deniedSVG.svg";
import error from "../../../../assets/errorSVG.svg";
import success from "../../../../assets/successSVG.svg";
import warning from "../../../../assets/warningSVG.svg";
import { TitleStyled, ImgStyled } from "./titleStyled";

// A depender do tamanho e reutilização do map prefiro deixar src/utils, mas nesse caso é só para essa parte do cod msm, ent neh.
function IconUtil({ type, width, height, opacity }: IconProps) {
  const iconMap: Record<NotifyData["type"], string> = {
    denied,
    error,
    success,
    warning,
  };

  return (
    <ImgStyled
      width={width ? width : 1}
      height={height ? height : 1}
      opacity={opacity}
      src={iconMap[type]}
      alt={type}
    />
  );
}
//--------------------------------------------------------------------------------------------

function Title({ type }: Pick<NotifyData, "type">) {
  let title = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  return (
    <TitleStyled>
      <IconUtil
        type={type}
        opacity={0.9}
        width={1.04}
        height={type === "warning" ? 1.6 : type === "error" ? 1.3 : 1.85}
      />
      <h1 id="title"> {title}</h1>
    </TitleStyled>
  );
}

export default Title;
