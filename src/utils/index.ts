export function calcWinRate(wins: number, losses: number) {
  const winrate = Math.floor((wins / (wins + losses)) * 100);
  return winrate;
}

export function calcKDA(kills: number, assists: number, deaths: number) {
  return ((kills + assists) / deaths).toFixed(2);
}
