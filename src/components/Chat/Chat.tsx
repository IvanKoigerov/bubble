import React from 'react';
import { ReactComponent as Smile } from './smile.svg';
import send from './send.svg';
import styled from 'styled-components';
import Massage from './Massage';

interface ChatProps {
  isOpen?: boolean;
}

const Chat = (props: ChatProps) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState<string>();

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <ChatWrapper className={props.isOpen ? 'show' : 'hide'}>
      <Masseges>
        <h1>Здравствуйте 👋</h1>
        <p>
          Если у Вас есть вопрос о порядке оформления документов или получения услуг, вы можете задать его здесь. "Мои
          Документы" помогут найти нужную информацию.
        </p>
        <Massage author="Виртуальный оператор">
          Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на
          популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее.
        </Massage>
        <Massage isUser={true}>
          Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на
          популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее.
        </Massage>
        <Massage author="Бот">Здравствуйте, меня зовут бот. Уточните, пожалуйста, какой вопрос вас интересует?</Massage>
        <Massage isUser={true}>памагите</Massage>
        <Massage author="Бот">Здравствуйте, меня зовут бот. Уточните, пожалуйста, какой вопрос вас интересует?</Massage>
      </Masseges>
      <TextWrapper>
        <Smile fill="#9ea4ac" />
        <TextArea ref={textAreaRef} onChange={textAreaChange} placeholder="Введите сообщение..." value={value} />
        {value && <img src={send} alt="send" />}
      </TextWrapper>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  box-shadow: 0 8px 16px rgba(51, 51, 51, 0.2);
  border-radius: 4px;
  border-top: 5px solid #0848c0;
  background: white;
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  opacity: 0;
  transform: translateY(-30px);
  @media screen and (min-width: 410px) {
    width: 400px;
    height: 760px;
    max-height: calc(95vh - 100px);
    margin-bottom: 20px;
  }
  @media screen and (max-width: 410px) {
    width: 100%;
    height: 100%;
  }

  &.show {
    opacity: 1;
    transform: translateY(0);
  }

  &.hide {
    visibility: hidden;
  }
`;

const TextWrapper = styled.div`
  border: 1px solid #d6dade;
  border-radius: 2px;
  display: flex;
  align-items: end;
  img,
  svg {
    margin: 15px 10px;
    width: 20px;
    flex-shrink: 0;
    &:hover {
      fill: #467bf1;
    }
  }
`;

const TextArea = styled.textarea<{ scroll?: string }>`
  width: 100%;
  min-height: 50px;
  max-height: 250px;
  resize: none;
  line-height: 1.5;
  border: none;
  outline: none;
  padding: 15px 0;
`;

const Masseges = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dadd;
  }
`;

export default Chat;
