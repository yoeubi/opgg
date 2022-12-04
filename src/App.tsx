import { useEffect, useState } from "react";
import {
  getMatchDetailAPI,
  getMatchesAPI,
  getMostInfoAPI,
  getSummonerAPI,
  IMatch,
  IMostInfo,
  ISummoner,
} from "./apis";
import Body from "./components/Body";
import Divider from "./components/Divider";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout, { LeftLayout, RightLayout } from "./components/Layout";
import Profile from "./components/Profile";
import League from "./components/League";
import WinRateList from "./components/WinRateList";
import Panel from "./components/Panel";
import Game from "./components/Game";
import GameList from "./components/GameList";

function App() {
  const [summoner, setSummoner] = useState<ISummoner>();
  const [mostInfo, setMostInfo] = useState<IMostInfo>();
  const [match, setMatch] = useState<IMatch>();
  useEffect(() => {
    getSummonerAPI("kaste2a").then((res) => {
      console.log(res.summoner);

      setSummoner(res);
    });

    getMatchesAPI().then((res) => {
      console.log("match", res);
      setMatch(res);
    });
    getMatchDetailAPI().then((res) => console.log(res));

    getMostInfoAPI().then((res) => {
      console.log(res);
      setMostInfo(res);
    });
  }, []);
  if (!summoner || !mostInfo || !match) return null;
  return (
    <div className="App">
      <Header>
        <Form />
      </Header>
      <Layout>
        <Profile data={summoner} />
      </Layout>
      <Divider />
      <Layout>
        <Body>
          <LeftLayout>
            {summoner.summoner.leagues.map((league, index) => (
              <League key={index} {...league} />
            ))}
            <WinRateList mostInfo={mostInfo} />
          </LeftLayout>
          <RightLayout>
            <Panel {...match} />
            <GameList>
              {match.games.map((game, index) => (
                <Game key={index} />
              ))}
            </GameList>
          </RightLayout>
        </Body>
      </Layout>
    </div>
  );
}

export default App;
