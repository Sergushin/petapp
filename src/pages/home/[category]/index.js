import { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, ButtonGroup, Card, CardBody, CardFooter, Heading, Stack, IconButton } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { AddIcon, ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { motion } from "framer-motion";


const Categories = ({ users }) => {

  const router = useRouter();
  const { category } = router.query;

  const [toggle, setToggle] = useState(false)

  const handleClick = (user) => {
    setToggle(!toggle)
    if (favs.find(i => i.id === user.id)) {
      function deleteFavorite(data) {
        const response = fetch(`/api/favorites/${data}`, {
          method: 'DELETE'
        });
      }
      deleteFavorite(user.id)

    } else {

      fetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())

    }


  }




  // if (selectedUsers.includes(user)) {
  //   setSelectedUsers(selectedUsers.filter((u) => u !== user));
  // } else {
  //   setSelectedUsers([...selectedUsers, user]);
  // } 

  const [favs, setFavs] = useState([])
  const fetchFavs = async () => {
    const response =await fetch(`https://benjamin-petapp.vercel.app/api/favorites`)
    const data =await response.json()
    setFavs(data)
  }
  

  const linkVar = {
    hidden: { rotate: 0 },
    enter: { rotate: 45 },
  }



  return (
    <Layout >
      <Box maxW={'100%'} py={'15%'}>
        {users.map((user) => {
          return (
            <Card my={'20px'} maxW='sm'
              borderRadius={'30px'}
              shadow='xl'
              key={user.id}>
              <CardBody>
                <Link
                  href={`${category}/${user.id}`}
                  passHref
                >
                  <Image
                    style={{
                      borderRadius: '30px'
                    }}
                    priority
                    src='/cat.jpeg'
                    width={700}
                    height='500'
                    alt="Cat"
                  />
                </Link>
                <IconButton
                  as={motion.div}
                  icon={<AddIcon />}
                  variants={linkVar} // Pass the variant object into Framer Motion 
                  initial="hidden" // Set the initial state to variants.hidden
                  animate={favs.find(i => i.id == user.id) ? 'enter' : '#A7A7A7'}// Animated state to variants.enter
                  onClick={() => {handleClick(user);fetchFavs()}}
                  bgColor={favs.find(i => i.id === user.id) ? '#9A6AF9' : 'transparent'}
                  backdropFilter='auto'
                  backdropBlur='10px'
                  backdropBrightness={'150%'}
                  w={'2rem'}
                  p={2}
                  borderRadius={'3xl'}
                  pos={'absolute'}
                  top='10'
                  color={'white'}
                  right={10}
                  _hover={{ bgColor: 'purple.500', }}
                  _active={{ bgColor: 'purple.700' }}
                >
                  <Image src='/Icons/bookmark.svg' priority width={32} height={32} alt='BookMark' />
                </IconButton>
              </CardBody>
              <CardFooter alignItems={'center'} px={'8'} justifyContent={'space-between'} >
                <Stack spacing='3'>
                  <Link
                    href={`${category}/${user.id}`}
                    passHref
                  >
                    <Heading size='md'>{user.name}</Heading>
                    <Heading size='xs' color={'blackAlpha.500'}>{user.owner}</Heading>
                  </Link>
                </Stack>
                <ButtonGroup spacing='2'>
                  <IconButton
                    w={'100%'}
                    icon={<PhoneIcon />}
                    variant='outline'
                    transition="all 0.4s ease"
                    _hover={{
                      bgColor: '#9A6AF9',
                      color: 'white'
                    }}
                  />
                  <IconButton
                    variant={'outline'}
                    icon={<ChatIcon />}
                    w={'100%'}
                    _hover={{
                      bgColor: '#9A6AF9',
                      color: 'white'
                    }}
                  />
                </ButtonGroup>
              </CardFooter>
            </Card>




          );
        })}
      </Box>

    </Layout>
  )
}

export default Categories;
export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://benjamin-petapp.vercel.app/api/pets`);
  const users = await res.json()
  return {
    props: {
      users,
    },
  };
};
// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:4000/pets`);
//   const users = await res.json();
//   const paths = users.map((user) => {
//     return {
//       params: {
//         category: `${user.type}`,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };
