import { Box, Center, Flex, } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";


const Footer = () => {

    const { asPath, query } = useRouter();
    let { category } = query;
    if (category == undefined) {
        category = "cats";
    }

    const navItem = [
        {
            name: 'Home',
            link: `/home`,
            icon: <Image src={'/Icons/home.svg'} width={'32'} height='32' alt='Icon' />
        },
        {
            name: 'Favorites',
            link: '/favorites',
            icon: <Image src={'/Icons/bookmark.svg'} width={'32'} height='32' alt='Icon' />

        },
        {
            name: 'Pets',
            link: '/pets',
            icon: <Image src={'/Icons/pet.svg'} width={'32'} height='32' alt='Icon' />
        },
        {
            name: 'Me',
            link: '/user',
            icon: <Image src={'/Icons/user.svg'} width={'32'} height='32' alt='Icon' />

        },

    ]





    const linkVar = {
        hidden: { color: '#A7A7A7' },
        enter: { color: '#9A6AF9' },
        exit: { color: '#A7A7A7' },
    }
    const iconVar = {
        hidden: { scale:'0.2' },
        enter: { scale:'1' },
        exit: { scale:'0.2' },
    }


    return (
        <Box bgColor={'white'} pos={'fixed'} py={5} maxW={'425px'} w={'100%'} bottom={0}>
            <Center>

                <Flex alignItems={'center'} justifyContent='space-between' w={'sm'} px={'5'}>


                    {
                        navItem.map(

                            (item) =>

                                <Link
                                    key={item.name}
                                    href={item.link}
                                    shallow
                                    scroll={false}
                                    passHref
                                >
                                    <Flex
                                        as={motion.div}
                                        variants={linkVar} // Pass the variant object into Framer Motion 
                                        initial="hidden" // Set the initial state to variants.hidden
                                        animate={asPath === item.link ? 'enter' : '#A7A7A7'} // Animated state to variants.enter
                                        exit="exit" // Exit state (used later) to variants.exit
                                        alignItems={'center'}
                                        gap='10px'
                                    >

                                        <Box 
                                            as={motion.div}
                                            variants={iconVar} // Pass the variant object into Framer Motion 
                                            initial="hidden" // Set the initial state to variants.hidden
                                            animate={asPath === item.link ? 'enter' : 'hidden'} // Animated state to variants.enter
                                            exit="exit" // Exit state (used later) to variants.exit
                                            transition={'all 0.6s ease'}
                                        >{asPath === item.link ? item.icon : ''}</Box>{item.name}
                                    </Flex>
                                </Link>
                        )
                    }


                </Flex>
            </Center>

        </Box>
    );
}

export default Footer;



