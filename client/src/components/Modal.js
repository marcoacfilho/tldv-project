import styled from "styled-components";

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
`;

const ModalContainer = styled.div`
  width: 50%;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 12%;
  right: 25%;
`;

const CloseButton = styled.h3`
    color: black;
    position: absolute;
    top: 10px;
    right: 15px;
    margin: 0px;
    cursor: pointer;
`;

function Modal({ children, setShowModal }) {
  return (
    <Overlay onClick={() => setShowModal(false)}>
      <ModalContainer onClick={e => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
          {children}
        </ModalContainer>
    </Overlay>
  );
}

export default Modal;
