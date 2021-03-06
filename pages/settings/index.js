/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  useMediaQuery,
  Box,
  Stack,
  Tooltip,
  Typography,
  AccordionDetails,
  Grid,
  IconButton,
} from "@mui/material";
import { inject, observer } from "mobx-react";

import SaveIcon from "@mui/icons-material/Save";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";

import Navigation from "kit/Navigation/Navigation";
import CustomAvatar from "kit/Avatar/CustomAvatar";

import Secure from "components/Settings/Secure";
import Interface from "components/Settings/Interface";

const Invite = dynamic(() =>
  import("components/Settings/Invite")
);

const UserAvatar = dynamic(() =>
  import("components/Settings/UserAvatar")
);

const Settings = inject(
  "rootStore",
  "userSt",
)(
  observer(({ rootStore, userSt }) => {
    const mobile = useMediaQuery((theme) => theme.breakpoints.down("xl"));
    const router = useRouter();

    React.useEffect(() => {
      rootStore
        .fetchData(`${rootStore.url}/home/`, "GET")
        .then((data) => {
          if (data) {
            console.log("settings/main", data);
            userSt.setSettings("darkTheme", data["dark-theme"]);
            userSt.setSettings("id", data.id);
            userSt.setSettings("username", data.username);
          }
        });
      rootStore
        .fetchData(`${rootStore.url}/settings/`, "GET")
        .then((data) => {
          if (data) {
            console.log("settings", data);
            const emailArr = data.email.split("@", 2);
            userSt.setSettings("emailBefore", emailArr[0]);
            userSt.setSettings("emailAfter", `@${emailArr[1]}`);
            userSt.setSettings("emailConfirmed", data["email-confirmed"]);
            userSt.setSettings("avatar", data.avatar);
            userSt.setSettings("invite", data.code);
          }
        });
    }, [userSt]);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    React.useEffect(() => {
      if (router.query.option && (router.query.option === "secure" || router.query.option === "useravatar" || router.query.option === "interface" || router.query.option === "customize" || router.query.option === "invite")) setExpanded(router.query.option);
    }, [router.query]);

    return (
      <>
        <Head>
          <title>??ffect | ??????????????????</title>
          <meta name="robots" content="noindex" />
        </Head>
        <Navigation>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                paddingLeft: 1,
                paddingRight: 1,
                width: "100%",
                pb: 4,
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                sx={{
                  width: "100%",
                  height: 276,
                  maxWidth: 1200,
                }}
              >
                <Box sx={{ height: 196, width: 196 }}>
                  <CustomAvatar
                    avatar={{ ...userSt.settings.avatar, bgcolor: null }}
                    height={196}
                    width={196}
                  />
                </Box>
                {!mobile && (
                  <Button
                    sx={{ ml: "auto", mr: 1, mb: 1.2 }}
                    onClick={() => userSt.saveNewSettings()}
                    color="inherit"
                  >
                    ?????????????????? ??????????????????
                  </Button>
                )}
                {mobile && (
                  <Tooltip title="?????????????????? ??????????????????">
                    <IconButton
                      sx={{ ml: "auto", mr: 1, mb: 1 }}
                      onClick={() => userSt.saveNewSettings()}
                      color="inherit"
                    >
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                )}
                <Tooltip title="??????????">
                  <IconButton
                    sx={{ m: 1 }}
                    onClick={() => userSt.logout()}
                    color="error"
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Grid
                sx={{
                  width: "100%",
                  maxWidth: 1200,
                }}
              >
                <Accordion
                  sx={{ width: "100%", backgroundColor: "primary.dark" }}
                  expanded={expanded === "secure"}
                  onChange={handleChange("secure")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>????????????????????????</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Secure />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ width: "100%", backgroundColor: "primary.dark" }}
                  expanded={expanded === "useravatar"}
                  onChange={handleChange("useravatar")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>?????????????????? ??????????????</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <UserAvatar />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ width: "100%", backgroundColor: "primary.dark" }}
                  expanded={expanded === "customize"}
                  onChange={handleChange("customize")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography>?????????????? ?????? ????????????????????</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <Customize /> */}
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ width: "100%", backgroundColor: "primary.dark" }}
                  expanded={expanded === "interface"}
                  onChange={handleChange("interface")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>??????????????????</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Interface />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ width: "100%", backgroundColor: "primary.dark" }}
                  expanded={expanded === "invite"}
                  onChange={handleChange("invite")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography>??????????????????????</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Invite />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Navigation>
      </>
    );
  })
);

export default Settings;
