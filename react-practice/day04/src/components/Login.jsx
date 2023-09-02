import React from 'react';
import {
  FormControl,
  useToast,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  CloseButton,
  Button,
  color,
} from '@chakra-ui/react';
export default function Login() {
  const style = {
    display: 'grid',
    margin: 'auto',
    placeItems: 'center',
    gap: '10px',
    width: '30%',
    paddingTop: '30px',
    paddingBottom: '30px',
  };
  const inputStyle = {
    width: '70%',
  };

  const toast = useToast();

  const displayToast = () => toast({});

  return (
    <div>
      <Box
        style={style}
        //   border='2px'
        borderRadius={10}
        backgroundColor="rgba(255, 255, 255, .2)"
      >
        <h1>Login</h1>
        {/* <CloseButton size="md" /> */}
        <Input
          type="text"
          focusBorderColor="#f54768ff"
          placeholder="Email"
          style={inputStyle}
        />
        <Input
          type="text"
          placeholder="Password"
          focusBorderColor="#f54768ff"
          style={inputStyle}
        />
        <Button
          type="submit"
          style={inputStyle}
          backgroundColor="#f54768ff"
          _focus="#f54768ff"
          onClick={displayToast}
        >
          {' '}
          Submit{' '}
        </Button>
      </Box>
    </div>
  );
}
