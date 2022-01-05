import { Button, Grid, Tab, Tabs, Typography, Stack, Box, Divider, useTheme, Avatar } from '@mui/material';

import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';

import Image from "next/image";
import Head from 'next/head';
import React from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
const DashboardContainer = dynamic(() => import("../../../../components/PagesComponents/Community/DashboardContainer"), {
    ssr: false,
});
import NavigationAll from "../../../../components/OtherComponents/Navigation/NavigationAll";

//http://localhost:3000/community/1/dashboard/1

const Dashboard = inject('rootStore', 'settingsStore', 'profileStore')(observer(({ rootStore, settingsStore, profileStore }) => {
    // console.log("router.query", router.query.id);

    const router = useRouter()

    React.useEffect(() => {
        if (router.query.id !== undefined) {
            //do smth 
        }
    }, [router.query.id]);
    console.log("router.query", router.query)

    return (
        <>
            <Head>
                <title>
                    Ξffect
                </title>
            </Head>
            <NavigationAll>
                <DashboardContainer />
            </NavigationAll>
        </>
    );
}))

export default Dashboard
