import { inject, observer } from "mobx-react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import Navigation from "components/OtherComponents/Navigation/Navigation";

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
            // do smth 
        }
    }, [router.query.id]);

    return (
        <>
            <Head>
                <title>
                    Ξffect
                </title>
                <meta name="robots" content="noindex" />
            </Head>
            <NavigationAll>
                <DashboardContainer />
            </NavigationAll>
        </>
    );
}));

export default Dashboard;
