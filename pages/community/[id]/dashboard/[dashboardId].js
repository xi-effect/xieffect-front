import { inject, observer } from "mobx-react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Navigation from "components/OtherComponents/Navigation/Navigation";

const DashboardContainer = dynamic(() => import("components/PagesComponents/Community/Dashboard/DashboardContainer"), {
    ssr: false,
});

const Dashboard = inject()(observer(() => {
    const router = useRouter();

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
            <Navigation>
                <DashboardContainer />
            </Navigation>
        </>
    );
}));

export default Dashboard;
