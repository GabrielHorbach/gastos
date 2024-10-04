import { Heading } from '@chakra-ui/react';
import { FiSettings, FiUser, FiLogOut } from 'react-icons/fi';

export default function Header() {
  return (
    <header>
      <Heading as="h1" fontSize="4xl">
        finance
      </Heading>

      <nav>
        <ul>
          <li>
            <FiUser />
          </li>
          <li>
            <FiSettings />
          </li>
          <li>
            <FiLogOut />
          </li>
        </ul>
      </nav>
    </header>
  );
}
