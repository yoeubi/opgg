import styled, { css } from "styled-components";
import Divider from "./Divider";
import Typography from "./Typography";
import ward from "../assets/icon-ward-blue.svg";
import { getMatchDetailAPI, IGame, ITeam } from "../apis";
import { useEffect, useState } from "react";
import { getChampionName, getDistance } from "../utils";
import { getTime } from "date-fns";

const state = {
  win: css`
    border: solid 1px #a1b8cd;
    background-color: #b0ceea;
  `,
  lose: css`
    border: solid 1px #c0aba8;
    background-color: #d6b5b2;
  `,
  renew: css`
    border: solid 1px #a7a7a7;
    background-color: #b6b6b6;
  `,
};

const moreState = {
  win: css`
    border: solid 1px #549dc7;
    background-color: #7fb0e1;
  `,
  lose: css`
    border: solid 1px #c8817c;
    background-color: #e89c95;
  `,
  renew: css`
    border: solid 1px #999;
    background-color: #999999;
  `,
};

const GameContainer = styled.div<{ state: "win" | "lose" | "renew" }>`
  display: flex;
  height: 96px;
  background-color: #d6b5b2;
  ${(props) => state[props.state]}
  .result {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
  .champion {
    text-align: center;
    .info {
      display: flex;
      gap: 4px;
      margin-bottom: 9px;
    }
    .icon {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 2px;
    }
    .spells {
      display: flex;
      flex-direction: column;
      gap: 2px;
      img {
        width: 22px;
        height: 22px;
      }
    }
    .picks {
      display: flex;
      flex-direction: column;
      gap: 2px;
      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }
  .kda {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 6px;
    flex-grow: 1;
  }
  .stats {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 13px;
    text-align: center;
    flex-grow: 1;
  }
  .game {
    padding: 11px;
    border: solid 1px #c0aba8;
    flex-grow: 1;
    display: flex;
    gap: 14px;
    .type {
      letter-spacing: -0.42px;
    }
  }
  .teams {
    width: 155px;
    display: flex;
    gap: 13px;
    padding: 4px 0;
  }
  .players {
    display: flex;
    gap: 2px;
    flex-direction: column;
  }
  .items {
    width: 94px;
    text-align: center;
    .empty {
      width: 22px;
      height: 22px;
      border-radius: 2px;
      background-color: ${(props) =>
        props.state === "renew"
          ? "#979797"
          : props.state === "win"
          ? "#7aa5c3"
          : "#cb9e9a"};
    }
    .icons {
      display: flex;
      gap: 2px;
      flex-wrap: wrap;
      margin-bottom: 7px;
    }
    img {
      width: 22px;
      height: 22px;
      border-radius: 2px;
    }
  }
  .player {
    display: flex;
    gap: 3px;
    align-items: center;
    img {
      width: 16px;
      height: 16px;
    }
    .name {
      font-family: AppleSDGothicNeo;
      font-size: 11px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.42px;
      color: #555;
      width: 52px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .more {
    height: 100%;
    ${(props) => moreState[props.state]}
    display: flex;
    align-items: flex-end;
    padding: 4px;
  }
  .kill-streak {
    display: flex;
    gap: 4px;
    .kill {
      height: 18px;
      padding: 3px 5px;
      border-radius: 9px;
      border: solid 1px #7f3590;
      background-color: #8c51c5;
    }
  }
  .ward {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

const Game = ({
  champion,
  spells,
  gameId,
  items,
  peak,
  gameType,
  gameLength,
  isWin,
  needRenew,
  createDate,
  stats,
}: IGame) => {
  const [teams, setTeams] = useState<ITeam[]>();
  useEffect(() => {
    getMatchDetailAPI(gameId).then((res) => setTeams(res.teams));
  }, []);
  return (
    <GameContainer state={needRenew ? "renew" : isWin ? "win" : "lose"}>
      <div className="game">
        <div className="result">
          <Typography
            fontSize="11px"
            fontWeight="bold"
            color="#555"
            className="type"
          >
            {gameType}
          </Typography>
          <Typography fontSize="11px">{getDistance(createDate)}</Typography>
          <Divider />
          <Typography fontSize="11px" fontWeight="bold">
            {needRenew ? "다시하기" : isWin ? "승리" : "패배"}
          </Typography>
          <Typography fontSize="11px">{getTime(gameLength)}</Typography>
        </div>
        <div className="champion">
          <div className="info">
            <img className="icon" src={champion.imageUrl} alt="" />
            <div className="spells">
              {spells.map((spell) => (
                <img src={spell.imageUrl} alt={spell.imageUrl} />
              ))}
            </div>
            <div className="picks">
              {peak.map((pick) => (
                <img src={pick} alt="" />
              ))}
            </div>
          </div>
          <Typography fontSize="11px">
            {getChampionName(champion.imageUrl)}
          </Typography>
        </div>
        <div className="kda">
          <Typography fontFamily="Helvetica" fontSize="15px" color="#555e5e">
            {stats.general.kill} / {stats.general.assist} /{" "}
            {stats.general.death}
          </Typography>
          <Typography fontFamily="Helvetica" fontSize="11px" color="#555e5e">
            {stats.general.kdaString} 평점
          </Typography>
          <div className="kill-streak">
            {stats.general.largestMultiKillString && (
              <Typography className="kill" fontSize="10px" color="#fff">
                {stats.general.largestMultiKillString}
              </Typography>
            )}
            {stats.general.opScoreBadge && (
              <Typography className="kill" fontSize="10px" color="#fff">
                {stats.general.opScoreBadge}
              </Typography>
            )}
          </div>
        </div>
        <div className="stats">
          <Typography fontSize="11px" color="#555e5e">
            레벨 {champion.level}
          </Typography>
          <Typography fontSize="11px" color="#555e5e">
            {stats.general.cs} ({stats.general.csPerMin}) CS
          </Typography>
          <Typography fontSize="11px" color="#555e5e">
            킬관여 {stats.general.contributionForKillRate}
          </Typography>
        </div>
        <div className="items">
          <div className="icons">
            <>
              {items.map((item) => (
                <img src={item.imageUrl} alt="" />
              ))}
              {Array.from({ length: 8 - items.length }).fill(
                <div className="empty" />
              )}
            </>
          </div>
          <div className="ward">
            <img src={ward} />
            <Typography fontSize="11px">제어 와드 1</Typography>
          </div>
        </div>
      </div>
      <div className="teams">
        {teams?.map((team) => (
          <div className="players">
            {team.players.map((player) => (
              <div className="player">
                <img src={player.champion.imageUrl} alt={player.summonerName} />
                <div className="name">{player.summonerName}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="more">
        <img
          src="https://s-lol-web.op.gg/images/icon/icon-arrow-down-red.svg?v=1669353254123"
          alt=""
        />
      </button>
    </GameContainer>
  );
};

export default Game;
