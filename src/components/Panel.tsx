import { useState } from "react";
import styled from "styled-components";
import adcIcon from "../assets/icon-mostposition-adc.svg";
import jngIcon from "../assets/icon-mostposition-jng.svg";
import midIcon from "../assets/icon-mostposition-mid.svg";
import subIcon from "../assets/icon-mostposition-sub.svg";
import topIcon from "../assets/icon-mostposition-top.svg";
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
      padding: 16px 35px 24px 24px;
      .title {
        margin-bottom: 14px;
      }
      .info {
        display: flex;
        gap: 35px;
        align-items: center;
        text-align: center;
        .kda {
          margin-bottom: 6px;
        }
      }
      .chart {
        position: relative;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: conic-gradient(red 30%, blue 0 70%);
        &::before {
          content: "55%";
          background-color: #ededed;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 64px;
          height: 64px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }
    }
    .champions {
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
  }
`;

type Active = "solo" | "free" | null;

const Panel = () => {
  const [active, setActive] = useState<Active>(null);
  const onClick = (type: Active) => {
    setActive(type);
  };
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
            20전 11승 9패
          </Typography>
          <div className="info">
            <div className="chart" />
            <div>
              <Typography
                className="kda"
                fontFamily="Helvetica"
                fontSize="11px"
                color="#333"
              >
                25.9 / 15.8 / 14.1
              </Typography>
              <Typography
                fontFamily="Helvetica"
                fontSize="16px"
                color="#c6443e"
              >
                3.45:1 (58%)
              </Typography>
            </div>
          </div>
        </div>
        <Divider type="vertical" />
        <div className="champions">
          <div className="item">
            <img src="https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1" />
            <div className="description">
              <div className="name">룰루</div>
              <Typography fontSize="11px">
                70% (7승 3패) | 13.01 평점
              </Typography>
            </div>
          </div>
          <div className="item">
            <img src="https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1" />
            <div className="description">
              <div className="name">룰루</div>
              <Typography fontSize="11px">
                70% (7승 3패) | 13.01 평점
              </Typography>
            </div>
          </div>
          <div className="item">
            <img src="https://opgg-static.akamaized.net/images/lol/champion/Lucian.png?image=w_30&v=1" />
            <div className="description">
              <div className="name">룰루</div>
              <Typography fontSize="11px">
                70% (7승 3패) | 13.01 평점
              </Typography>
            </div>
          </div>
        </div>
        <Divider type="vertical" />
        <div className="positions">
          <div className="title">선호 포지션 (랭크)</div>
          <div className="item">
            <img src={topIcon} />
            <div className="description">
              <div className="name">룰루</div>
              <Typography fontSize="11px">
                70% (7승 3패) | 13.01 평점
              </Typography>
            </div>
          </div>
          <div className="item">
            <img src={topIcon} />
            <div className="description">
              <div className="name">룰루</div>
              <Typography fontSize="11px">
                70% (7승 3패) | 13.01 평점
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </PanelContainer>
  );
};

export default Panel;
