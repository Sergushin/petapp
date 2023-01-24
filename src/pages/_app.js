import '@/styles/globals.css'
import { Center, ChakraProvider, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '@/components/theme'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


function MyApp({ Component, pageProps }) {


  const [loading, setLoading] = useState(false);
  const { asPath } = useRouter()

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <>
      <Head>
        <title>PetApp</title>
        <meta name="description" content="PetApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraProvider resetCSS  theme={theme}>
        <Header />
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => window.scrollTo(0,0)}
        >
          {loading ?
            (
              <Component {...pageProps} canonical={asPath} key={asPath} />
            )
            :
            (<Center position={'relative'} w={'100%'} h='100vh' bgRepeat={'no-repeat'}><Spinner w={'20vmax'} h='20vmax' mx={'center'} /></Center>)
          }
        </AnimatePresence>
        <Footer />
      </ChakraProvider>


    </>
  )
}

export default MyApp
