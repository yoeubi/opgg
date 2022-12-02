import styled from "styled-components";
import { IPreviousTiers } from "../apis";

const TierRankContainer = styled.span`
  height: 20px;
  padding: 4px 5px 3px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
  .season {
    font-weight: bold;
  }
`;

const TierRank = ({ season, tier }: IPreviousTiers) => {
  return (
    <TierRankContainer>
      <span className="season">S{season}</span>
      &nbsp;{tier}
    </TierRankContainer>
  );
};

export default TierRank;
