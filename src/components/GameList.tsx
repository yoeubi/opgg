import { PropsWithChildren } from "react";
import styled from "styled-components";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const GameList = ({ children }: PropsWithChildren) => {
  return <GameContainer>{children}</GameContainer>;
};

export default GameList;
