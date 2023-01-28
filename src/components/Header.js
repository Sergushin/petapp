import { Box, Button, Center, Collapse, Divider, Fade, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, Tab, TabList, Tabs, Text, useDisclosure, useToast } from "@chakra-ui/react";
import Image from "next/image";
import cat from "../../public/Icons/cat.svg";
import dog from "../../public/Icons/dog.svg";
import bird from "../../public/Icons/bird.svg";
import { useRouter } from "next/router";




const tabs = [
    {
        name: 'Cats',
        link: '/cats',
        icon: <Image width={'32'} style={{ marginRight: '5px' }} src={cat} alt='Cat' />

    },
    {
        name: 'Dogs',
        link: '/dogs',
        icon: <Image width={'32'} style={{ marginRight: '5px' }} src={dog} alt='dog' />
    },
    {
        name: 'Birds',
        link: '/birds',
        icon: <Image width={'32'} style={{ marginRight: '5px' }} src={bird} alt='bird' />
    }
]


const Header = () => {
    
    const { push } = useRouter()
    const { isOpen, onToggle } = useDisclosure()
    const toast = useToast()

    return (
        <Box bgColor={'white'} pos={'fixed'} maxW={'425px'} w={'100%'} p={3} zIndex={10}>
            <Flex px={5} alignItems={'center'} justifyContent={'space-between'} >
                <IconButton
                    icon={<Image src={'/Icons/search.svg'} width='32' height={'32'} alt='bell' />}
                    fontSize={'xl'}
                    p={1.5}
                    fontWeight='hairline'
                    borderRadius={'50%'}
                    bgColor="transparent"
                    onClick={() => onToggle()}
                ></IconButton>
                <Center>
                    <Text as={'h4'} fontSize={'lg'} >
                        <Image src={'/Icons/logo.svg'} priority width={0} height={0} style={{ width: 'auto', height: 'auto' }} alt='Logo' />
                    </Text>
                </Center>
                <IconButton
                    onClick={() =>
                        toast({
                            title: 'You are not registered :( ',
                            description: "Let's register first",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })}
                    icon={<Image src={'/Icons/bell.svg'} width='32' height={'32'} alt='bell' />}
                    fontSize={'xl'}
                    fontWeight='hairline'
                    borderRadius={'50%'}
                    bgColor="transparent"
                ></IconButton>
            </Flex>




            <Divider as={'hr'} my={isOpen ? '7' : '0'} transition='all 0.6s ease' />








            <Collapse in={isOpen}>
                <Flex p={5} justifyContent={'space-between'} alignItems={'center'}>
                    <InputGroup mt={2} >
                        <InputLeftElement

                            ml={'3.5'}
                            h={'100%'}
                            pointerEvents='none'
                            // eslint-disable-next-line react/no-children-prop
                            children={
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="style=stroke">
                                        <g id="search-broken">
                                            <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M17.9697 17.9697C18.2626 17.6768 18.7374 17.6768 19.0303 17.9697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.9697 19.0303C17.6768 18.7374 17.6768 18.2626 17.9697 17.9697Z" fill="#A0A0A0" />
                                            <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M11.0529 18.6058C15.2243 18.6058 18.6058 15.2243 18.6058 11.0529C18.6058 6.88155 15.2243 3.5 11.0529 3.5C6.88155 3.5 3.5 6.88155 3.5 11.0529C3.5 15.2243 6.88155 18.6058 11.0529 18.6058ZM11.0529 20.1058C16.0527 20.1058 20.1058 16.0527 20.1058 11.0529C20.1058 6.05312 16.0527 2 11.0529 2C6.05312 2 2 6.05312 2 11.0529C2 16.0527 6.05312 20.1058 11.0529 20.1058Z" fill="#A0A0A0" />
                                        </g>
                                    </g>
                                </svg>
                            }

                        />
                        <Input h={'3.5rem'} focusBorderColor="#9A6AFE" border={0} bgColor={'#F4F4F4'} pl={'12'} borderRadius={'30px'} mx={'auto'} w={'99%'} outline={'none'} type='tel' placeholder='Search lovely pet...'
                            _placeholder={{ color: "#A0A0A0" }}
                            fontSize={'xs'} />
                    </InputGroup>

                </Flex>
                <Box p={5} >
                    <Heading my={3} fontSize={'xl'}>Category</Heading>
                    <Tabs p={1} bgColor={'#F4F4F4'} borderRadius={'30px'} variant='soft-rounded' >
                        <TabList>

                            {tabs.map((item) => (

                                <Tab
                                    w={'100%'}
                                    _selected={{ color: 'white', bg: '#9A6AFE', shadow: 'lg' }}
                                    key={item.name}
                                    transition="all 0.3s ease"
                                    onClick={() => push(`/home${item.link}`)}
                                >
                                    {item.icon} {item.name}
                                </Tab>
                            ))}

                        </TabList>
                    </Tabs>
                </Box>

            </Collapse>


        </Box>
    );
}

export default Header;