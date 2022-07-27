import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface MassageProps {
  author?: string;
  children: ReactNode;
  isUser?: boolean;
}

const Massage = (props: MassageProps) => {
  const date = new Date();
  return (
    <Wrapper isUser={props.isUser}>
      <MassageBox isUser={props.isUser}>
        <div>
          <Author>{props.author}</Author>
          <p>{props.children}</p>
        </div>
        <Time>{date.getHours() + ':' + date.getMinutes()}</Time>
      </MassageBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const MassageBox = styled.div<{ isUser?: boolean }>`
  background: ${(props) => (props.isUser ? '#deecfd' : '#f3f5f7')};
  font-size: 14px;
  color: black;
  display: flex;
  gap: 5px;
  max-width: 80%;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const Author = styled.span`
  color: #9ea4ac;
`;

const Time = styled.time`
  color: #9ea4ac;
  align-self: end;
  font-size: 12px;
`;

export default Massage;
