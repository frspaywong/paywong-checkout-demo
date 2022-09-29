import {Button, Flex, Text} from '@chakra-ui/react';
import {TextStyle} from 'theme/types';

interface ICard {
  type: string;
  plan: string;
  amount: number;
  active?: boolean;
}

const Card = ({type, amount, plan, active = false}: ICard) => {
  return (
    <Flex
      flexDir="column"
      rounded="md"
      borderColor="rgba(211,219,226,.15)"
      borderWidth="1px"
      p="5"
      gap="5"
      flexGrow="1"
      bg="#202936"
      maxW={{base: 'column', md: 'column', lg: '350px'}}
    >
      <Text textStyle={TextStyle.H5} color="white" fontWeight="semibold">
        {plan}
      </Text>
      <Flex gap="2" align="flex-end">
        <Text textStyle={TextStyle.H2} color="white" fontWeight="semibold">
          ${amount}
        </Text>
        <Text textStyle={TextStyle.ParagraphLarge} color="white">
          / {type}
        </Text>
      </Flex>
      <Button mt="3" w="full" size="lg" disabled={!active}>
        {active ? 'Checkout Now' : 'Coming Soon'}
      </Button>
    </Flex>
  );
};

export default Card;
