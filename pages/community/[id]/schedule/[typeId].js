import { Button, Grid, Tab, Tabs, Typography, Stack, Box, Divider, useTheme, Avatar } from '@mui/material';

import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Image from "next/image";
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'

import NavigationAll from "../../../../components/OtherComponents/Navigation/NavigationAll";
import Toolbar from '../../../../components/PagesComponents/Community/Schedule/Toolbar';
import DateLine from '../../../../components/PagesComponents/Community/Schedule/DateLine';
import LessonsList from '../../../../components/PagesComponents/Community/Schedule/LessonsList';



const SchedulePage = inject('rootStore', 'settingsStore', 'profileStore')(observer(({ rootStore, settingsStore, profileStore }) => {
    // console.log("router.query", router.query.id);

    const router = useRouter()

    React.useEffect(() => {
        if (router.query.id !== undefined) {
            //do smth 
        }
    }, [router.query.id]);
    // console.log("router.query", router.query)

    return (
        <>
            <Head>
                <title>
                    Ξffect
                </title>
            </Head>
            <NavigationAll>
                <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    // spacing={2}
                    sx={{
                        width: '100%',
                        // maxHeight: 'calc(100vh - 120px)',
                        // height: '100%',
                    }}
                >
                    <Box
                        sx={{
                            position: "fixed",
                            left: '336px',
                            right: '256px',
                            bgcolor: 'background.main',
                            zIndex: 100,
                            top: 48,
                        }}
                    >
                        <Toolbar />
                        <DateLine />
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        // spacing={2}
                        sx={{
                            mt: 12,
                            width: '100%',
                            maxHeight: 'calc(100vh - 120px)',
                            height: '100%',
                        }}
                    >
                        <LessonsList />
                    </Stack>
                </Stack>
            </NavigationAll>
        </>
    );
}))

export default SchedulePage