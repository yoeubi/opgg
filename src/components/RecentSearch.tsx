import styled from "styled-components";

const RecentSearchContainer = styled.ul`
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding: 8px 16px;
    &:hover {
      background: #f7f7f9;
    }
  }
`;

const RecentSearch = () => {
  return (
    <RecentSearchContainer>
      <li>kaste2a</li>
    </RecentSearchContainer>
  );
};

export default RecentSearch;
