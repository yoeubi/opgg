import styled from "styled-components";
import { ILeague } from "../apis";
import Typography from "./Typography";

const LeagueContainer = styled.div`
  height: 124px;
  padding: 10px 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  display: flex;
  gap: 8px;
  img {
    width: 104px;
    height: 104px;
  }
  .contents {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 6px 0;
    flex-grow: 1;
    .position {
      margin: 2px 0;
    }
    .tier {
      margin-bottom: 4px;
    }
  }
`;

const League = ({ tierRank, wins, losses }: ILeague) => {
  const winrate = Math.floor((wins / (wins + losses)) * 100);
  return (
    <LeagueContainer>
      <img src={tierRank.imageUrl} alt="" />
      <div className="contents">
        <Typography fontSize="11px" color="#879292">
          {tierRank.name}
        </Typography>
        <Typography className="position" fontSize="12px" color="#353a3a">
          <Typography as="span">탑</Typography>&nbsp;(총&nbsp;
          <Typography as="span" fontFamily="Helvetica">
            27
          </Typography>
          게임)
        </Typography>
        <Typography
          className="tier"
          fontFamily="Helvetica"
          fontSize="15px"
          fontWeight="bold"
          color="#1f8ecd"
        >
          {tierRank.tier} {tierRank.shortString[1]}
        </Typography>
        <Typography fontFamily="Helvetica" fontSize="12px">
          <Typography as="span" fontWeight="bold" color="#555e5e">
            {tierRank.lp} LP
          </Typography>
          <Typography as="span" color="#353a3a">
            / {wins}승 {losses}패
          </Typography>
        </Typography>
        <Typography fontFamily="Helvetica" fontSize="12px" color="#879292">
          <Typography as="span" fontFamily="AppleSDGothicNeo">
            승률
          </Typography>
          &nbsp;{winrate}%
        </Typography>
      </div>
    </LeagueContainer>
  );
};

export default League;
