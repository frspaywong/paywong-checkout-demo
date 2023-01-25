import {Flex, Text} from '@chakra-ui/react';
import {TextStyle} from 'theme/types';
import {PaywongButton, PaywongEnvironment} from '@paywong/react';

interface ICard {
  type: string;
  plan: string;
  amount: number;
  active?: boolean;
}

const Card = ({type, amount, plan}: ICard) => {
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
      <PaywongButton
        amount={{currencyId: 'usd', subtotal: amount}}
        buttonOptions={{
          containerStyle: {gap: '6px'},
          buttonStyle: {width: '100%', fontWeight: '600'},
        }}
        environment={PaywongEnvironment.STAGING}
      />
    </Flex>
  );
};

export default Card;
