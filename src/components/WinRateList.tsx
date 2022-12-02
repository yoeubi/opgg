import styled from "styled-components";
import WinRate, { RankWinRate } from "./WinRate";

const WinRateListContainer = styled.div`
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
  .tap {
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #5e5e5e;
    button {
      width: 50%;
      height: 44px;
      border: none;
    }
  }
`;

const WinRateList = () => {
  return (
    <WinRateListContainer>
      <div className="tap">
        <button>챔피언 승률</button>
        <button>챔피언 승률</button>
      </div>
      <div>
        <WinRate />
        <WinRate />
        <WinRate />
        <WinRate />
        <WinRate />
        <RankWinRate />
      </div>
    </WinRateListContainer>
  );
};

export default WinRateList;
