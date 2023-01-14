import { Box, Center,  HStack } from "@chakra-ui/react";



const navItem = [
    {
        name: 'Home',
        link: '/home',
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

const Footer = () => {
    return (
        <Box pos={'fixed'} py={5} maxW={'425px'} w={'100%'} border='1px' bottom={0}>
            <Center>
                
                <HStack spacing='3rem'>
                    {
                        navItem.map(
                            (item) =>
                            
                                <Box key={item.name}>{item.name}</Box>
                        )
                    }
                </HStack>
            </Center>

        </Box>
    );
}

export default Footer;