import { PropsWithChildren } from "react";
import styled from "styled-components";
import Layout from "./Layout";

const HeaderContainer = styled.header`
  height: 97px;
  background-color: #1ea1f7;
  position: relative;
  padding: 53px 0 12px 0;
  .contents {
    display: flex;
    justify-content: end;
  }
`;

const Header = ({ children }: PropsWithChildren) => {
  return (
    <HeaderContainer>
      <Layout>
        <div className="contents">{children}</div>
      </Layout>
    </HeaderContainer>
  );
};

export default Header;
