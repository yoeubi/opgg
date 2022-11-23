import { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
