import Layout from "@/components/Layout";
import { StarIcon } from "@chakra-ui/icons";
import { Image, Heading, Box, Flex, Divider, ListItem, List, HStack, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";



const Favorite = ({ favorites }) => {

    const [toggle, setToggle] = useState(false)
    const [favs, setFavs] = useState([])



    useEffect(() => {
        const fetchFavs = async () => {
            const resp = await fetch('/api/favorites')
            const data = await resp.json()
            setFavs(data)
        };
        fetchFavs();
    }, [toggle]);


    const handleClick = (item) => {
        setToggle(!toggle)
        if (favs.find(i => i.id === item.id)) {
            function deleteFavorite(data) {
                fetch(`/api/favorites/${data}`, {
                    method: 'DELETE'
                });
            }
            deleteFavorite(item.id)
            setFavs(favorites)
        }
    }

    return (
        <Layout>
            <Box mt={'20'}>
                <List spacing={3} >
                    {
                        favs.map(
                            (item) =>

                                <ListItem maxW={'425px'} w={'100%'} px={'5px'} key={item.name}>
                                    <Flex alignItems={'center'} justifyContent='space-between' w={'sm'}>
                                        <HStack gap='5px'>
                                            <Image alt="Logo" borderRadius={'50%'} w='4rem' h={'4rem'} src="https://cdn.shopify.com/s/files/1/0269/7186/5122/articles/amber-kipp-75715CVEJhI-unsplash.jpg?v=1580846282" />
                                            <Heading>{item.name}</Heading>
                                        </HStack>
                                        <Box>
                                            <IconButton
                                                icon={<StarIcon />}
                                                onClick={() => { handleClick(item) }}
                                                bgColor={'#9A6AF9'}
                                                w={'2rem'}
                                                p={2}
                                                borderRadius={'3xl'}
                                                color={'white'}
                                                _hover={{ bgColor: 'purple.500', }}
                                                _active={{ bgColor: 'purple.700' }}
                                            >
                                            </IconButton>
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

export async function getServerSideProps({ res }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    const result = await fetch('https://benjamin-petapp.vercel.app/api/favorites')
    const favorites = await result.json()
    return {
        props: {
            favorites
        },
    }

}
