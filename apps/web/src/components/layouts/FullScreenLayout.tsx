import {Flex} from '@chakra-ui/react';
import {Outlet} from 'react-router-dom';
import {ColorMix} from 'theme/types';

const FullScreenLayout = () => {
  return (
    <Flex h="100vh" flex="1" flexDirection="column" bg={ColorMix.bgContent}>
      <Outlet />
    </Flex>
  );
};

export default FullScreenLayout;
