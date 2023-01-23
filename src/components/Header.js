import { Box, Button, Center, Collapse, Divider, Fade, Flex, Heading, IconButton, Input, InputGroup, InputLeftElement, Tab, TabList, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import cat from "../../public/Icons/cat.svg";
import dog from "../../public/Icons/dog.svg";
import bird from "../../public/Icons/bird.svg";
import { useRouter } from "next/router";
import {  SearchIcon } from "@chakra-ui/icons";



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

    return (
        <Box bgColor={'white'} pos={'fixed'} maxW={'425px'} w={'100%'} px={5} zIndex={10}>
            <Flex px={5} alignItems={'center'} justifyContent={'space-between'} >
                <IconButton icon={<SearchIcon fontSize={'md'} fontWeight='hairline' />} onClick={onToggle} float={'right'} borderRadius={'50%'} bgColor="transparent" >
                </IconButton>
                <Center>
                    <Text as={'h4'} fontSize={'lg'} >
                        <Image src={'/Icons/logo.svg'} priority width={0} height={0} style={{ width: 'auto', height: 'auto' }} alt='Logo' />
                    </Text>
                </Center>
                <Box>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z" stroke="#222222" />
                        <path d="M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059" stroke="#222222" strokeLinecap="round" />
                    </svg>
                </Box>
            </Flex>




            <Divider as={'hr'} my={isOpen ? '7' : ''} transition='all 0.6s ease' />








            <Collapse in={isOpen}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
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
                <Box >
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