import React from 'react';
import styled from 'styled-components';

export interface MassageProps {
  author?: string;
  children: string;
  isUser?: boolean;
  time?: string;
}

const Massage = (props: MassageProps) => {
  const massageText = (text: string) => {
    const urlRegex = /(\b(https|http):\/\/[-\w+&@#\/%?=~_|!:,.]*[-\w+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    });
  };
  return (
    <Wrapper isUser={props.isUser}>
      <MassageBox isUser={props.isUser}>
        <div>
          <span>{props.author}</span>
          <p dangerouslySetInnerHTML={{ __html: massageText(props.children) }} />
        </div>
        <Time>{props.time}</Time>
      </MassageBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  animation: show 0.3s ease;

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MassageBox = styled.div<{ isUser?: boolean }>`
  background: ${(props) => (props.isUser ? '#deecfd' : '#f3f5f7')};
  font-size: 14px;
  display: flex;
  gap: 5px;
  max-width: 80%;
  padding: 10px;
  border-radius: 8px;
  color: #9ea4ac;

  p {
    color: black;
    word-break: break-word;
  }
`;

const Time = styled.time`
  align-self: end;
  font-size: 12px;
`;

export default Massage;
