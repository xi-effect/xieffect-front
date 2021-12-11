import React from 'react';
import { useRouter } from 'next/router'
import Image from "next/image";
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack, useMediaQuery, Link, Button, Grid, Box, Paper, useTheme, Typography } from '@mui/material';

const cards = [
    {
        title: 'Бесплатно и без рекламы',
        label: 'Описание преимущества в несколько строк для примера, думаю подумаем над этим после',
        image: '/svg/Card.svg',
    },
    {
        title: 'Все образовательные сервисы в одном месте',
        label: 'Описание преимущества в несколько строк для примера, думаю подумаем над этим после',
        image: '/svg/SEO.svg',
    },
    {
        title: 'Гибкая система настроек процесса обучения',
        label: 'Описание преимущества в несколько строк для примера, думаю подумаем над этим после',
        image: '/svg/Empty.svg',
    },
]

const WhyLabel = () => {
    const theme = useTheme();

    const router = useRouter()
    const mobile = useMediaQuery(theme => theme.breakpoints.down('md'));


    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                mt: mobile ? '90px' : '180px',
                width: '100%',
                position: 'relative',
            }}
        >
            <Typography
                component={"h3"}
                textAlign="center"
                variant="IBMPlexSans700WhyLabel"
                sx={{
                    '&.MuiTypography-root': {
                        color: '#272731',
                    },
                    fontSize: {
                        xs: '28px',
                        sm: '30px',
                        md: '36px',
                        lg: '40px',
                    },
                }}
            >
                Почему выбирают нас?
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    mt: mobile ? '30px' : '100px',
                    width: '100%',
                    zIndex: 10,
                }}
            >
                {cards.map((item, index) => (
                    <Grid
                        item
                        key={index.toString()}
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{
                            ml: 2,
                            mr: 2,
                            mt: 2,
                            mb: 2,
                            width: '400px',
                            height: '500px',
                            background: 'linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 100%)',
                            boxShadow: '0px 24px 67px rgba(0, 0, 0, 0.08)',
                            borderRadius: '20px',
                        }}
                    >
                        <Grid item>
                            <Typography
                                component={"h4"}
                                variant='OpenSans600WhyLabel'
                                sx={{
                                    color: '#272731',
                                    pt: '40px',
                                    pl: '32px',
                                    pr: '32px',
                                    textAlign: 'center',
                                    fontSize: {
                                        xs: '20px',
                                        sm: '20px',
                                        md: '20px',
                                        lg: '20px',
                                    },
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                component={"p"}
                                variant='OpenSans400WhyLabel'
                                sx={{
                                    color: '#555569',
                                    pt: '20px',
                                    pl: '32px',
                                    pr: '32px',
                                    fontSize: {
                                        xs: '18px',
                                        sm: '18px',
                                        md: '18px',
                                        lg: '18px',
                                    },
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Grid>
                        <Grid item
                            sx={{
                                width: '210px',
                                height: '210px',
                                mt: 'auto',
                                mb: '60px',
                            }}
                        >
                            <Image
                                alt="alt"
                                src={item.image}
                                quality={100}
                                width={210}
                                height={210}
                            />
                        </Grid>
                    </Grid>

                ))}
            </Grid >
            <Box
                sx={{
                    width: 'calc(100vw - 8px)',
                    height: '333px',
                    bgcolor: '#FEE24D',
                    position: 'absolute',
                    bottom: '-210px',
                    zIndex: 0,
                }}
            >

            </Box>
        </Stack >

    );
}

export default WhyLabel