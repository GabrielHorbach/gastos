import { Box, chakra, Heading, useTheme } from '@chakra-ui/react';
import { useAuth } from 'context/AuthContext';
import { FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SFiSettings = chakra(FiSettings);
const SFiUser = chakra(FiUser);
const SFiLogOut = chakra(FiLogOut);

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { clearUser } = useAuth();

  return (
    <Box
      as="header"
      bg={theme.colors.gray[900]}
      px={4}
      py={3}
      color="white"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
    >
      <Heading as="h1" fontSize="4xl">
        finance
      </Heading>

      <Box as="nav" display="flex" alignItems="center">
        <Box as="ul" display="flex" flexDir="row" columnGap={4}>
          <Box as="li" listStyleType="none">
            <SFiUser
              size={25}
              onClick={() => navigate('/profile')}
              _hover={{
                cursor: 'pointer',
                opacity: 0.7,
              }}
            />
          </Box>
          <Box as="li" listStyleType="none">
            <SFiSettings
              size={25}
              onClick={() => navigate('/settings')}
              _hover={{
                cursor: 'pointer',
                opacity: 0.7,
              }}
            />
          </Box>
          <Box as="li" listStyleType="none">
            <SFiLogOut
              size={25}
              onClick={clearUser}
              _hover={{
                cursor: 'pointer',
                opacity: 0.7,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
