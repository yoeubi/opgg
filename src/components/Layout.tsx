import { PropsWithChildren } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LeftLayoutContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LeftLayout = ({ children }: PropsWithChildren) => {
  return <LeftLayoutContainer>{children}</LeftLayoutContainer>;
};

const RightLayoutContainer = styled.div`
  width: 690px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightLayout = ({ children }: PropsWithChildren) => {
  return <RightLayoutContainer>{children}</RightLayoutContainer>;
};

export default Layout;
