import { FunctionComponent } from 'react';
import Message, { MessageProps } from './message';

export type MessageListProps = {
  messages: MessageProps[];
};

export const MessageList: FunctionComponent<MessageListProps> = ({ messages }) => (
  <div className="app-messages absolute top-6 z-10 flex w-screen flex-col place-items-center justify-center">
    {messages?.map((message, index) => (
      <Message key={index} {...message} />
    ))}
  </div>
);

export default MessageList;
