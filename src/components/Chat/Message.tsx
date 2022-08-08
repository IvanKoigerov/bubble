import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface MessageProps {
  author?: string;
  children: string;
  isUser?: boolean;
  time?: string;
}

const messageText = (text: string) => {
  const urlRegex = /(\b(https|http):\/\/[-\w+&@#/%?=~_|!:,.]*[-\w+&@#/%=~_|])/gi;
  return text.replace(urlRegex, function (url) {
    return '<a href="' + url + '" rel="noreferrer" target="_blank" >' + url + '</a>';
  });
};

const Message = (props: MessageProps) => {
  return (
    <Wrapper isUser={props.isUser}>
      <MessageBox isUser={props.isUser}>
        <div>
          <span>{props.author}</span>
          <p dangerouslySetInnerHTML={{ __html: messageText(props.children) }} />
        </div>
        <Time>{props.time}</Time>
      </MessageBox>
    </Wrapper>
  );
};

const show = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<{ isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  animation: ${show} 0.3s ease;
`;

const MessageBox = styled.div<{ isUser?: boolean }>`
  display: flex;
  gap: 5px;
  max-width: 80%;
  background: ${(props) => (props.isUser ? props.theme.colors.userMessage : props.theme.colors.message)};
  font-size: 14px;
  padding: 10px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.common};
  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: ${(props) => props.theme.colors.text};
    word-break: break-word;
  }
`;

const Time = styled.time`
  align-self: end;
  font-size: 12px;
`;

export default Message;
