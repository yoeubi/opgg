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

export interface ITeam {
  players: {
    champion: {
      imageUrl: string;
      level: number;
    };
    summonerId: string;
    summonerName: string;
  }[];
  teamId: number;
}

export interface IMatchDeatil {
  gameId: string;
  teams: ITeam[];
}

export function getMatchDetailAPI(gameId: string): Promise<IMatchDeatil> {
  return fetch(`${HOST}/summoner/kaste2a/matchDetail/${gameId}`).then((res) =>
    res.json()
  );
}

export interface IGame {
  champion: {
    imageUrl: string;
    level: number;
  };
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: true;
  items: [
    {
      imageUrl: string;
    }
  ];
  mapInfo: {
    imageUrl: string;
    mapId: number;
  };
  mmr: number;
  needRenew: true;
  peak: string[];
  spells: [
    {
      imageUrl: string;
    }
  ];
  stats: {
    general: {
      assist: number;
      contributionForKillRate: string;
      cs: number;
      csPerMin: number;
      death: number;
      goldEarned: number;
      kdaString: string;
      kill: number;
      largestMultiKillString: string;
      opScoreBadge: string;
      totalDamageDealtToChampions: number;
    };
    ward: {
      sightWardsBought: number;
      visionWardsBought: number;
    };
  };
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface IMatch {
  champions: {
    id: number;
    key: string;
    name: string;
    imageUrl: string;
    games: number;
    kills: number;
    deaths: number;
    assists: number;
    wins: number;
    losses: number;
    cs: number;
    rank: number;
  }[];
  games: IGame[];
  positions: {
    games: number;
    losses: number;
    position: string;
    positionName: string;
    wins: number;
  }[];
  summary: {
    assists: number;
    deaths: number;
    kills: number;
    losses: number;
    wins: number;
  };
}

export function getMatchesAPI(name: string): Promise<IMatch> {
  return fetch(`${HOST}/summoner/${name}/matches`).then((res) => res.json());
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
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface IMostInfo {
  champions: IChampions[];
  recentWinRate: IRecentWinRate[];
}

export function getMostInfoAPI(name: string): Promise<IMostInfo> {
  return fetch(`${HOST}/summoner/${name}/mostInfo`).then((res) => res.json());
}
