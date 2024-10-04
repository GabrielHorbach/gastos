import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      padding: 4,
      outline: 'none',
    },
  },
  sizes: {
    md: {
      field: {
        w: '100%',
      },
    },
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'gray.50',
        bg: 'transparent',
        color: 'white',
        _focus: {
          borderColor: 'white',
          boxShadow: 'none',
        },
        _placeholder: { color: 'gray.50' },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});

export default Input;
