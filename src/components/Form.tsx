import { ChangeEvent, useMemo, useState } from "react";
import styled from "styled-components";
import { getSearchOnLocal } from "../utils";
import Button from "./Button";
import Input from "./Input";
import RecentSearch from "./RecentSearch";

const FormContainer = styled.form`
  position: relative;
  height: 32px;
  border-radius: 2px;
  background-color: #fff;
  display: inline-flex;
`;

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (value?: string) => void;
}

const Form = ({ value, onChange, onSubmit }: Props) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
  };
  const searchs = useMemo(() => getSearchOnLocal(), [click]);
  const onSearch = (value: string) => {
    onClick();
    onSubmit(value);
  };
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input value={value} onChange={onChange} onClick={onClick} />
      <Button />
      {click && searchs && (
        <RecentSearch searchs={searchs} onSearch={onSearch} />
      )}
    </FormContainer>
  );
};

export default Form;
