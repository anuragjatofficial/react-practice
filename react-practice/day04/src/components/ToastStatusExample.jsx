import React from 'react';
import {
  useToast,
  Button,
  WrapItem,
  Wrap,
  CircularProgress,
} from '@chakra-ui/react';

export default function ToastStatusExample() {
  const toast = useToast();
  const statuses = ['success', 'error', 'warning', 'info'];

  return (
    <>
      <CircularProgress isIndeterminate color="green.300" />
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  position: 'top',
                  // color:'white',
                  variant: 'subtle',
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
