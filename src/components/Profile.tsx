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
    .img {
      width: 120px;
      height: 120px;
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
        <img
          className="img"
          src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg"
          alt=""
        />
        <div className="info">
          <div className="name">플레이어아이디</div>
          <div className="rank">레더 랭킹 363,499위 (상위 40.7%)</div>
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
