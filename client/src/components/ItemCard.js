import styled from 'styled-components';

const ItemContainer = styled.div`
    width: 200px;
    height: 200px;
    background-color: #d2d2d2;
    border-radius: 15px;
    box-shadow: 6px 5px 16px -9px rgba(0,0,0,0.82);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #797979;
        h2 {
            color: white;
        }
    }
`

const ItemTitle = styled.h2`
    color: black;
    margin: 0;
`

function ItemCard({ title, onClick }) {
    return (
      <ItemContainer onClick={onClick}>
        <ItemTitle>{title}</ItemTitle>
      </ItemContainer>
    );
  }
  
  export default ItemCard;
  