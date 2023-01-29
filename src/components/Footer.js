import { Box, Center, Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
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
            link: `/home/${category}`,
            icon: <Icon viewBox="0 0 45.973 45.972" w={'32px'} h={'32px'} >
                <g>
                    <g>
                        <path d="M44.752,20.914L25.935,2.094c-0.781-0.781-1.842-1.22-2.946-1.22c-1.105,0-2.166,0.439-2.947,1.22L1.221,20.914
			c-1.191,1.191-1.548,2.968-0.903,4.525c0.646,1.557,2.165,2.557,3.85,2.557h2.404v13.461c0,2.013,1.607,3.642,3.621,3.642h3.203
			V32.93c0-0.927,0.766-1.651,1.692-1.651h6.223c0.926,0,1.673,0.725,1.673,1.651v12.168h12.799c2.013,0,3.612-1.629,3.612-3.642
			V27.996h2.411c1.685,0,3.204-1,3.85-2.557C46.3,23.882,45.944,22.106,44.752,20.914z"/>
                    </g>
                </g>
            </Icon>
        },
        {
            name: 'Favorites',
            link: '/favorites',
            icon: <Icon viewBox="0 0 16 16" w={'32px'} h={'32px'}>
                <path fill-rule="evenodd" d="M2 3.25A2.25 2.25 0 014.25 1h7.5A2.25 2.25 0 0114 3.25v10.83a1 1 0 01-1.478.878L8.12 12.564a.25.25 0 00-.238 0l-4.403 2.394A1 1 0 012 14.08V3.25zM5.75 6a.75.75 0 000 1.5h4a.75.75 0 000-1.5h-4z" clip-rule="evenodd" />
            </Icon>

        },
        {
            name: 'Pets',
            link: '/pets',
            icon: <Icon viewBox="0 0 89.146 89.146" w={'32px'} h={'32px'}>
                <g>
                    <g>
                        <path d="M89.102,29.135c-0.235-2.28-1.408-4.186-3.217-5.23c-0.944-0.544-2.034-0.832-3.152-0.832c-0.438,0-0.876,0.056-1.31,0.14
                    c0.459-4.289-1.658-8.095-5.283-9.067c-0.547-0.147-1.117-0.223-1.688-0.223c-2.555,0-4.943,1.493-6.523,3.847
                    c-1.581-2.354-3.97-3.847-6.524-3.847c-0.57,0-1.138,0.075-1.686,0.223c-3.625,0.972-5.739,4.776-5.28,9.067
                    c-0.437-0.084-0.872-0.14-1.314-0.14c-1.115,0-2.206,0.29-3.15,0.832c-1.811,1.047-2.983,2.953-3.216,5.23
                    c-0.194,1.887,0.267,3.912,1.305,5.702c1.32,2.293,3.374,3.873,5.596,4.421c-0.577,1.628-0.915,3.361-0.915,5.158
                    c0,2.191,0.372,3.783,1.166,5.013c1.017,1.569,2.657,2.434,4.626,2.434c1.448,0,2.885-0.456,4.413-0.939
                    c1.627-0.514,3.311-1.045,4.978-1.045c1.668,0,3.354,0.531,4.978,1.045c1.526,0.483,2.97,0.939,4.416,0.939
                    c1.743,0,5.789-0.726,5.789-7.446c0-1.799-0.335-3.53-0.914-5.158c2.219-0.546,4.274-2.128,5.595-4.419
                    C88.832,33.047,89.297,31.022,89.102,29.135z M69.826,21.936c0.81-3.018,3.232-4.99,5.411-4.406
                    c2.181,0.584,3.291,3.504,2.483,6.521c-0.812,3.018-3.232,4.99-5.413,4.406C70.13,27.873,69.017,24.954,69.826,21.936z
                     M60.629,17.527c2.183-0.584,4.605,1.39,5.413,4.406c0.808,3.018-0.304,5.938-2.484,6.522c-2.179,0.583-4.604-1.391-5.41-4.406
                    C57.337,21.034,58.448,18.111,60.629,17.527z M51.104,33.086c-1.383-2.394-1.104-5.148,0.632-6.147
                    c1.735-1,4.256,0.132,5.639,2.53c1.385,2.394,1.104,5.147-0.63,6.147C55.011,36.615,52.487,35.483,51.104,33.086z M67.933,46.373
                    c-6.45,0-11.679,5.574-11.679-1.957c0-7.531,7.491-13.64,11.679-13.637c4.188,0.003,11.68,6.106,11.68,13.637
                    C79.612,51.947,74.386,46.373,67.933,46.373z M84.763,33.086c-1.383,2.396-3.907,3.529-5.642,2.53
                    c-1.73-1-2.009-3.751-0.627-6.147c1.383-2.397,3.905-3.53,5.639-2.53C85.866,27.938,86.145,30.693,84.763,33.086z"/>
                        <path d="M39.171,47.263c-0.943-0.545-2.035-0.832-3.151-0.832c-0.439,0-0.876,0.056-1.311,0.14
                    c0.458-4.288-1.658-8.095-5.283-9.067c-0.547-0.147-1.117-0.222-1.687-0.222c-2.555,0-4.943,1.493-6.524,3.847
                    c-1.582-2.354-3.969-3.847-6.524-3.847c-0.57,0-1.137,0.075-1.687,0.222c-3.625,0.972-5.739,4.776-5.281,9.067
                    c-0.435-0.084-0.872-0.14-1.313-0.14c-1.116,0-2.206,0.289-3.151,0.832c-1.81,1.045-2.982,2.952-3.216,5.229
                    c-0.194,1.889,0.268,3.914,1.306,5.702c1.32,2.295,3.373,3.874,5.594,4.421c-0.572,1.629-0.909,3.362-0.909,5.16
                    c0,2.192,0.372,3.786,1.166,5.014c1.016,1.569,2.659,2.434,4.625,2.434c1.449,0,2.887-0.456,4.415-0.939
                    c1.625-0.514,3.31-1.047,4.978-1.047s3.352,0.533,4.977,1.047c1.526,0.483,2.969,0.939,4.415,0.939
                    c1.743,0,5.791-0.728,5.791-7.447c0-1.798-0.336-3.529-0.916-5.155c2.219-0.548,4.274-2.131,5.596-4.421
                    c1.035-1.793,1.5-3.816,1.306-5.702C42.153,50.215,40.981,48.308,39.171,47.263z M23.11,45.293
                    c0.811-3.018,3.232-4.99,5.412-4.406c2.18,0.584,3.292,3.504,2.483,6.522c-0.811,3.018-3.232,4.99-5.412,4.406
                    C23.413,51.233,22.301,48.313,23.11,45.293z M13.914,40.886c2.182-0.584,4.604,1.39,5.412,4.406
                    c0.809,3.017-0.304,5.937-2.483,6.521c-2.18,0.584-4.604-1.39-5.412-4.405C10.622,44.392,11.732,41.469,13.914,40.886z
                     M4.388,56.445c-1.382-2.393-1.105-5.148,0.63-6.147s4.257,0.132,5.639,2.529c1.384,2.394,1.105,5.148-0.628,6.147
                    C8.295,59.973,5.771,58.842,4.388,56.445z M21.218,69.732c-6.452,0-11.679,5.572-11.679-1.957c0-7.532,7.491-13.641,11.679-13.639
                    s11.679,6.106,11.679,13.639C32.897,75.304,27.67,69.732,21.218,69.732z M38.047,56.445c-1.383,2.397-3.907,3.528-5.641,2.529
                    c-1.731-0.999-2.011-3.75-0.628-6.147s3.905-3.528,5.639-2.529C39.149,51.296,39.43,54.052,38.047,56.445z"/>
                    </g>
                </g></Icon>
        },
        {
            name: 'Me',
            link: '/user',
            icon: <Icon viewBox="0 0 512 512" w={'32px'} h={'32px'}>
                <g id="Page-1" stroke="none" stroke-width="1" >
                    <g id="drop"  transform="translate(42.666667, 42.666667)">
                        <path d="M213.333333,3.55271368e-14 C269.912851,3.55271368e-14 324.175019,22.4761259 364.18278,62.4838867 C404.190541,102.491647 426.666667,156.753816 426.666667,213.333333 C426.666667,331.15408 331.15408,426.666667 213.333333,426.666667 C95.5125867,426.666667 2.84217094e-14,331.15408 2.84217094e-14,213.333333 C2.84217094e-14,95.5125867 95.5125867,3.55271368e-14 213.333333,3.55271368e-14 Z M234.666667,234.666667 L192,234.666667 C139.18529,234.666667 93.8415802,266.653822 74.285337,312.314895 C105.229171,355.70638 155.977088,384 213.333333,384 C270.689579,384 321.437496,355.70638 352.381644,312.31198 C332.825087,266.653822 287.481377,234.666667 234.666667,234.666667 L234.666667,234.666667 Z M213.333333,64 C177.987109,64 149.333333,92.653776 149.333333,128 C149.333333,163.346224 177.987109,192 213.333333,192 C248.679557,192 277.333333,163.346224 277.333333,128 C277.333333,92.653776 248.679557,64 213.333333,64 Z" id="Combined-Shape">

                        </path>
                    </g>
                </g>
            </Icon>

        },

    ]





    const linkVar = {
        hidden: { color: '#A7A7A7'},
        enter: { color: '#9A6AF9' },
        exit: { color: '#A7A7A7'},
    }
    const iconVar = {
        hidden: { opacity: 0,marginLeft:'0px',color: '#A7A7A7' },
        enter: { opacity: 1,marginLeft:'10px',color: '#9A6AF9' },
        exit: { opacity:0,marginLeft:'0px',color: '#A7A7A7'}
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
                                        alignItems={'center'}
                                    >
                                        <Box fill={asPath===item.link ? '#9A6AF9':'#A7A7A7'}>
                                            {item.icon}
                                        </Box>
                                        <Box
                                
                                            as={motion.div}
                                            variants={iconVar} 
                                            initial="hidden" // Set the initial state to variants.hidden
                                            animate={asPath === item.link ? 'enter' : 'hidden'} 
                                            exit="exit" // Exit state (used later) to variants.exit
                                            transition={'all 0.6s ease'}>
                                                {asPath === item.link ? item.name : ''}
                                        </Box>
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



