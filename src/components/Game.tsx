import styled from "styled-components";
import Divider from "./Divider";
import Typography from "./Typography";
import ward from "../assets/icon-ward-blue.svg";

const GameContainer = styled.div`
  display: flex;
  height: 96px;
  background-color: #d6b5b2;
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
  }
  .stats {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 13px;
    text-align: center;
  }
  .game {
    padding: 11px;
    border: solid 1px #c0aba8;

    display: flex;
    gap: 14px;
    .type {
      letter-spacing: -0.42px;
    }
  }
  .teams {
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
    border: solid 1px #c8817c;
    background-color: #e89c95;
    display: flex;
    align-items: flex-end;
    padding: 8px;
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

const Game = () => {
  const players = [
    {
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Galio.png",
        level: 20,
      },
      summonerId: "2593315",
      summonerName: "kaste2a",
    },
    {
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
        level: 31,
      },
      summonerId: "1861611",
      summonerName: "모두모두행복하길",
    },
    {
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png",
        level: 6,
      },
      summonerId: "1228887",
      summonerName: "HLE Viper",
    },
    {
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Anivia.png",
        level: 31,
      },
      summonerId: "3258578",
      summonerName: "10k EGO",
    },
    {
      champion: {
        imageUrl:
          "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png",
        level: 11,
      },
      summonerId: "2632082",
      summonerName: "knightzz",
    },
  ];
  const items = [
    {
      imageUrl: "https://opgg-static.akamaized.net/images/lol/item/3198.png",
    },
    {
      imageUrl: "https://opgg-static.akamaized.net/images/lol/item/3020.png",
    },
    {
      imageUrl: "https://opgg-static.akamaized.net/images/lol/item/3198.png",
    },
    {
      imageUrl: "https://opgg-static.akamaized.net/images/lol/item/1026.png",
    },
    {
      imageUrl: "https://opgg-static.akamaized.net/images/lol/item/3340.png",
    },
  ];
  const picks = [
    "https://opgg-static.akamaized.net/images/lol/perk/8229.png",
    "https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png",
  ];
  const spells = [
    {
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png",
    },
    {
      imageUrl:
        "https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png",
    },
  ];
  return (
    <GameContainer>
      <div className="game">
        <div className="result">
          <Typography
            fontSize="11px"
            fontWeight="bold"
            color="#555"
            className="type"
          >
            솔랭
          </Typography>
          <Typography fontSize="11px">하루 전</Typography>
          <Divider />
          <Typography fontSize="11px" fontWeight="bold">
            패배
          </Typography>
          <Typography fontSize="11px">15분 23초</Typography>
        </div>
        <div className="champion">
          <div className="info">
            <img
              className="icon"
              src="https://opgg-static.akamaized.net/images/lol/champion/Viktor.png"
            />
            <div className="spells">
              {spells.map((spell) => (
                <img src={spell.imageUrl} />
              ))}
            </div>
            <div className="picks">
              {picks.map((pick) => (
                <img src={pick} />
              ))}
            </div>
          </div>
          <Typography fontSize="11px">Viktor</Typography>
        </div>
        <div className="kda">
          <Typography fontFamily="Helvetica" fontSize="15px" color="#555e5e">
            2 / 2 / 2
          </Typography>
          <Typography fontFamily="Helvetica" fontSize="11px" color="#555e5e">
            1.50: 1 평점
          </Typography>
          <div className="kill-streak">
            <Typography className="kill" fontSize="10px" color="#fff">
              트리플 킬
            </Typography>
            <Typography className="kill" fontSize="10px" color="#fff">
              트리플 킬
            </Typography>
          </div>
        </div>
        <div className="stats">
          <Typography fontSize="11px" color="#555e5e">
            레벨9
          </Typography>
          <Typography fontSize="11px" color="#555e5e">
            20 (1.3) CS
          </Typography>
          <Typography fontSize="11px" color="#555e5e">
            킬관여 38%
          </Typography>
        </div>
        <div className="items">
          <div className="icons">
            {items.map((item) => (
              <img src={item.imageUrl} alt="" />
            ))}
          </div>
          <div className="ward">
            <img src={ward} />
            <Typography fontSize="11px">제어 와드 1</Typography>
          </div>
        </div>
      </div>
      <div className="teams">
        <div className="players">
          {players.map((player) => (
            <div className="player">
              <img src={player.champion.imageUrl} alt={player.summonerName} />
              <div className="name">{player.summonerName}</div>
            </div>
          ))}
        </div>
        <div className="players">
          {players.map((player) => (
            <div className="player">
              <img src={player.champion.imageUrl} alt={player.summonerName} />
              <div className="name">{player.summonerName}</div>
            </div>
          ))}
        </div>
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
