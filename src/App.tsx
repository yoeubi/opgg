import { ChangeEvent, useState } from "react";
import {
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
import { setSearchOnLocal } from "./utils";

function App() {
  const [summoner, setSummoner] = useState<ISummoner>();
  const [mostInfo, setMostInfo] = useState<IMostInfo>();
  const [match, setMatch] = useState<IMatch>();
  // useEffect(() => {
  //   getSummonerAPI("kaste2a").then((res) => {
  //     console.log(res.summoner);

  //     setSummoner(res);
  //   });

  //   getMatchesAPI("kaste2a").then((res) => {
  //     console.log("match", res);
  //     setMatch(res);
  //   });

  //   getMostInfoAPI("kaste2a").then((res) => {
  //     console.log(res);
  //     setMostInfo(res);
  //   });
  // }, []);

  const [search, setSearch] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (value?: string) => {
    !value && setSearchOnLocal(search);
    Promise.all([
      getSummonerAPI(value ? value : search),
      getMatchesAPI(value ? value : search),
      getMostInfoAPI(value ? value : search),
    ]).then(([summoner, matches, mostInfo]) => {
      setSummoner(summoner);
      setMatch(matches);
      setMostInfo(mostInfo);
    });
  };
  if (!summoner || !mostInfo || !match)
    return (
      <Header>
        <Form value={search} onChange={onChange} onSubmit={onSubmit} />
      </Header>
    );
  return (
    <div className="App">
      <Header>
        <Form value={search} onChange={onChange} onSubmit={onSubmit} />
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
                <Game key={index} {...game} />
              ))}
            </GameList>
          </RightLayout>
        </Body>
      </Layout>
    </div>
  );
}

export default App;
