import styled, { css } from "styled-components";

const DividerContainer = styled.div<Props>`
  ${(props) =>
    props.type === "vertical"
      ? css`
          width: 1px;
          height: 100%;
        `
      : css`
          height: 1px;
        `}
  background-color: #d8d8d8;
`;

interface Props {
  type?: "vertical" | "horizontal";
}

const Divider = ({ type = "horizontal" }: Props) => {
  return <DividerContainer type={type} />;
};

export default Divider;
