import React, { useState } from 'react';
import Smile from './Smile';
import SmileBox from './SmileBox';

export interface SmileProps {
  addSmile: (smile?: string) => void;
}

const SmileButton = (props: SmileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SmileBox addSmile={props.addSmile} isOpen={isOpen} />
      <Smile fill="#9ea4ac" onClick={() => setIsOpen((isOpen) => !isOpen)} />
    </>
  );
};

export default SmileButton;
