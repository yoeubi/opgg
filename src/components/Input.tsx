import styled from "styled-components";

const InputContainer = styled.input`
  height: 32px;
  padding: 9px 12px 8px 14px;
  border-radius: 2px;
  background-color: #fff;
  border: none;
  outline: none;
`;

const Input = () => {
  return <InputContainer placeholder="소환사명,챔피언…" />;
};

export default Input;
