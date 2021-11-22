/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { styled } from '@mui/material/styles';
import Head from 'next/head'
import { useRouter } from "next/router";

import { Divider, Box, Grid, FormControlLabel, Button, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@mui/material'


import { inject, observer } from 'mobx-react'

import NavigationAll from './../../../../components/OtherComponents/Navigation/NavigationAll';
// import PageCompList from './../../../components/PagesComponents/Knowledge/Page/PageCompList';
// import Toolbar from '../../../components/PagesComponents/Knowledge/Page/Toolbar';
// import ModuleInfo from './../../../../components/PagesComponents/Knowledge/Module/ModuleInfo';
import PageCompList from './../../../../components/PagesComponents/Knowledge/Page/PageCompList';


const ModuleId = inject('rootStore', 'knowledgeStore')(observer(({ rootStore, knowledgeStore }) => {
    const theme = useTheme();


    React.useEffect(() => {
        knowledgeStore.clearModule()
        knowledgeStore.loadModule()
    }, []);



    return (
        <>
            <Head>
                <title>
                    Ξffect
                </title>
            </Head>
            {/* <Background/> */}
            <NavigationAll hasRightToolbar>
                <Grid
                    sx={{
                        width: '100%',
                        zIndex: 1,
                    }}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    container
                >
                    <PageCompList />
                </Grid>
            </NavigationAll>
        </>
    );
}))


export default ModuleId