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

export interface ISummoner {
  summoner: {
    ladderRank: {
      rank: number;
      rankPercentOfTop: number;
    };
    leagues: {
      hasResults: boolean;
      losses: number;
      tierRank: ITierRank;
      wins: number;
    }[];
    level: number;
    name: string;
    previousTiers: IPreviousTiers[];
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string;
    profileImageUrl: string;
    url: string;
  };
}

export function getSummonerAPI(name: string): Promise<Summoner> {
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

export function getMostInfoAPI() {
  return fetch(`${HOST}/summoner/kaste2a/mostInfo`).then((res) => res.json());
}
