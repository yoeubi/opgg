export function calcWinRate(wins: number, losses: number) {
  const winrate = Math.floor((wins / (wins + losses)) * 100);
  return winrate;
}

export function calcKDA(kills: number, assists: number, deaths: number) {
  return ((kills + assists) / deaths).toFixed(2);
}

export function getKDAColor(kda: number) {
  return kda >= 5
    ? "#e19205"
    : kda >= 4
    ? "#1f8ecd"
    : kda >= 3
    ? "#2daf7f"
    : "#5e5e5e";
}

export function getWinRateColor(winRate: number) {
  return winRate >= 60 ? " #c6443e" : "#5e5e5e";
}

export function getChampionName(img: string) {
  const splited = img.split("/");
  const [name] = splited[splited.length - 1].split(".");
  return name;
}
