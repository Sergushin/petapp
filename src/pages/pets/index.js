import Layout from "@/components/Layout";
import { AddIcon } from "@chakra-ui/icons";
import {  Divider, Flex, Heading, IconButton, useToast } from "@chakra-ui/react";

const Pets = () => {
    const toast = useToast()
    return (

        <Layout>
            <Flex px={10} py={2} alignItems={'center'} gap={3} onClick={() =>
                toast({
                    title: 'You are not registered :( ',
                    description: "Let's register first",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })}>
                <IconButton

                    icon={<AddIcon />}
                    borderRadius='50%'

                >

                </IconButton>
                <Heading fontWeight={'medium'} fontSize='md'>
                    Add New Pet
                </Heading>
            </Flex>
            <Divider />
        </Layout>

    );
}

export default Pets;