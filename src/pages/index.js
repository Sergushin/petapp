import { Box, Center, Heading, Image, layout, Slide, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";






export default function Home() {


  const [value, setValue] = useState();
    const router=useRouter()
    const handleChange =(e)=>{
        setValue(e)
    }
    if (value>=75) {
        router.push('/home/cats')
    }

  return (  
    <Box maxW={'md'} p={5} mx='auto'>
      <Box >
        <Image shadow={'lg'} borderRadius={'30px'} src={'pet-image.jpg'} alt='petImage' />
      </Box>
      <Box maxW={'323px'} w='100%' mx='auto' >
        <Heading as='h1' size='md' mt={'8'} >Let Find A</Heading>
        <Heading as='h1' size='md'  >Lovely Pet Or A Friend !</Heading>
        <Text mt={'5'} display='block' color={'blackAlpha.400'} as='abbr' fontSize={'small'} fontWeight={'bold'} >now it easier than ever to find a friend or a new replacement for the family</Text>
      </Box>
      <Box maxW={'323px'} w='100%' mx='auto'  mt={'5'} >
        <Slider  onChange={handleChange}  focusThumbOnChange = { false } defaultValue={5}    h={'4rem'} aria-label='slider-ex-1' >
          <SliderTrack  borderRadius={'20px'}  bgColor={'#9A6AFE'} h={'100%'}>
            <SliderFilledTrack bgColor={'#9A6AFE'} />
            <Center h={'100%'} color='white' fontWeight={'bold'}>Swipe To Start </Center>
          </SliderTrack>
          <SliderThumb  h={'80%'} w='20px' />
        </Slider>
      </Box>
    </Box>
  )
}
