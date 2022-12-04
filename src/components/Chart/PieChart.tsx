import styled from "styled-components";
import { calcWinRate } from "../../utils";

const PieChartContainer = styled.div<Props>`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: conic-gradient(
    #ee5a52 ${(props) => props.losses}%,
    #1f8ecd 0 ${(props) => props.wins}%
  );
  &::before {
    content: "${(props) => props.wins}%";
    background-color: #ededed;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

interface Props {
  wins: number;
  losses: number;
}

const PieChart = ({ wins, losses }: Props) => {
  const winRate = calcWinRate(wins, losses);
  return <PieChartContainer wins={winRate} losses={100 - winRate} />;
};

export default PieChart;
