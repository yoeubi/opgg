import { ElementType, PropsWithChildren } from "react";
import styled from "styled-components";

export const variant = {
  TextStyle10: {
    fontSize: "15px",
  },
  TextStyle9: {
    fontSize: "11px",
  },
  TextStyle4: {
    fontSize: "12px",
  },
};

export const fontWeight = {
  bold: "bold",
  normal: "normal",
};

export const fontFamily = {
  AppleSDGothicNeo: "AppleSDGothicNeo",
  Helvetica: "Helvetica",
};

interface Props {
  as?: ElementType;
  fontWeight?: keyof typeof fontWeight;
  fontFamily?: keyof typeof fontFamily;
  color?: string;
  fontSize?: string;
  className?: string;
}

const TypographyContainer = styled.p<Props>`
  font-family: ${(props) => fontFamily[props.fontFamily || "AppleSDGothicNeo"]};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: ${(props) => fontWeight[props.fontWeight || "normal"]};
  margin: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const Typography = ({
  as = "p",
  fontWeight,
  color,
  fontSize,
  children,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <TypographyContainer
      className={className}
      as={as}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
    >
      {children}
    </TypographyContainer>
  );
};

export default Typography;
