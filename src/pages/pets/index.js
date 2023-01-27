import Layout from "@/components/Layout";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Heading, IconButton, useToast } from "@chakra-ui/react";

const Pets = () => {
    const toast = useToast()
    return (

        <Box maxW={'100%'} py={'15%'}>
            <Flex px={10} py={2} alignItems={'center'} gap={3}>
                <IconButton
                    onClick={() =>
                        toast({
                            title: 'You are not registered :( ',
                            description: "Let's register first",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })}
                    icon={<AddIcon />}
                    borderRadius='50%'

                >

                </IconButton>
                <Heading fontWeight={'medium'} fontSize='md'>
                    Add New Pet
                </Heading>
            </Flex>
            <Divider />
        </Box>

    );
}

export default Pets;