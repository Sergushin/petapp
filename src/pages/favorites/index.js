import Layout from "@/components/Layout";
import { Image, Heading, Button, Box, Flex, Divider, ListItem, List, HStack } from "@chakra-ui/react";



const Favorite = ({ favorites }) => {
    
    return (
        <Layout>
            <Box mt={'20'}>
                <List spacing={3} >
                    {
                        favorites.map(
                            (item) =>
        
                                    <ListItem maxW={'425px'} w={'100%'} px={'5px'} key={item.name}>
                                        <Flex alignItems={'center'} justifyContent='space-between' w={'sm'}>
                                            <HStack gap='5px'>
                                                <Image alt="Logo" borderRadius={'50%'} w='4rem' h={'4rem'} src="https://cdn.shopify.com/s/files/1/0269/7186/5122/articles/amber-kipp-75715CVEJhI-unsplash.jpg?v=1580846282" />
                                                <Heading>{item.name}</Heading>
                                            </HStack>
                                            <Box>
                                                <Button
                                                    bgColor={'#9A6AF9'}
                                                    w={'2rem'}
                                                    p={2}
                                                    borderRadius={'3xl'}

                                                >
                                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                                        <path fill="#fff" fillRule="evenodd" d="M2 3.25A2.25 2.25 0 014.25 1h7.5A2.25 2.25 0 0114 3.25v10.83a1 1 0 01-1.478.878L8.12 12.564a.25.25 0 00-.238 0l-4.403 2.394A1 1 0 012 14.08V3.25zM5.75 6a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z" clipRule="evenodd" />
                                                    </svg>
                                                </Button>
                                            </Box>

                                        </Flex>
                                        <Divider />
                                    </ListItem>
                                )
                        
                    }
                </List>
            </Box>


        </Layout>
    );
}

export default Favorite;

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/favorites')
    const favorites = await res.json()
    return {
        props: {
            favorites
        },
    }
}
