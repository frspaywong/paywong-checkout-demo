import {Box, Text} from '@chakra-ui/react';
import {TextStyle} from 'theme/types';

const Home = () => {
  return (
    <Box>
      <Text textStyle={TextStyle.H3} fontWeight="semibold">
        Home Page
      </Text>
    </Box>
  );
};

export default Home;
