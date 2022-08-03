import { keyframes } from 'styled-components';
import shut from './shut.svg';
import bubble from './bubble.svg';
import textLeft from './text-left.svg';
import textRight from './text-right.svg';

export const view = keyframes`
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const openRotate = keyframes`
  0% {
    background-image: url(${shut});
    transform: rotate(0) scale(0);
  }

  100% {
    transform: rotate(-180deg) scale(1);
  }
`;

export const bubbleOpen = keyframes`
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
`;

export const bubbleStart = keyframes`
  0% {
    background-image: url(${bubble});
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const bubbleSecond = keyframes`
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
`;

export const bubbleEnd = keyframes`
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
`;

export const textLeftShow = keyframes`
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
`;

export const textRightShow = keyframes`
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
`;

export const checkShow = keyframes`
  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
