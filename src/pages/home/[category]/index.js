import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, ButtonGroup, Card, CardBody, CardFooter, Heading, Stack, IconButton } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ChatIcon, PhoneIcon, StarIcon } from "@chakra-ui/icons";
import Image from "next/image";


const Categories = ({ users }) => {
  const [favs, setFavs] = useState([])
  const router = useRouter();
  const category = router.query.category;
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    const fetchFavs = async () => {
      const resp = await fetch('/api/favorites')
      const data = await resp.json()
      setFavs(data)
    };
    fetchFavs();
  }, [toggle]);


  const handleClick = (user) => {
    setToggle(!toggle)
    if (favs.find(i => i.id === user.id)) {
      function deleteFavorite(data) {
        fetch(`/api/favorites/${data}`, {
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


  return (
    <Layout >

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
                  priority={true}
                  src='/cat.jpeg'
                  width={700}
                  height='500'
                  alt="Cat"
                />
              </Link>
              <IconButton
                icon={<StarIcon />}
                onClick={() => { handleClick(user) }}
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
        )
      })}

    </Layout>
  )
}
export default Categories;

export const getStaticProps = async ({ params }) => {
  const result = await fetch(`https://benjamin-petapp.vercel.app/api/pets?type=${params.category}`);
  const users = await result.json()
  return {
    props: {
      users,
    },
    revalidate: 5
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://benjamin-petapp.vercel.app/api/pets`);
  const users = await res.json();
  const paths = users.map((user) => {
    return {
      params: {
        category: `${user.type}`,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};
