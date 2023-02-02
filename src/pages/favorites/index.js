import Layout from "@/components/Layout";
import { StarIcon } from "@chakra-ui/icons";
import { Heading, Flex, HStack, IconButton, Text, Avatar, Card, CardHeader, CardBody, Stack, StackDivider } from "@chakra-ui/react";
import { useEffect, useState } from "react";




const Favorite = ({ favorites }) => {

    const [toggle, setToggle] = useState(false)
    const [favs, setFavs] = useState([])

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

    useEffect(() => {
        async function getFavs() {
            const actualData = await fetch(
                '/api/favorites'
            ).then(response => response.json())
                .then((data) => {
                    setFavs(data)
                })
        }
        getFavs();
    }, [toggle]);




    return (


        <Layout>
            <Card shadow={'none'} >
                <CardBody >
                    <Stack divider={<StackDivider />} spacing='4'>

                        {favs.length == 0 ? (<CardHeader><Heading>It's empty here :(</Heading><Text>Add Your Favorite Pet On The Home Page</Text></CardHeader>) : (
                            favs.map(
                                (item) =>



                                    <Flex w={'100%'} key={item.name} justifyContent={'space-between'} alignItems='center'>
                                        <HStack>
                                            <Avatar src="/cat.jpeg" />
                                            <Heading size='xs' textTransform='uppercase'>
                                                {item.name}
                                            </Heading>
                                        </HStack>
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
                                    </Flex>


                            ))

                        }
                    </Stack>
                </CardBody>
            </Card>

        </Layout>



    );
}

export default Favorite;

export async function getServerSideProps() {
    const result = await fetch('https://benjamin-petapp.vercel.app/api/favorites')
    const favorites = await result.json()
    return {
        props: {
            favorites
        },
    }

}
