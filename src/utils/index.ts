import { formatDistanceToNowStrict } from "date-fns";

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

export function setSearchOnLocal(search: string) {
  const saved = window.localStorage.getItem("search");
  const parsed = saved && (JSON.parse(saved) as string[]);
  if (!parsed) {
    window.localStorage.setItem("search", JSON.stringify([search]));
  } else {
    parsed.push(search);
    window.localStorage.setItem("search", JSON.stringify(parsed));
  }
}

export function getSearchOnLocal() {
  const saved = window.localStorage.getItem("search");
  if (saved) {
    return JSON.parse(saved);
  }
  return null;
}

export function getDistance(date: number) {
  return formatDistanceToNowStrict(new Date(date));
}

export function getTime(date: number) {
  const second = date % 60;
  const min = Math.floor(date / 60);
  const hour = Math.floor(min / 60);
  return `${hour ? hour + "시" : ""}${min ? min + "분" : ""}${
    second ? second + "초" : ""
  }`;
}
