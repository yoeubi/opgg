import { ChangeEvent } from "react";
import styled from "styled-components";
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
  onSubmit: () => void;
}

const Form = ({ value, onChange, onSubmit }: Props) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input value={value} onChange={onChange} />
      <Button />
      <RecentSearch />
    </FormContainer>
  );
};

export default Form;
