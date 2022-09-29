import {
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
import {useState} from 'react';
import Card from './Card';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
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
            <Tab _selected={{bg: '#4B4EFC', color: '#ffff', rounded: 'md'}}>
              <Text
                textStyle={TextStyle.H6}
                color="white"
                fontWeight="semibold"
              >
                Monthly
              </Text>
            </Tab>
            <Tab _selected={{bg: '#4B4EFC', color: '#ffff', rounded: 'md'}}>
              <Text
                textStyle={TextStyle.H6}
                color="white"
                fontWeight="semibold"
              >
                Anually
              </Text>
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
              <Card type="Lifetime" plan="Bootstrap 🍃" amount={1500} active />
              <Card type="Lifetime" plan="Start Up  🛠️" amount={3000} active />
              <Card type="Lifetime" plan="Scale Up 🚀" amount={5000} active />
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
  );
};

export default Home;
