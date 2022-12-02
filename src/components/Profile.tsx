import styled from "styled-components";
import { ISummoner } from "../apis";
import TierRank from "./TierRank";
import Typography from "./Typography";

const ProfileContainer = styled.div`
  padding: 15px;
  .seasons {
    display: flex;
    gap: 8px;
    margin-left: 11px;
    margin-bottom: 6px;
  }
  .profile {
    display: flex;
    gap: 17px;
    .icon {
      position: relative;
      width: 120px;
      height: 120px;
      padding: 9px;
      .img {
        width: 100%;
      }
      .tier {
        position: absolute;
        top: 0;
        left: 0;
      }
      .level-container {
        position: relative;
        left: 50%;
        top: -18px;
        transform: translateX(-50%);
        width: 44px;
        height: 24px;
      }
      .background {
        width: 44px;
        height: 24px;
        background: linear-gradient(to bottom, #f6e08f, #ca9a2c 99%);
        clip-path: polygon(
          15% 0%,
          85% 0%,
          100% 50%,
          85% 100%,
          15% 100%,
          0% 50%
        );
      }
      .level {
        position: absolute;
        top: 1px;
        left: 1px;
        width: 42px;
        height: 22px;
        background-color: #2c3548;
        text-align: center;
        line-height: 22px;
        clip-path: polygon(
          15% 0%,
          85% 0%,
          100% 50%,
          85% 100%,
          15% 100%,
          0% 50%
        );
      }
    }
    .info {
      padding: 11px 0;
      .name {
        letter-spacing: -0.77px;
        margin-bottom: 4px;
      }
      .rank {
        letter-spacing: -0.42px;
      }
    }
  }
`;

interface Props {
  data: ISummoner;
}

const Profile = ({ data: { summoner } }: Props) => {
  return (
    <ProfileContainer>
      <div className="seasons">
        {summoner.previousTiers.map((tier, index) => (
          <TierRank key={index} {...tier} />
        ))}
      </div>
      <div className="profile">
        <div className="icon">
          <img className="img" src={summoner.profileImageUrl} alt="profile" />
          <img
            className="img tier"
            src={summoner.profileBorderImageUrl}
            alt="border"
          />
          <div className="level-container">
            <div className="background" />
            <Typography
              className="level"
              fontFamily="Helvetica"
              fontSize="14px"
              color="#eabd56"
            >
              {summoner.level}
            </Typography>
          </div>
        </div>
        <div className="info">
          <Typography
            className="name"
            fontWeight="bold"
            fontSize="20px"
            color="#242929"
          >
            {summoner.name}
          </Typography>
          <Typography className="rank" fontSize="11px" color="#657070">
            레더 랭킹&nbsp;
            <Typography as="span" fontFamily="Helvetica" fontWeight="bold">
              {summoner.ladderRank.rank}
            </Typography>
            위 (상위
            <Typography as="span" fontFamily="Helvetica">
              {summoner.ladderRank.rankPercentOfTop}%
            </Typography>
            )
          </Typography>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
