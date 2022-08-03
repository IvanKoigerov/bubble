import React from 'react';
import styled from 'styled-components';

export interface MessageProps {
  author?: string;
  children: string;
  isUser?: boolean;
  time?: string;
}

const Message = (props: MessageProps) => {
  const massageText = (text: string) => {
    const urlRegex = /(\b(https|http):\/\/[-\w+&@#/%?=~_|!:,.]*[-\w+&@#/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    });
  };
  return (
    <Wrapper isUser={props.isUser}>
      <MessageBox isUser={props.isUser}>
        <div>
          <span>{props.author}</span>
          <p dangerouslySetInnerHTML={{ __html: massageText(props.children) }} />
        </div>
        <Time>{props.time}</Time>
      </MessageBox>
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

const MessageBox = styled.div<{ isUser?: boolean }>`
  background: ${(props) => (props.isUser ? props.theme.userMessage : props.theme.message)};
  font-size: 14px;
  display: flex;
  gap: 5px;
  max-width: 80%;
  padding: 10px;
  border-radius: 8px;
  color: ${(props) => props.theme.common};

  p {
    color: ${(props) => props.theme.textColor};
    word-break: break-word;
  }
`;

const Time = styled.time`
  align-self: end;
  font-size: 12px;
`;

export default Message;
