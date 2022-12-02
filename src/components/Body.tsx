import { PropsWithChildren } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 10px 0;
  display: flex;
  gap: 10px;
`;

const Body = ({ children }: PropsWithChildren) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
