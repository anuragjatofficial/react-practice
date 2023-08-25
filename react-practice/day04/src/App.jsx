import { Button } from '@chakra-ui/button';
import { Toast } from '@chakra-ui/toast';
import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  ChakraBaseProvider,
  ChakraProvider,
} from '@chakra-ui/react';

import { MyTable } from './components/table';
import { MyTab } from './components/myTab';
import ToastStatusExample from './components/ToastStatusExample';

export default function App() {
  return (
    <ChakraProvider>
      <div style={{ width: '500px', height: '500px' }}>
        <ToastStatusExample />
        <MyTab />
      </div>
      {/* <MyTable /> */}
    </ChakraProvider>
  );
}
