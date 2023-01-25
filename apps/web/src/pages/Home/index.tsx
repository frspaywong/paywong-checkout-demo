import {
  Badge,
  Box,
  Flex,
  HStack,
  Tab,
  TabList,
  Tabs,
  Text,
} from '@chakra-ui/react';

import {useState} from 'react';
import {TextStyle} from 'theme/types';
import Card from './Card';

import Navbar from 'components/Navbar';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Box
        display="flex"
        flexDir="column"
        gap="20"
        h={{base: '', md: '', lg: 'full'}}
        bg="#000000"
        border="1px solid black"
        p="10"
      >
        <Navbar />
        <Flex textAlign="center" flexDir="column" align="center" gap="5">
          <Text textStyle={TextStyle.H1} color="white" fontWeight="bold">
            Checkout Demo
          </Text>
          <Text textStyle={TextStyle.ParagraphLarge} color="white" maxW="700px">
            Paywong Checkout is a prebuilt, hosted payment widget optimized for
            conversion. Explore the demo and see how you can securely accept
            crypto payments.
          </Text>
        </Flex>
        <Flex flexDir="column" align="center" gap="20">
          <Tabs
            size="lg"
            isFitted
            variant="unstyled"
            onChange={index => setTabIndex(index)}
          >
            <TabList
              rounded="md"
              borderColor="rgba(211,219,226,.15)"
              borderWidth="1px"
              minW={{base: '420px', md: '750px', lg: '750px'}}
            >
              <Tab _selected={{bg: '#4B4EFC', color: '#ffff', rounded: 'md'}}>
                <Text
                  textStyle={TextStyle.H6}
                  color="white"
                  fontWeight="semibold"
                >
                  Lifetime
                </Text>
              </Tab>
              <Tab
                isDisabled
                _selected={{bg: '#4B4EFC', color: '#ffff', rounded: 'md'}}
              >
                <HStack gap="2" flexDir="column">
                  <Text
                    textStyle={TextStyle.H6}
                    color="white"
                    fontWeight="semibold"
                  >
                    Monthly
                  </Text>
                  <Badge colorScheme="blue">Coming Soon</Badge>
                </HStack>
              </Tab>
              <Tab
                isDisabled
                _selected={{bg: '#4B4EFC', color: '#ffff', rounded: 'md'}}
              >
                <HStack gap="2" flexDir="column">
                  <Text
                    textStyle={TextStyle.H6}
                    color="white"
                    fontWeight="semibold"
                  >
                    Anually
                  </Text>
                  <Badge colorScheme="blue">Coming Soon</Badge>
                </HStack>
              </Tab>
            </TabList>
          </Tabs>
          <Flex
            gap="5"
            justify="center"
            w="100%"
            flexDir={{base: 'column', md: 'column', lg: 'row'}}
          >
            {tabIndex === 0 && (
              <>
                <Card type="Lifetime" plan="Bootstrap 🍃" amount={5} active />
                <Card type="Lifetime" plan="Start Up  🛠️" amount={10} active />
                <Card type="Lifetime" plan="Scale Up 🚀" amount={20} active />
              </>
            )}
            {tabIndex === 1 && (
              <>
                <Card type="Monthly" plan="Bootstrap 🍃" amount={150} />
                <Card type="Monthly" plan="Start Up  🛠️" amount={300} />
                <Card type="Monthly" plan="Scale Up 🚀" amount={500} />
              </>
            )}
            {tabIndex === 2 && (
              <>
                <Card type="Anually" plan="Bootstrap 🍃" amount={150} />
                <Card type="Anually" plan="Start Up  🛠️" amount={300} />
                <Card type="Anually" plan="Scale Up 🚀" amount={500} />
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
