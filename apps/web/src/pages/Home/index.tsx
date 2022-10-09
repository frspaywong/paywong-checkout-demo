import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import {ColorMix, TextStyle} from 'theme/types';
import LogoMark from 'assets/LogoMark.svg';
import WordMark from 'assets/WordMark.svg';
import {useEffect, useState} from 'react';
import Card from './Card';

// @ts-ignore
import Paywong from 'paywong-sdk-react';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const paywong = new Paywong();
    paywong.initialize(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJhcHAiXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoiYXBwIiwieC1oYXN1cmEtYXBwLWlkIjoiZDgzMTNkZGEtODZkZS00YmFlLWIyODAtNGE0MzM0NDQ1MzRiIiwieC1oYXN1cmEtYWNjb3VudC1pZCI6IlR1TnBiMjBXTSIsIngtaGFzdXJhLWFwcC1zYWx0IjoibWt0In0sImlhdCI6MTY2NDc2NjgwNX0.YdaIeGNiO4gHAeWDkVzguAunuiqENavSK0-m4ONHzUg',
      'staging'
    );
  }, [tabIndex]);

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
        <Flex justify="space-between" align="center">
          <Flex gap="4">
            <Flex align="center" gap="4">
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

          <Button>Sign Up</Button>
        </Flex>
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
