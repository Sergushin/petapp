import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Heading, Image, Spinner, Stack, Icon, useBoolean } from "@chakra-ui/react";
import Layout from "@/components/Layout";

const Categories = ({ users }) => {
  const router = useRouter();
  const category = router.query;
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleClick = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };


  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <Layout >

      {loading ? (
        <Center pos={'fixed'} top='50%' zIndex='100'>
          <Spinner size={"xl"} />
        </Center>
      ) : (






        <Box maxW={'100%'} mt={'25%'}>
          {users.map((user) => {
            return (
              <Card my={'20px'} maxW='sm'

                borderRadius={'30px'}
                shadow='xl'
                key={user.id}>
                <CardBody>
                  <Image
                    mb={0}
                    shadow={'xl'}
                    src='https://cdn.shopify.com/s/files/1/0269/7186/5122/articles/amber-kipp-75715CVEJhI-unsplash.jpg?v=1580846282'
                    alt='Green double couch with wooden legs'
                    borderRadius='30px'
                  />
                  <Button

                    onClick={() => handleClick(user)}
                    bgColor={selectedUsers.find(i=>i.id==user.id)?'#7542DF': 'transparent'}
                    backdropFilter='auto'
                    backdropBlur='10px'
                    backdropBrightness={'130%'}
                    w={'2rem'}
                    p={2}
                    borderRadius={'3xl'}
                    pos={'absolute'}
                    top='10'
                    right={10}
                    _hover={{ bgColor: '#9A6AF9' }}
                  >
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                      <path fill="#fff" fillRule="evenodd" d="M2 3.25A2.25 2.25 0 014.25 1h7.5A2.25 2.25 0 0114 3.25v10.83a1 1 0 01-1.478.878L8.12 12.564a.25.25 0 00-.238 0l-4.403 2.394A1 1 0 012 14.08V3.25zM5.75 6a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z" clipRule="evenodd" />
                    </svg>
                  </Button>
                  

                </CardBody>
                <CardFooter alignItems={'center'} px={'8'} justifyContent={'space-between'} >
                  <Stack spacing='3'>
                    <Heading size='md'>{user.name}</Heading>
                    <Heading size='xs' color={'blackAlpha.500'}>{user.owner}</Heading>
                  </Stack>
                  <ButtonGroup spacing='2'>
                    <Button onClick={() => push(`${category}/${user.id}`)} bgColor='transparent'>
                      <Icon fill="#A0A0A0" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.277,8.858C2.606,14.138,9.863,21.4,15.142,22.723a8.938,8.938,0,0,0,2.18.274,8.54,8.54,0,0,0,4.006-1,3.11,3.11,0,0,0,.764-4.951h0L20.006,14.96a3.111,3.111,0,0,0-3.444-.651,4.859,4.859,0,0,0-1.471.987c-.178.177-.506.205-.977.077A9.981,9.981,0,0,1,8.626,9.886c-.126-.471-.1-.8.078-.977a4.864,4.864,0,0,0,.988-1.473,3.112,3.112,0,0,0-.651-3.442L6.955,1.909A3.065,3.065,0,0,0,4.3,1.035,3.1,3.1,0,0,0,2,2.672,8.58,8.58,0,0,0,1.277,8.858ZM3.773,3.6A1.115,1.115,0,0,1,4.6,3.013,1.044,1.044,0,0,1,4.767,3a1.088,1.088,0,0,1,.774.323L7.626,5.408a1.1,1.1,0,0,1,.239,1.213A2.9,2.9,0,0,1,7.29,7.5,2.817,2.817,0,0,0,6.7,10.4c.722,2.7,4.205,6.179,6.9,6.9a2.821,2.821,0,0,0,2.907-.6,2.906,2.906,0,0,1,.874-.576,1.1,1.1,0,0,1,1.214.239l2.085,2.085a1.089,1.089,0,0,1,.31.942,1.114,1.114,0,0,1-.591.826,6.517,6.517,0,0,1-4.766.556C11.089,19.641,4.36,12.912,3.216,8.37A6.53,6.53,0,0,1,3.773,3.6Z" />
                      </Icon>
                    </Button>
                    <Button onClick={() => push(`${category}/${user.id}`)} bgColor='transparent'>
                      <Icon width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Contact" transform="translate(-288.000000, 0.000000)" fillRule="nonzero">
                            <g id="message_1_line" transform="translate(288.000000, 0.000000)">
                              <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero">

                              </path>
                              <path d="M19,3 C20.597725,3 21.903664,4.24892392 21.9949075,5.82372764 L22,6 L22,16 C22,17.597725 20.7511226,18.903664 19.1762773,18.9949075 L19,19 L15.3028,19 L12.6934,20.7396 C12.31549,20.99151 11.834629,21.016701 11.4361288,20.815173 L11.3066,20.7396 L8.69722,19 L5,19 C3.40232321,19 2.09633941,17.7511226 2.00509271,16.1762773 L2,16 L2,6 C2,4.40232321 3.24892392,3.09633941 4.82372764,3.00509271 L5,3 L19,3 Z M19,5 L5,5 C4.48716857,5 4.06449347,5.38604429 4.0067278,5.88337975 L4,6 L4,16 C4,16.51285 4.38604429,16.9355092 4.88337975,16.9932725 L5,17 L8.69722,17 C9.03566286,17 9.36761837,17.0858857 9.6624435,17.248337 L9.80662,17.3359 L12,18.7981 L14.1934,17.3359 C14.4749714,17.1481857 14.7987878,17.0354837 15.1342437,17.007114 L15.3028,17 L19,17 C19.51285,17 19.9355092,16.613973 19.9932725,16.1166239 L20,16 L20,6 C20,5.48716857 19.613973,5.06449347 19.1166239,5.0067278 L19,5 Z M8.5,10 C9.32843,10 10,10.6716 10,11.5 C10,12.3284 9.32843,13 8.5,13 C7.67157,13 7,12.3284 7,11.5 C7,10.6716 7.67157,10 8.5,10 Z M15.5,10 C16.3284,10 17,10.6716 17,11.5 C17,12.3284 16.3284,13 15.5,13 C14.6716,13 14,12.3284 14,11.5 C14,10.6716 14.6716,10 15.5,10 Z" fill="#A0A0A0">

                              </path>
                            </g>
                          </g>
                        </g>
                      </Icon>
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>




            );
          })}
        </Box>
      )}
    </Layout>
  );
};

export default Categories;
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const res = await fetch(`http://localhost:4000/pets?type=${params.category}`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/pets`);
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
