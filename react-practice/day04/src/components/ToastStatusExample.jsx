
import React from 'react'
import { 
  useToast,
  Button,
  WrapItem,
  Wrap
} from '@chakra-ui/react';

export default function ToastStatusExample() {
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                position: 'top',
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}