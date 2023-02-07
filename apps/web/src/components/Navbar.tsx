import {Flex, Button, Text, Image} from '@chakra-ui/react';
import {TextStyle} from 'theme/types';
import LogoMark from 'assets/LogoMark.svg';
import WordMark from 'assets/WordMark.svg';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex justify="space-between" align="center">
      <Flex gap="4">
        <Flex
          cursor="pointer"
          align="center"
          gap="4"
          onClick={() => window.open('https://paywong.com')}
        >
          <Image src={LogoMark} w="32px" />
          <Image src={WordMark} w="123px" />
        </Flex>
        <Text
          h="fit-content"
          p="1"
          textStyle={TextStyle.ParagraphXSmall}
          color="#ffff"
          bg="#5B69FF"
          rounded="md"
        >
          Demo
        </Text>
      </Flex>
      <Flex gap={4}>
        <Button
          borderColor="white"
          color="white"
          _hover={{
            color: '#4B4EFC',
            bg: 'white',
          }}
          variant="outline"
          onClick={() => navigate('/tokens')}
        >
          Get Test Tokens
        </Button>

        <Button
          onClick={() => window.open('https://waitlist.paywong.com/waitlist')}
        >
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
