import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const InputLabel = styled.h3`
  color: black;
  margin-right: 10px;
`;

const Input = styled.input`
  height: 30px;
  width: 80%;
`;

function Header({ label, value, onChange }) {
  return (
    <InputContainer>
      <InputLabel>{label}:</InputLabel>
      <Input defaultValue={value} onChange={e => onChange(e.target.value)} />
    </InputContainer>
  );
}

export default Header;
