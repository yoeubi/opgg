import styled from "styled-components";
import TierRank from "./TierRank";

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
        font-family: Helvetica;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #eabd56;
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
        font-family: AppleSDGothicNeo;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.77px;
        color: #242929;
        margin-bottom: 4px;
      }
      .rank {
        font-family: AppleSDGothicNeo;
        font-size: 11px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.42px;
        color: #657070;
      }
    }
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <div className="seasons">
        <TierRank />
        <TierRank />
        <TierRank />
        <TierRank />
        <TierRank />
        <TierRank />
        <TierRank />
      </div>
      <div className="profile">
        <div className="icon">
          <img
            className="img"
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg"
            alt=""
          />
          <img
            className="img tier"
            src="https://opgg-static.akamaized.net/images/borders2/challenger.png"
            alt=""
          />
          <div className="level-container">
            <div className="background" />
            <div className="level">32</div>
          </div>
        </div>
        <div className="info">
          <div className="name">플레이어아이디</div>
          <div className="rank">레더 랭킹 363,499위 (상위 40.7%)</div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
