import React, { useState } from 'react';
import Smile from './Smile';
import send from './send.svg';
import styled from 'styled-components';
import Message, { MessageProps } from './Message';
import { format } from 'date-fns';

interface ChatProps {
  isOpen?: boolean;
}

const Chat = (props: ChatProps) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState<string>();
  const [massageArr, setMassageArr] = useState<MessageProps[]>([]);

  const handleMessage = () => {
    if (value) {
      setMassageArr((currentMassages) => {
        const newMassage = currentMassages.slice();
        newMassage.push({
          time: format(new Date(), 'HH:mm'),
          children: value,
        });
        return newMassage;
      });
      setValue('');
    }
  };

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
      <Messeges>
        <h1>Здравствуйте 👋</h1>
        <p>
          Если у Вас есть вопрос о порядке оформления документов или получения услуг, вы можете задать его здесь. "Мои
          Документы" помогут найти нужную информацию.
        </p>
        <Message author="Виртуальный оператор" time="17:05">
          Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на
          популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее. https://www.youtube.com/
        </Message>
        <Message isUser={true} time="17:10">
          Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на
          популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее. https://www.youtube.com/
        </Message>
        <Message author="Бот" time="17:15">
          Здравствуйте, меня зовут бот. Уточните, пожалуйста, какой вопрос вас интересует?
        </Message>
        <Message isUser={true} time="17:20">
          памагите
        </Message>
        <Message author="Бот" time="17:21">
          Здравствуйте, меня зовут бот. Уточните, пожалуйста, какой вопрос вас интересует?
        </Message>
        {massageArr &&
          massageArr.map((massage, key) => (
            <Message key={key} time={massage.time} isUser={true} children={massage.children} />
          ))}
      </Messeges>
      <TextWrapper>
        <Smile fill="#9ea4ac" />
        <TextArea ref={textAreaRef} onChange={textAreaChange} placeholder="Введите сообщение..." value={value} />
        {value && <img src={send} alt="send" onClick={handleMessage} />}
      </TextWrapper>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  box-shadow: 0 8px 16px #3333;
  border-radius: 4px;
  border-top: 5px solid #0848c0;
  background: #fff;
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

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`;

const TextWrapper = styled.form`
  border: 1px solid #d6dade;
  border-radius: 2px;
  display: flex;
  align-items: end;

  img,
  svg {
    margin: 15px 10px;
    width: 20px;
    flex-shrink: 0;
  }

  svg:hover {
    fill: #467bf1;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 50px;
  max-height: 250px;
  resize: none;
  line-height: 1.5;
  border: none;
  outline: none;
  padding: 15px 0;
`;

const Messeges = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 16px;
  margin-top: auto;

  * {
    margin: 0;
  }

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
