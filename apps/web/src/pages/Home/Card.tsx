import {Flex, Text} from '@chakra-ui/react';
import {TextStyle} from 'theme/types';

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
      <div
        data-paywong-is-fiat="true"
        data-paywong-fiat-price={amount}
        data-paywong-fiat-id="usd"
        data-paywong
        data-paywong-button-style="width: 100%;"
        data-paywong-success-url="https://demo.checkout.paywong.com/status"
        data-paywong-fail-url="https://demo.checkout.paywong.com/status"
      />
    </Flex>
  );
};

export default Card;
