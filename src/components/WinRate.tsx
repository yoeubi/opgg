import styled from "styled-components";

const WinRateContainer = styled.div`
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
    align-items: center;
    gap: 21px;
    flex-grow: 1;
    div:first-child {
      flex-grow: 1;
    }
  }
  .title {
    font-family: Helvetica;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #5e5e5e;
    margin-bottom: 3px;
  }
  .text-style-13 {
    font-family: Helvetica;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #879292;
  }
`;

const ChampionWinRate = () => {
  return (
    <WinRateContainer>
      <img
        src="https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1"
        alt=""
      />
      <div className="contents">
        <div>
          <div className="title">신지드</div>
          <div className="text-style-13">CS 67.8 (2.4)</div>
        </div>
        <div>
          <div className="title">2.47:1 평점</div>
          <div className="text-style-13">6.6 / 3.0 / 6.8</div>
        </div>
        <div>
          <div className="title">69%</div>
          <div className="text-style-13">35게임</div>
        </div>
      </div>
    </WinRateContainer>
  );
};

const RankWinRateContainer = styled.div`
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
    align-items: center;
    gap: 12px;
    flex-grow: 1;
  }
  .title {
    font-family: Helvetica;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #5e5e5e;
    margin-bottom: 3px;
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
    font-family: Helvetica;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
`;

export const RankWinRate = () => {
  return (
    <RankWinRateContainer>
      <img
        src="https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1"
        alt=""
      />
      <div className="contents">
        <div className="title">신지드</div>
        <div className="title">69%</div>
        <div className="chart">
          <div className="win">4승</div>
          <div className="lose">11패</div>
        </div>
      </div>
    </RankWinRateContainer>
  );
};

export default ChampionWinRate;
