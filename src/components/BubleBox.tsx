import React from 'react';
import styled from 'styled-components';
import Bubble from './Bubble/Bubble';
import Chat from './Chat/Chat';

const BubleBox = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>();

  const handleOpen = () => {
    if (isOpen !== undefined) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Wrapper>
      <Chat isOpen={isOpen} />
      <Bubble isOpen={isOpen} handleOpen={handleOpen} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: end;
  @media screen and (max-width: 410px) {
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
  @media screen and (min-width: 410px) {
    bottom: 30px;
    right: 30px;
    max-height: 95vh;
  }
`;

export default BubleBox;
