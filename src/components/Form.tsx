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

const Form = () => {
  return (
    <FormContainer>
      <Input />
      <Button />
      <RecentSearch />
    </FormContainer>
  );
};

export default Form;
