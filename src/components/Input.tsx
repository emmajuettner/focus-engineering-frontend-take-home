import { styled } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
}

const InputDiv = styled.div``;

const InputLabel = styled.label`
  margin-right: 1em;
`;

const InputField = styled.input``;

const Input: React.FC<InputProps> = ({ id, label, type }) => {
  return (
    <InputDiv>
      <InputLabel htmlFor={id} >{label}</InputLabel>
      <InputField id={id} type={type} />
    </InputDiv>
  );
}

export default Input;