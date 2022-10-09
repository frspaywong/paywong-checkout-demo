import {Badge, Box, Flex, Text} from '@chakra-ui/react';
import Navbar from 'components/Navbar';
import {useSearchParams} from 'react-router-dom';
import {TextStyle} from 'theme/types';
import {useGetPaymentQuery} from '../../client';

const Status = () => {
  const [searchParams] = useSearchParams();
  const [{data}] = useGetPaymentQuery({
    variables: {id: searchParams.get('id') || ''},
    pause: !searchParams.get('id'),
  });

  return (
    <Box
      display="flex"
      flexDir="column"
      gap="20"
      h="full"
      bg="#000000"
      border="1px solid black"
      p="10"
    >
      <Navbar />
      <Flex textAlign="center" flexDir="column" align="center" gap="5">
        <Text textStyle={TextStyle.H1} color="white" fontWeight="bold">
          Transaction Status
        </Text>
        <Text textStyle={TextStyle.ParagraphLarge} color="white" maxW="700px">
          Payment ID: {data?.paymentByPk?.id}
        </Text>
      </Flex>
      <Flex textAlign="center" flexDir="column" align="center" gap="5">
        <Box
          display="flex"
          flexDir="column"
          gap="3"
          minW="400px"
          p="6"
          rounded="md"
          shadow="md"
          background="#212935"
        >
          <Flex justify="space-between" align="center">
            <Text textStyle={TextStyle.ParagraphMedium} color="white">
              Status
            </Text>
            <Badge>{data?.paymentByPk?.status}</Badge>
          </Flex>
          <Flex justify="space-between" align="center">
            <Text textStyle={TextStyle.ParagraphMedium} color="white">
              Origin Amount
            </Text>
            <Text textStyle={TextStyle.ParagraphMedium} color="white">
              {data?.paymentByPk?.fiatCurrencyId?.toUpperCase()}{' '}
              {data?.paymentByPk?.fiatPrice?.toFixed(2)}
            </Text>
          </Flex>
          <Flex justify="space-between" align="center">
            <Text textStyle={TextStyle.ParagraphMedium} color="white">
              Paid with
            </Text>
            <Text textStyle={TextStyle.ParagraphMedium} color="white">
              ${data?.paymentByPk?.token?.currency.id.toUpperCase()}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Status;
