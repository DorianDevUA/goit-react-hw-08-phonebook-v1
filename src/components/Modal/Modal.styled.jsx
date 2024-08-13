import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  min-height: 300px;
  background-color: antiquewhite;

  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  background-color: cadetblue;
  padding: 0 15px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const Body = styled.div``;
