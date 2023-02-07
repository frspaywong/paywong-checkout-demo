// @ts-nocheck
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useToast,
} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Web3 from 'web3';
import {USDPFaucetABI} from '../../abi/USDPFaucet';

const GetTokens = () => {
  const [contract, setContract] = useState<any>(null);
  const [receiveLoading, setReceiveLoading] = useState(false);
  const [addTokenLoading, setAddTokenLoading] = useState(false);
  const [addNetworkLoading, setAddNetworkLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlockchainData = async () => {
      const contractAddress = '0x0b0b14515849086235289fb2A614408579477A51';
      const abi = USDPFaucetABI;

      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        setContract(new web3.eth.Contract(abi, contractAddress));

        try {
          await window.ethereum.enable();
        } catch (error) {
          console.error('User denied account access');
        }
      } else {
        console.error('No Ethereum provider detected');
        toast({
          position: 'top',
          description: 'No Ethereum provider detected',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };
    loadBlockchainData();
  }, []);

  const addPolygonMumbai = async () => {
    setAddNetworkLoading(true);
    try {
      const ethereum = window.ethereum;
      if (!ethereum) {
        throw new Error('MetaMask is not installed');
      }
      await ethereum.enable();
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x13881`,
            chainName: 'Mumbai',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18,
            },
            rpcUrls: [
              'https://polygon-mumbai.g.alchemy.com/v2/AaRgjPj39mfIhCNti4074zMRgkRAfEOS',
            ],
            blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
          },
        ],
      });
      toast({
        position: 'top',
        description:
          'Polygon Mumbai network added to your network successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      setAddNetworkLoading(false);
      console.error(error);
    } finally {
      setAddNetworkLoading(false);
    }
  };

  const receiveUSDP = async () => {
    setReceiveLoading(true);
    if (contract) {
      contract.methods
        .send()
        .send({from: window.ethereum.selectedAddress})
        .then(receipt => {
          console.log('Transaction receipt: ', receipt);
          toast({
            position: 'top',
            description: "We've sent some $USDP to you",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          setReceiveLoading(false);
        })
        .catch(error => {
          setReceiveLoading(false);
          console.error('Error sending transaction: ', error);
          toast({
            position: 'top',
            title: 'Error sending transaction: ',
            description: error,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        });
    }
  };

  async function addTokenFunction() {
    setAddTokenLoading(true);
    const tokenAddress = '0xe48D8dBFdA863d88926B837938A8f30CA62dF568';
    const tokenSymbol = 'USDP';
    const tokenDecimals = 18;
    const tokenImage = 'https://files.paywong.com/currencies/pwt.png';
    const ethereum = window.ethereum;

    try {
      const wasAdded = await ethereum?.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
        setAddTokenLoading(false);
        toast({
          position: 'top',
          description: '$USDP has been added to your MetaMask',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        setAddTokenLoading(false);
        console.log('$USDP has not been added');
        toast({
          position: 'top',
          description: '$USDP has not been added',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      setAddTokenLoading(false);
      console.log(error);
      toast({
        position: 'top',
        description: '$USDP has not been added',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Modal isOpen={true} onClose={() => navigate('/')} isCentered size="lg">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent rounded="lg" width="full" bg={'#202936'} color="#ffff">
        <ModalCloseButton />
        <ModalHeader>Getting Paywong's Test Token ($USDP)</ModalHeader>
        <ModalBody>
          <Stack gap={5}>
            <Stack gap={2}>
              <Heading size="sm">
                1. Add Polygon Mumbai Network to MetaMask (Optional)
              </Heading>
              <Button
                isLoading={addNetworkLoading}
                onClick={() => addPolygonMumbai()}
                w="fit-content"
                size="md"
                fontSize="15px"
                rounded="lg"
                width="full"
              >
                Add Polygon Mumbai
              </Button>
            </Stack>
            <Stack gap={2}>
              <Heading size="sm">
                2. Get some $MATIC for gas fees (Optional)
              </Heading>
              <Button
                onClick={() =>
                  window.open('https://faucet.polygon.technology/')
                }
                w="fit-content"
                size="md"
                fontSize="15px"
                rounded="lg"
                width="full"
              >
                Polygon Faucet
              </Button>
            </Stack>

            <Stack gap={2}>
              <Heading size="sm">3. Add $USDP token to your MetaMask</Heading>
              <Button
                isDisabled={!contract}
                isLoading={addTokenLoading}
                onClick={() => addTokenFunction()}
                w="fit-content"
                size="md"
                fontSize="15px"
                rounded="lg"
                width="full"
              >
                Add $USDP
              </Button>
            </Stack>
            <Stack gap={2}>
              <Heading size="sm">4. Receive $USDP to your wallet</Heading>
              <Button
                isDisabled={!contract}
                isLoading={receiveLoading}
                onClick={receiveUSDP}
                w="fit-content"
                size="md"
                fontSize="15px"
                rounded="lg"
                width="full"
              >
                Receive $USDP
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            w="full"
            variant="ghost"
            colorScheme="white"
            onClick={() => navigate('/')}
            _hover={{background: '#171E27'}}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GetTokens;
