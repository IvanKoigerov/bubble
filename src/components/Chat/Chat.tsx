import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import send from './send.svg';
import styled from 'styled-components';
import Message, { MessageProps } from './Message';
import { format } from 'date-fns';
import SmileButton from './SmileButton/SmileButton';

interface ChatProps {
  isOpen?: boolean;
}

const Chat = (props: ChatProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<string>();
  const [messageArr, setMessageArr] = useState<MessageProps[]>([
    {
      isUser: false,
      author: 'Виртуальный оператор',
      time: '17:10',
      children:
        'Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее. https://www.youtube.com/',
    },
    {
      isUser: true,
      time: '17:11',
      children:
        'Я не совсем Вас понял. Уточните, пожалуйста, Ваш вопрос. При выборе кнопки Вы можете получить ответ на популярные вопросы или задать другой вопрос, постараюсь помочь Вам быстрее. https://www.youtube.com/',
    },
    {
      author: 'Бот',
      time: '17:15',
      children: 'Здравствуйте, меня зовут бот. Уточните, пожалуйста, какой вопрос вас интересует?',
    },
    { isUser: true, time: '17:20', children: 'памагите' },
  ]);
  const handleMessage = () => {
    if (value) {
      setMessageArr((currentMessages) => {
        const newMessage = currentMessages.slice();
        newMessage.push({
          time: format(new Date(), 'HH:mm'),
          children: value,
        });
        return newMessage;
      });
      setValue('');
    }
  };
  const addSmile = (smile?: string) => {
    if (smile) {
      setValue((value) => value + smile);
    }
  };

  const textAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [messageArr]);

  return (
    <ChatWrapper isOpen={props.isOpen}>
      <Messages ref={chatRef}>
        <h1>Здравствуйте 👋</h1>
        <p>
          Если у Вас есть вопрос о порядке оформления документов или получения услуг, вы можете задать его здесь.
          &quot;Мои Документы&quot; помогут найти нужную информацию.
        </p>
        <LinkWrapper>
          <Link>Центры госуслуг «Мои документы»</Link>
          <Link>Вопросы по Личному кабинету</Link>
          <Link>Молочная кухня</Link>
          <Link>Карта Москвича</Link>
          <Link>🔎 Найти ответ в базе знаний</Link>
        </LinkWrapper>
        {messageArr &&
          messageArr.map((message, key) => (
            <Message key={key} time={message.time} isUser={!message.author} author={message.author}>
              {message.children}
            </Message>
          ))}
      </Messages>
      <TextWrapper>
        <SmileButton addSmile={addSmile} />
        <TextArea ref={textAreaRef} onChange={textAreaChange} placeholder="Введите сообщение..." value={value} />
        {value && <Send type="submit" onClick={handleMessage} />}
      </TextWrapper>
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div<{ isOpen?: boolean }>`
  box-shadow: ${(props) => props.theme.shadows.chat};
  border-radius: 4px;
  border-top: 5px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.chat};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-30px)')};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: ${(props) => props.theme.sizes.chatW};
    height: ${(props) => props.theme.sizes.chatH};
    max-height: calc(95vh - 100px);
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

const Send = styled.button`
  border: none;
  outline: none;
  background: url(${send}) no-repeat center;
  background-size: cover;
  opacity: 0.75;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const TextWrapper = styled.form`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.input};
  border-radius: 2px;
  display: flex;
  align-items: end;
  margin: 16px;
  ::placeholder {
    color: ${(props) => props.theme.colors.common};
  }

  ${Send},
  svg {
    margin: 15px 10px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    cursor: pointer;
  }
  svg {
    fill: ${(props) => props.theme.colors.common};

    &:hover {
      fill: ${(props) => props.theme.colors.smile};
    }
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
  padding: 14px 0;
`;

const Messages = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 30px 16px 0;
  gap: 16px;
  margin-top: auto;
  h1,
  p {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.scroll};
  }
`;

const Link = styled.a`
  display: block;
  border: 1px solid ${(props) => props.theme.colors.input};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadows.link};
  transition: 0.2s ease;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Chat;
