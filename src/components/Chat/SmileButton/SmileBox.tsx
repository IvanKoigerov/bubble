import React from 'react';
import styled from 'styled-components';
import { SmileProps } from './SmileButton';

interface SmileProp extends SmileProps {
  isOpen: boolean;
}

const smileArr = ['😊', '😂', '😘', '😎', '😱', '😡', '😢', '😐', '👋', '👍', '👎', '❤'];

const SmileBox = (props: SmileProp) => {
  return (
    <SmileWrapper isOpen={props.isOpen}>
      {smileArr.map((smile, key) => (
        <SmileButton onClick={() => props.addSmile(smile)} key={key}>
          {smile}
        </SmileButton>
      ))}
    </SmileWrapper>
  );
};

const SmileWrapper = styled.div<{ isOpen?: boolean }>`
  position: absolute;
  top: -150px;
  width: 200px;
  border: 1px solid ${(props) => props.theme.input};
  background: ${(props) => props.theme.chatColor};
  box-shadow: ${(props) => props.theme.bubbleShadow};
  border-radius: 2px;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  user-select: none;
  transition: 0.3s ease;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-30px)')};
`;

const SmileButton = styled.span`
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 1.3;

  &:hover {
    background: ${(props) => props.theme.input};
  }
`;

export default SmileBox;
