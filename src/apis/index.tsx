const HOST = "https://codingtest.op.gg/api";

export interface ITierRank {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface IPreviousTiers {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface ILeague {
  hasResults: boolean;
  losses: number;
  tierRank: ITierRank;
  wins: number;
}

export interface ISummoner {
  summoner: {
    ladderRank: {
      rank: number;
      rankPercentOfTop: number;
    };
    leagues: ILeague[];
    level: number;
    name: string;
    previousTiers: IPreviousTiers[];
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string;
    profileImageUrl: string;
    url: string;
  };
}

export function getSummonerAPI(name: string): Promise<ISummoner> {
  return fetch(`${HOST}/summoner/${name}`).then((res) => res.json());
}

export function getMatchDetailAPI() {
  return fetch(`${HOST}/summoner/kaste2a/matchDetail/342909519`).then((res) =>
    res.json()
  );
}

export function getMatchesAPI() {
  return fetch(`${HOST}/summoner/kaste2a/matches`).then((res) => res.json());
}

export interface IChampions {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface IRecentWinRate {
  id: 0;
  imageUrl: "string";
  key: "string";
  losses: 0;
  name: "string";
  wins: 0;
}

export interface IMostInfo {
  champions: IChampions[];
  recentWinRate: IRecentWinRate[];
}

export function getMostInfoAPI(): Promise<IMostInfo> {
  return fetch(`${HOST}/summoner/kaste2a/mostInfo`).then((res) => res.json());
}
