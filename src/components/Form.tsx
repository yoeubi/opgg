import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const FormContainer = styled.form`
  height: 32px;
  border-radius: 2px;
  background-color: #fff;
  display: inline-flex;
  overflow: hidden;
`;

const Form = () => {
  return (
    <FormContainer>
      <Input />
      <Button />
    </FormContainer>
  );
};

export default Form;
