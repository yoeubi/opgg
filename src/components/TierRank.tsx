import styled from "styled-components";
import { IPreviousTiers } from "../apis";
import Typography from "./Typography";

const TierRankContainer = styled.span`
  padding: 0 5px;
  height: 20px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  letter-spacing: -0.42px;
`;

const TierRank = ({ season, tier }: IPreviousTiers) => {
  return (
    <TierRankContainer>
      <Typography
        as="span"
        fontFamily="Helvetica"
        fontSize="11px"
        color="#657070"
      >
        <Typography as="span" fontWeight="bold">
          S
        </Typography>
        {season}
        &nbsp;{tier}
      </Typography>
    </TierRankContainer>
  );
};

export default TierRank;
