import styled from "styled-components";
import { IChampions, IRecentWinRate } from "../apis";
import { calcKDA, calcWinRate } from "../utils";
import Typography from "./Typography";

const ChampionWinRateContainer = styled.div`
  padding: 4px 15px;
  display: flex;
  gap: 10px;
  & ~ & {
    border-top: solid 1px #cdd2d2;
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .contents {
    display: flex;
    text-align: start;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 3px;
    &:nth-of-type(1) {
      text-align: start;
      width: 66px;
    }
    &:nth-of-type(n + 2) {
      text-align: center;
    }
  }
`;

const ChampionWinRate = ({
  imageUrl,
  name,
  cs,
  games,
  wins,
  losses,
  kills,
  assists,
  deaths,
}: IChampions) => {
  const winRate = calcWinRate(wins, losses);
  const kda = calcKDA(kills, assists, deaths);
  const kdaNumber = parseFloat(kda);
  const kdaColor =
    kdaNumber >= 5
      ? "#e19205"
      : kdaNumber >= 4
      ? "#1f8ecd"
      : kdaNumber >= 3
      ? "#2daf7f"
      : "#5e5e5e";
  const winRateColor = winRate >= 60 ? " #c6443e" : "#5e5e5e";
  return (
    <ChampionWinRateContainer>
      <img src={imageUrl} alt={name} />
      <div className="contents">
        <div className="item">
          <Typography fontSize="13px" fontWeight="bold" color="#5e5e5e">
            {name}
          </Typography>
          <Typography fontFamily="Helvetica" fontSize="11px" color="#879292">
            CS {cs}
          </Typography>
        </div>
        <div className="item">
          <Typography fontSize="13px" fontWeight="bold" color={kdaColor}>
            {kda}:1 평점
          </Typography>
          <Typography fontFamily="Helvetica" fontSize="11px" color="#879292">
            {kills} / {assists} / {deaths}
          </Typography>
        </div>
        <div className="item">
          <Typography fontSize="13px" fontWeight="bold" color={winRateColor}>
            {winRate}%
          </Typography>
          <Typography fontFamily="Helvetica" fontSize="11px" color="#879292">
            {games}게임
          </Typography>
        </div>
      </div>
    </ChampionWinRateContainer>
  );
};

const RankWinRateContainer = styled.div`
  padding: 8px 15px;
  display: flex;
  gap: 10px;
  & ~ & {
    border-top: solid 1px #cdd2d2;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .contents {
    display: flex;
    text-align: start;
    align-items: center;
    gap: 12px;
    flex-grow: 1;
  }
  .title {
    flex-grow: 1;
  }
  .chart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 123px;
    height: 24px;
    padding: 0 4px;
    border-radius: 4px;
    background: linear-gradient(to left, #1f8ecd 50%, #ee5a52 50%);
  }
`;

export const RecentWinRate = ({
  imageUrl,
  name,
  wins,
  losses,
}: IRecentWinRate) => {
  const winRate = calcWinRate(wins, losses);
  return (
    <RankWinRateContainer>
      <img src={imageUrl} alt={name} />
      <div className="contents">
        <Typography
          className="title"
          fontSize="13px"
          fontWeight="bold"
          color="#5e5e5e"
        >
          {name}
        </Typography>
        <Typography
          fontSize="13px"
          fontFamily="Helvetica"
          fontWeight="bold"
          color="#879292"
        >
          {winRate}%
        </Typography>
        <div className="chart">
          <Typography fontFamily="Helvetica" fontWeight="bold" color="#fff">
            {wins}
            <Typography as="span">승</Typography>
          </Typography>
          <Typography fontFamily="Helvetica" fontWeight="bold" color="#fff">
            {losses}
            <Typography as="span">패</Typography>
          </Typography>
        </div>
      </div>
    </RankWinRateContainer>
  );
};

export default ChampionWinRate;
