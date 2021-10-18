/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'

import { Box, useTheme } from '@mui/material'

import Sidebar from './Sidebar'
import Helpbar from './Helpbar'
import Loading from '../Loading/Loading'
import SideDownbar from './SideDownbar'

const PREFIX = 'NavigationAll';

const classes = {
    root: `${PREFIX}-root`,
    content: `${PREFIX}-content`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
    {
        theme
    }
) => ({
    [`& .${classes.root}`]: {
        zIndex: 0,
        display: 'flex',
        backgroundColor: theme => theme.palette.blueGrey["1"],
        minHeight: "100vh",
    },

    [`& .${classes.content}`]: {
        zIndex: 0,
        margin: 0,
        //height: "100vh",
        width: "100%",
        backgroundColor: theme => theme.palette.blueGrey["1"],
    }
}));

const NavigationAll = inject('rootStore', 'settingsStore', 'uiStore')(observer(({ rootStore, settingsStore, uiStore, children }) => {
    const theme = useTheme();


    const router = useRouter()

    React.useEffect(() => {
        rootStore.fetchDataScr(`${rootStore.url}/settings/main/`, "GET")
            .then((data) => {
                console.log(data)
                if (data.a != undefined) {
                    if (data.a == "unauthorized: Missing cookie \"access_token_cookie\"" || data.a == "invalid token: Signature verification failed") {
                        router.push("/login")
                    }
                } else {
                    rootStore.fetchDataScr(`${rootStore.url}/avatar/`, "GET")
                        .then((data) => {
                            console.log("avatar", data)
                            if (data != undefined && data.message != "The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again. You have requested this URI [/avatar/] but did you mean /avatar/ ?") {
                                settingsStore.setSettings("avatar", data)
                            }
                        });
                    rootStore.fetchDataScr(`${rootStore.url}/settings/`, "GET")
                        .then((data) => {
                            console.log(data)
                            if (data != undefined) {
                                let emailArr = data.email.split("@", 2)
                                settingsStore.setSettings("username", data.username)
                                settingsStore.setSettings("emailBefore", emailArr[0])
                                settingsStore.setSettings("emailAfter", "@" + emailArr[1])
                                settingsStore.setSettings("darkTheme", data["dark-theme"])
                                settingsStore.setSettings("emailConfirmed", data["email-confirmed"])
                            } else {
                                console.log("Проблемы с сервером")
                            }
                        });
                    uiStore.setLoading("/main")

                }
            })
    }, [])

    return (
        (<Root>
            {uiStore.loading["/main"] && <Loading />}
            {!uiStore.loading["/main"] &&
                <div className={classes.root}>
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block', } }}>
                        <Sidebar />
                    </Box>
                    <Box sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none', } }}>
                        <SideDownbar />
                    </Box>
                    {/* <Helpbar openHelpMenu={openHelpMenu} setOpenHelpMenu={setOpenHelpMenu} /> */}
                    <main
                        className={classes.content}
                    >
                        {children}
                    </main>
                </div>
            }
        </Root>)
    );
}))

export default NavigationAll