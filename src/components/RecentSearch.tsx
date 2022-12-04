import { useEffect, useState } from "react";
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
  const [searchs, setSearchs] = useState<string[]>([]);
  useEffect(() => {
    const searchs = window.localStorage.getItem("search");
    searchs && setSearchs(JSON.parse(searchs));
  }, []);
  return (
    <RecentSearchContainer>
      {searchs.map((search, index) => (
        <li key={index}>{search}</li>
      ))}
    </RecentSearchContainer>
  );
};

export default RecentSearch;
