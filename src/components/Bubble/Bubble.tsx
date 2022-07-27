import React from 'react';
import styled from 'styled-components';
import check from './check.svg';
import shut from './shut.svg';
import bubble from './bubble.svg';
import textLeft from './text-lef.svg';
import textRight from './text-right.svg';

interface BubbleProps {
  isOpen?: boolean;
  handleOpen: () => void;
}

const Bubble = (props: BubbleProps) => (
  <BubbleWrapper onClick={props.handleOpen} className={props.isOpen ? 'open' : 'close'}>
    <BabbleImg className={props.isOpen !== undefined ? (props.isOpen ? 'open' : 'close') : 'start'} />
  </BubbleWrapper>
);

const BubbleWrapper = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 100%;
  background: #0848c0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  animation: view 0.3s ease;
  @keyframes view {
    0% {
      transform: translateY(100px);
    }
    100% {
      transform: translateY(0);
    }
  }
  &.open {
    @media screen and (max-width: 410px) {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      background: rgba(51, 51, 51, 0.4);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    }
  }

  @media screen and (max-width: 410px) {
    margin: 15px;
  }
`;

const BabbleImg = styled.div`
  width: 30px;
  height: 30px;
  background: no-repeat center;
  position: relative;
  ::before {
    z-index: 100;
    content: '';
    background: url(${check}) no-repeat;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    left: 5px;
    opacity: 0;
  }

  &.open {
    background-image: url(${shut});
    animation: openRotate 0.3s linear;
  }

  &.close {
    background-image: url(${bubble});
    animation: bubbleOpen 0.6s forwards, bubbleSecond 0.6s linear forwards 3.2s, bubbleEnd 0.6s linear forwards 5.2s;
    ::before {
      animation: textLeftShow 1.3s linear 2s, textRightShow 1.3s linear 3.9s, CheckShow 2s linear 5.8s;
    }
  }

  &.start {
    background-image: url(${bubble});
    animation: bubbleStart 0.6s forwards, bubbleSecond 0.6s linear forwards 3.3s, bubbleEnd 0.6s linear forwards 5.2s;
    ::before {
      animation: textLeftShow 1.3s linear 2s, textRightShow 1.3s linear 3.9s, CheckShow 2s linear 5.8s;
    }
  }

  @keyframes openRotate {
    0% {
      background-image: url(${shut});
      transform: rotate(0) scale(0);
    }
    100% {
      transform: rotate(-180deg) scale(1);
    }
  }

  @keyframes bubbleOpen {
    0% {
      background-image: url(${shut});
      transform: rotate(-180deg) scale(1);
    }
    50% {
      background-image: url(${shut});
      transform: rotate(0) scale(0);
    }
    60% {
      background-image: url(${bubble});
      transform: translateY(20px) scale(1);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bubbleStart {
    0% {
      background-image: url(${bubble});
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bubbleSecond {
    0% {
      transform: translateY(0);
    }
    35% {
      transform: translateY(-5px);
      opacity: 0;
    }
    70% {
      opacity: 0;
      transform: translateY(0) scaleX(-1);
    }
    100% {
      opacity: 1;
      transform: scaleX(-1);
    }
  }

  @keyframes bubbleEnd {
    0% {
      transform: translateY(0) scaleX(-1);
    }
    35% {
      transform: translateY(-5px) scaleX(-1);
      opacity: 0;
    }
    70% {
      opacity: 0;
      transform: translateY(0) scaleX(1);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes textLeftShow {
    0% {
      background-image: url(${textLeft});
      height: 0;
      opacity: 1;
    }
    70% {
      background-image: url(${textLeft});
      height: 100%;
      opacity: 1;
    }
    100% {
      background-image: url(${textLeft});
    }
  }

  @keyframes textRightShow {
    0% {
      background-image: url(${textRight});
      height: 0;
      opacity: 1;
      transform: scaleX(-1);
    }
    100% {
      background-image: url(${textRight});
      height: 100%;
      opacity: 1;
      transform: scaleX(-1);
    }
  }

  @keyframes CheckShow {
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Bubble;
