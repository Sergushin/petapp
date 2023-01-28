import Layout from "@/components/Layout";
import { ChatIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Heading, IconButton, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";

const PetsId = ({ user }) => {
  return (
    <Layout>

      <Box>
        <Box
          p={5}
        >
          <Image
            src='/cat.jpeg'
            alt="Cat"
            width={700}
            height={500}
            style={{
              borderRadius: '30px',
              boxShadow: 'rgba(0, 0, 0, 0.6) 0px 0px 9px 0px'
            }}
          />
        </Box>
      </Box>
      <Flex my={'10px'} gap='5px' justifyContent={'space-between'}>
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
      </Flex>
      <Divider />

      <List my={5} spacing={0}>
        <ListItem display={'flex'} alignItems='center' gap={5}><Text color={'blackAlpha.500'} fontWeight='medium' fontSize={'lg'}>Name:</Text><Heading as={'h2'} fontWeight='mdeium' fontSize={'xl'}>{user.name}</Heading></ListItem>
        <ListItem display={'flex'} alignItems='center' gap={4}><Text color={'blackAlpha.500'} fontWeight='medium' fontSize={'lg'}>Owner:</Text><Heading as={'h2'} fontWeight='mdeium' fontSize={'xl'}>{user.owner}</Heading></ListItem>
        <ListItem display={'flex'} alignItems='center' gap={5}><Text color={'blackAlpha.500'} fontWeight='medium' fontSize={'lg'}>Breed:</Text><Heading as={'h2'} fontWeight='mdeium' fontSize={'xl'}>{user.type}</Heading></ListItem>
      </List>
      <Divider />
      <Heading>About:</Heading>
      <Text>{user.about}</Text>





    </Layout>
  );
};

export default PetsId;
export const getStaticProps = async (ctx) => {

  const { params } = ctx
  const result = await fetch(`https://benjamin-petapp.vercel.app/api/pets/${params.id}`);
  const user = await result.json();

  return {
    props: {
      user,
    },
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
