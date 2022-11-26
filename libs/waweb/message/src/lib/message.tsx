import { AlertDialog, DialogContainer } from '@adobe/react-spectrum';
import { FunctionComponent, useState } from 'react';

export type MessageType = 'confirmation' | 'information' | 'destructive' | 'error' | 'warning';

export type MessageProps = {
  type: MessageType;
  message: string;
  title?: string;
};

const Message: FunctionComponent<MessageProps> = ({ message, title, type }) => {
  const [isOpen, setOpen] = useState(true);

  return (
    <DialogContainer onDismiss={() => setOpen(false)}>
      {isOpen && (
        <AlertDialog title={title ?? 'Info'} variant={type} primaryActionLabel="Ok">
          {message}
        </AlertDialog>
      )}
    </DialogContainer>
  );
};

export default Message;
