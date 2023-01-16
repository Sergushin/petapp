import { Box, Container,  } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children,liked }) => {
    
    
    return (
        <Container maxW={'md'} centerContent >
            <Header />
            <Box maxW={'100%'}>
                {children}
            </Box>
            <Footer  />
        </Container>
    );
}

export default Layout;