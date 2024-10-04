import {
  Center,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Box,
} from '@chakra-ui/react';
import { useAuth } from 'context/AuthContext';
import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const clearErrors = () => {
    setHasEmailError(false);
    setHasPasswordError(false);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    clearErrors();

    const data = new FormData(event.target as HTMLFormElement);
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (!email) setHasEmailError(true);
    if (!password) setHasPasswordError(true);
    if (!email || !password) return;

    registerUser({ name: email });
    navigate('/');
  };

  return (
    <Flex w="100%" h="100vh" flexDir={{ md: 'row', sm: 'column' }}>
      <Center w="40%">
        <Heading as="h1" fontSize="4xl">
          finance
        </Heading>
      </Center>
      <Center w="60%" bg="gray.900" flexDirection="column">
        <Box as="form" onSubmit={handleSubmit}>
          <Heading color="white" mb={10}>
            Log in to your account
          </Heading>

          <FormControl isInvalid={hasEmailError} mb={3}>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              autoComplete="off"
            />
            {hasEmailError && (
              <FormErrorMessage>E-mail obrigatório</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={hasPasswordError} mb={3}>
            <Input type="password" placeholder="Senha" name="password" />
            {hasPasswordError && (
              <FormErrorMessage>Senha obrigatória</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit" w="100%">
            Entrar
          </Button>
        </Box>
      </Center>
    </Flex>
  );
}
