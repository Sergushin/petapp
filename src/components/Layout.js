import { Box, Container, } from "@chakra-ui/react";
import { motion } from "framer-motion";


const Layout = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    }

    return (
        <Container as={motion.div}
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }}
            maxW={'md'}>

            <Box maxW={'100%'} py={'18%'}>
                {children}
            </Box>

        </Container>
    );
}

export default Layout;