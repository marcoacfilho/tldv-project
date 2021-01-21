import styled from 'styled-components';

const ButtonContainer = styled.div`
    width: 90px;
    height: 35px;
    border-radius: 20px;
    background-color: green;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    cursor: pointer;
`

const Label = styled.p`
    color: black;
    margin: 0;
    font-weight: bold;
`

function UpdateButton({ label, onClick }) {
    return (
      <ButtonContainer onClick={onClick}>
        <Label>{label}</Label>
      </ButtonContainer>
    );
  }
  
  export default UpdateButton;
  