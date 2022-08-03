import React from 'react';
import styled from 'styled-components';

interface SmileProps {
  addSmile: (smile?: string) => void;
}

const smileArr = ['😊', '😂', '😘', '😎', '😱', '😡', '😢', '😐', '👋', '👍', '👎', '❤'];

const SmileBox = (props: SmileProps) => {
  return (
    <SmileWrapper>
      {smileArr.map((smile, key) => (
        <SmileButton onClick={() => props.addSmile(smile)} key={key}>
          {smile}
        </SmileButton>
      ))}
    </SmileWrapper>
  );
};

const SmileWrapper = styled.div`
  position: absolute;
  top: -160px;
  width: 200px;
  height: 150px;
  border: 1px solid ${(props) => props.theme.input};
  background: ${(props) => props.theme.chatColor};
  box-shadow: ${(props) => props.theme.bubbleShadow};
  border-radius: 2px;
  padding: 10px;
  font-size: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  user-select: none;
`;

const SmileButton = styled.span`
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme.input};
  }
`;

export default SmileBox;
