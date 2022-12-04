import { ChangeEvent } from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  height: 32px;
  padding: 9px 12px 8px 14px;
  border-radius: 2px;
  background-color: #fff;
  border: none;
  outline: none;
`;

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Input = ({ value, onChange, onClick }: Props) => {
  return (
    <InputContainer
      placeholder="소환사명,챔피언…"
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Input;
