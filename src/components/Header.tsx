import { PropsWithChildren } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 97px;
  background-color: #1ea1f7;
`;

const Header = ({ children }: PropsWithChildren) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

export default Header;
