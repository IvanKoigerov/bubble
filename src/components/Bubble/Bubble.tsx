import React from 'react';
import styled, { css } from 'styled-components';
import check from './check.svg';
import shut from './shut.svg';
import bubble from './bubble.svg';
import {
  bubbleEnd,
  bubbleOpen,
  bubbleSecond,
  bubbleStart,
  checkShow,
  openRotate,
  textLeftShow,
  textRightShow,
  view,
} from './BubbleAnim';

interface BubbleProps {
  isOpen?: boolean;
  handleOpen: () => void;
}

const Bubble = (props: BubbleProps) => (
  <BubbleWrapper onClick={props.handleOpen} isOpen={props.isOpen}>
    <BubbleImg isOpen={props.isOpen} />
  </BubbleWrapper>
);

const BubbleWrapper = styled.button<{ isOpen?: boolean }>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: ${(props) => props.theme.bubbleSize};
  height: ${(props) => props.theme.bubbleSize};
  border: none;
  border-radius: 100%;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.bubbleShadow};
  animation: ${view} 0.3s ease;
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: ${(props) => props.theme.mediaMobile}) {
    position: ${(props) => props.isOpen && 'absolute'};
    top: ${(props) => props.isOpen && '10px'};
    right: ${(props) => props.isOpen && '10px'};
    width: ${(props) => props.isOpen && props.theme.bubbleOpenMobile};
    height: ${(props) => props.isOpen && props.theme.bubbleOpenMobile};
    background: ${(props) => props.isOpen && props.theme.mobileCross};
  }

  @media screen and (max-width: ${(props) => props.theme.mediaMobile}) {
    margin: 15px;
  }
`;

const cross = css`
  ${openRotate} 0.3s linear
`;

const open = css`
  ${bubbleOpen} 0.6s forwards, ${bubbleSecond} 0.6s linear forwards 3.2s, ${bubbleEnd} 0.6s linear forwards 5.2s
`;

const start = css`
  ${bubbleStart} 0.6s forwards, ${bubbleSecond} 0.6s linear forwards 3.2s, ${bubbleEnd} 0.6s linear forwards 5.2s
`;

const idle = css`
  ${textLeftShow} 1.3s linear 2s, ${textRightShow} 1.3s linear 3.9s, ${checkShow} 2s linear 5.8s
`;

const BubbleImg = styled.div<{ isOpen?: boolean }>`
  position: relative;
  width: ${(props) => props.theme.bubbleImgSize};
  height: ${(props) => props.theme.bubbleImgSize};
  background: ${(props) => (props.isOpen ? `url(${shut})` : `url(${bubble})`)} no-repeat center;
  animation: ${(props) => (props.isOpen !== undefined ? (props.isOpen ? cross : open) : start)};

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 100;
    width: 20px;
    height: 20px;
    opacity: 0;
    background: url(${check}) no-repeat;
    animation: ${(props) => (props.isOpen ? '' : idle)};
  }
`;

export default Bubble;
