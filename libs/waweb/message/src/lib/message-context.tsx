import { createContext, ReactNode, useState } from 'react';
import { MessageProps } from './message';

export type MessageContextProps = {
  messages: MessageProps[];
  handleMessage: (props: MessageProps) => void;
};

export const MessageContext = createContext<Partial<MessageContextProps>>({});

export interface MessageProviderProps {
  children: ReactNode | ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const handleMessage = (message: MessageProps) => {
    setMessages((prevMessages) => prevMessages.concat([message]));
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 5000);
  };

  return (
    <MessageContext.Provider value={{ messages, handleMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
