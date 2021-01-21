import styled from 'styled-components';

const TitleContainer = styled.div`
    width: 80%;
    border-bottom: 1px solid #d2d2d2;
`

const Title = styled.h1`
    color: black;
`

function Header({ title }) {
    return (
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    );
  }
  
  export default Header;
  