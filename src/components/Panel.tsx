import { useState } from "react";
import styled from "styled-components";
import { IMatch } from "../apis";
import adcIcon from "../assets/icon-mostposition-adc.svg";
import jngIcon from "../assets/icon-mostposition-jng.svg";
import midIcon from "../assets/icon-mostposition-mid.svg";
import supIcon from "../assets/icon-mostposition-sup.svg";
import topIcon from "../assets/icon-mostposition-top.svg";
import empty from "../assets/group.svg";
import { calcKDA, calcWinRate, getKDAColor, getWinRateColor } from "../utils";
import PieChart from "./Chart/PieChart";
import Divider from "./Divider";
import Typography from "./Typography";

const PanelContainer = styled.div`
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
  .tap {
    height: 36px;
    padding: 0 16px;
    border-bottom: solid 1px #cdd2d2;
    background-color: #f2f2f2;
    display: flex;
    gap: 24px;
    button {
      border: none;
      padding: 0;
      font-family: NanumBarunGothicOTF;
      font-size: 12px;
      color: #555;
    }
    .active {
      font-size: 12px;
      font-weight: bold;
      color: #1f8ecd;
      position: relative;
      &::after {
        position: absolute;
        height: 2px;
        background: #1f8ecd;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
      }
    }
  }
  .contents {
    height: 158px;
    display: flex;
    .stats {
      width: 276px;
      .title {
        padding: 16px 0 14px 33px;
      }
      .info {
        display: flex;
        align-items: center;
        text-align: center;
        padding-left: 24px;
        .kdas {
          flex-grow: 1;
        }
        .kda {
          margin-bottom: 6px;
        }
      }
    }
    .champions {
      width: 228px;
      padding: 16px;
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }
      .item ~ .item {
        margin-top: 12px;
      }
    }
    .positions {
      width: 184px;
      padding: 16px;
      .title {
        margin-bottom: 20px;
      }
      .item ~ .item {
        margin-top: 20px;
      }
    }
  }
  .item {
    display: flex;
    gap: 8px;
    .name {
      font-family: NanumBarunGothicOTF;
      font-size: 14px;
      color: #333;
      margin-bottom: 3px;
    }
    &.empty {
      align-items: center;
      .name {
        margin-bottom: 0;
        font-size: 11px;
        color: #999;
      }
    }
  }
`;

type Active = "solo" | "free" | null;

function getPositionIcon(position: string) {
  const icons = {
    TOP: topIcon,
    JNG: jngIcon,
    MID: midIcon,
    ADC: adcIcon,
    SUP: supIcon,
  };
  return icons[position as keyof typeof icons];
}
function getPosition(position: string) {
  const icons = {
    TOP: "탑",
    JNG: "정글",
    MID: "미드",
    ADC: "원딜",
    SUP: "서폿",
  };
  return icons[position as keyof typeof icons];
}

function EmptyChampion() {
  return (
    <div className="item empty">
      <img src={empty} alt="" />
      <div className="description">
        <div className="name">챔피언 정보가 없습니다</div>
      </div>
    </div>
  );
}

const Panel = ({ summary, champions, positions }: IMatch) => {
  const [active, setActive] = useState<Active>(null);
  const onClick = (type: Active) => {
    setActive(type);
  };
  const totalGameCount = positions[0].games + positions[1].games;
  const mainPositionRate = (positions[0].games / totalGameCount) * 100;
  const subPositionRate = (positions[1].games / totalGameCount) * 100;
  const kda = calcKDA(summary.kills, summary.assists, summary.deaths);
  const parsedKDA = parseFloat(kda);
  const winRate = calcWinRate(summary.wins, summary.losses);
  return (
    <PanelContainer>
      <div className="tap">
        <button
          className={active === null ? "active" : ""}
          onClick={() => onClick(null)}
        >
          전체
        </button>
        <button
          className={active === "solo" ? "active" : ""}
          onClick={() => onClick("solo")}
        >
          솔로게임
        </button>
        <button
          className={active === "free" ? "active" : ""}
          onClick={() => onClick("free")}
        >
          자유랭크
        </button>
      </div>
      <div className="contents">
        <div className="stats">
          <Typography
            className="title"
            fontFamily="Helvetica"
            fontSize="12px"
            color="#666"
          >
            {summary.wins + summary.losses}전 {summary.wins}승 {summary.losses}
            패
          </Typography>
          <div className="info">
            <PieChart wins={summary.wins} losses={summary.losses} />
            <div className="kdas">
              <Typography
                className="kda"
                fontFamily="Helvetica"
                fontSize="11px"
                color="#333"
              >
                {summary.kills} /
                <span style={{ color: "#c6443e" }}>{summary.assists}</span>/{" "}
                {summary.deaths}
              </Typography>
              <Typography fontFamily="Helvetica" fontSize="16px">
                <span style={{ color: getKDAColor(parsedKDA) }}>{kda}:1</span>
                &nbsp;
                <span style={{ color: getWinRateColor(winRate) }}>
                  ({winRate}
                  %)
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <Divider type="vertical" />
        <div className="champions">
          <>
            {champions.map((champion) => (
              <div className="item">
                <img src={champion.imageUrl} alt={champion.name} />
                <div className="description">
                  <div className="name">{champion.name}</div>
                  <Typography fontSize="11px">
                    {calcWinRate(champion.wins, champion.losses)}% (
                    {champion.wins}승 {champion.losses}패) |{" "}
                    {calcKDA(champion.kills, champion.assists, champion.deaths)}{" "}
                    평점
                  </Typography>
                </div>
              </div>
            ))}
            {Array.from({ length: 3 - champions.length }).fill(
              <EmptyChampion />
            )}
          </>
        </div>
        <Divider type="vertical" />
        <div className="positions">
          <div className="title">선호 포지션 (랭크)</div>
          {positions.map((position, index) => (
            <div className="item" key={index}>
              <img
                src={getPositionIcon(position.position)}
                alt={position.position}
              />
              <div className="description">
                <div className="name">{getPosition(position.position)}</div>
                <Typography fontSize="11px">
                  <span style={{ color: "#1f8ecd" }}>
                    {index === 0 ? mainPositionRate : subPositionRate}%
                  </span>
                  &nbsp;| 승률 {calcWinRate(position.wins, position.losses)}%
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

export default Panel;
