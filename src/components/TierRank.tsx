import styled from "styled-components";

const TierRankContainer = styled.span`
  height: 20px;
  padding: 4px 5px 3px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  .season {
    font-weight: bold;
  }
`;

const TierRank = () => {
  return (
    <TierRankContainer>
      <span className="season">S3</span>
      &nbsp;Bronze
    </TierRankContainer>
  );
};

export default TierRank;
