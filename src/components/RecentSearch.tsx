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

interface Props {
  searchs: string[];
  onSearch: (value: string) => void;
}

const RecentSearch = ({ searchs, onSearch }: Props) => {
  return (
    <RecentSearchContainer>
      {searchs.map((search, index) => (
        <li key={index} onClick={() => onSearch(search)}>
          {search}
        </li>
      ))}
    </RecentSearchContainer>
  );
};

export default RecentSearch;
