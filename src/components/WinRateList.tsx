import { useState } from "react";
import styled from "styled-components";
import { IMostInfo } from "../apis";
import Typography from "./Typography";
import ChampionWinRate, { RecentWinRate } from "./WinRate";

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

      &:nth-of-type(1).inactive {
        border: solid 1px #cdd2d2;
        border-top: none;
        border-left: none;
        background-color: #f2f2f2;
      }
      &:nth-of-type(2).inactive {
        border: solid 1px #cdd2d2;
        border-top: none;
        border-right: none;
        background-color: #f2f2f2;
      }
    }
  }
`;

interface Props {
  mostInfo: IMostInfo;
}

const WinRateList = ({ mostInfo: { champions, recentWinRate } }: Props) => {
  const [type, setType] = useState<"champions" | "recentWinRate">("champions");
  const onClick = (type: "champions" | "recentWinRate") => {
    setType(type);
  };
  return (
    <WinRateListContainer>
      <div className="tap">
        <button
          onClick={() => onClick("champions")}
          className={type === "champions" ? "" : "inactive"}
        >
          <Typography
            fontSize="12px"
            fontWeight="bold"
            color={type === "champions" ? "#5e5e5e" : "#879292"}
          >
            챔피언 승률
          </Typography>
        </button>
        <button
          onClick={() => onClick("recentWinRate")}
          className={type === "recentWinRate" ? "" : "inactive"}
        >
          <Typography
            fontSize="12px"
            fontWeight="bold"
            color={type === "recentWinRate" ? "#5e5e5e" : "#879292"}
          >
            7일간 랭크 승률
          </Typography>
        </button>
      </div>
      {type === "champions" ? (
        <div>
          {champions.map((champion) => (
            <ChampionWinRate {...champion} />
          ))}
        </div>
      ) : (
        <div>
          {recentWinRate.map((recent) => (
            <RecentWinRate {...recent} />
          ))}
        </div>
      )}
    </WinRateListContainer>
  );
};

export default WinRateList;
