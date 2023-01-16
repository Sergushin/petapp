import { Box, Center, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Footer = () => {
    const { asPath, push, query } = useRouter();
    let { category } = query;
    if (category == undefined) {
        category = "cats";
    }
    const handleClick = () => {
        push(item.link, undefined, { shallow: true });
    }

    const navItem = [
        {
            name: 'Home',
            link: `/home/${category}`,
        },
        {
            name: 'Favotite',
            link: '/favorite',
        },
        {
            name: 'Pets',
            link: '/pets',
        },
        {
            name: 'Me',
            link: '/user',

        },

    ]


    return (
        <Box bgColor={'white'} pos={'fixed'} py={5} maxW={'425px'} w={'100%'}  bottom={0}>
            <Center>

                <HStack spacing='3rem'>
                    {
                        navItem.map(
                            (item) =>

                                <Box
                                    onClick={handleClick}
                                    
                                    key={item.name}>{item.name}</Box>
                        )
                    }
                </HStack>
            </Center>

        </Box>
    );
}

export default Footer;