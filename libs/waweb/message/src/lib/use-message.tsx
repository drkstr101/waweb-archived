import { useContext } from 'react';
import { MessageContext, MessageContextProps } from './message-context';

export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error('useMessage must be used within a MessageContext.Provider');
  }

  return context as MessageContextProps;
};
