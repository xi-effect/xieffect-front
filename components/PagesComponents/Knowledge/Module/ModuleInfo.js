import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useRouter } from 'next/router'
import { Pagination, useMediaQuery, Link, Box, Accordion, Tabs, Tab, AccordionSummary, AccordionDetails, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Popper, ClickAwayListener, Paper, MenuItem, MenuList, IconButton, Button, Grid, InputBase, Typography, useTheme, Tooltip } from '@mui/material';


import { inject, observer } from 'mobx-react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import DescriptionIcon from '@mui/icons-material/Description';
import MenuIcon from '@mui/icons-material/Menu';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const categoryList = {
    "middle-school": "Средняя школа",
    "main-school": "Основная школа",
    "high-school": "Высшая школа",
    "university": "Высшее образование",
    "clubs": "Кружки",
    "hobby": "Хобби",
    "bne": "ОГЭ",
    "une": "ЕГЭ",
    "prof-skills": "Профессиональные навыки",
}

const themeList = {
    "math": "Математика",
    "algebra": "Алгебра",
    "geometry": "Геометрия",
    "languages": "Языки",
    "physics": "Физика",
    "chemistry": "Химия",
    "biology": "Биология",
    "geography": "География",
    "history": "История",
    "social-science": "Обществознание",
    "arts": "Искусства",
    "informatics": "Информатика",
    "literature": "Литература",
    "philosophy": "Философия",
}

const difficultyList = {
    "review": "Обзорный",
    "newbie": "Новичок",
    "amateur": "Любитель",
    "enthusiast": "Энтузиаст",
    "professional": "Профи",
    "expert": "Эксперт",
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ModuleInfo = inject('knowledgeStore')(observer(({ knowledgeStore, children }) => {
    const theme = useTheme();

    const router = useRouter()
    const mobile = useMediaQuery(theme => theme.breakpoints.down('md'));

    React.useEffect(() => {

    }, [])

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [paginationCounter, setPaginationCounter] = React.useState(1);

    const handleChangePagination = (event, value) => {
        setPaginationCounter(value);
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"

        >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    zIndex: 2000,
                    position: "fixed",
                    top: 0,
                    left: mobile ? 0 : 9,
                    width: mobile ? "100%" : "calc(100% - 72px)",
                }}
            >
                <Accordion elevation={24}
                    sx={{
                        zIndex: 2000,
                        width: "100%",
                        backgroundColor: 'background.1',
                        color: 'text.main',
                    }} expanded={knowledgeStore.module.openAccordion === undefined ? false : knowledgeStore.module.openAccordion}>
                    <AccordionSummary
                        sx={{
                            height: 4,
                            marginLeft: -1,
                        }}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Grid
                            item
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Grid container direction="row" alignItems="center">
                                    <Tooltip title="Фильтры">
                                        <span>
                                            <IconButton
                                                onClick={() => knowledgeStore.setModuleData("openAccordion", !knowledgeStore.module.openAccordion)}
                                                size="large">
                                                <ExpandMoreIcon
                                                    sx={{
                                                        transform: knowledgeStore.module.openAccordion ? "rotate(0deg)" : "rotate(-90deg)",
                                                        transition: "0.2s",
                                                    }}
                                                />
                                            </IconButton>
                                        </span>
                                    </Tooltip>
                                    {!mobile && <Typography variant="h6" >
                                        {knowledgeStore.module.name}
                                    </Typography>}
                                    {!mobile && knowledgeStore.page.name != "" && <Typography variant="h5" className={classes.slashLabel}>
                                        {"/"}
                                    </Typography>}
                                    {!mobile && <Typography variant="h6" className={classes.pageLabel}>
                                        {knowledgeStore.page.name}
                                    </Typography>}
                                </Grid>

                            </Grid>
                            <Grid item>

                            </Grid>
                            <Grid item>
                                <Tooltip title="Вперёд">
                                    <span>
                                        <IconButton onClick={null} size="large">
                                            <DoubleArrowIcon className={classes.Icon} />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        marginTop: 0,
                        paddingTop: 0,
                    }}>
                        {/* <Divider className={classes.Divider} /> */}
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid sx={{ width: "100%", }}>
                                {!mobile && <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="full width tabs example"
                                    //variant="fullWidth"
                                    centered
                                >
                                    <Tab label={<Typography >Описание</Typography>} {...a11yProps(0)} />
                                    {knowledgeStore.module["map"] != undefined && <Tab label={<Typography >Навигация</Typography>} {...a11yProps(1)} />}
                                    <Tab label={<Typography >Статистика</Typography>} {...a11yProps(2)} />
                                    <Tab label={<Typography >Об Авторе</Typography>} {...a11yProps(3)} />

                                    {/* <Tab label={<Typography className={classes.tabLabel}>Модерация</Typography>} {...a11yProps(2)} /> */}
                                    {/* <Tab onClick={() => sessionStorage.setItem('KnowledgeTab', "Others")} label={<Typography className={classes.tabLabel}><MoreHorizIcon /></Typography>} {...a11yProps(2)} /> */}
                                </Tabs>}
                                {mobile && <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    aria-label="full width tabs example"
                                    //variant="fullWidth"
                                    centered

                                >
                                    <Tab label={<DescriptionIcon />} {...a11yProps(0)} />
                                    {knowledgeStore.module["map"] != undefined && <Tab label={<MenuIcon />} {...a11yProps(1)} />}
                                    <Tab label={<AnalyticsIcon />} {...a11yProps(2)} />
                                    <Tab label={<AccountBoxIcon />} {...a11yProps(3)} />

                                    {/* <Tab label={<Typography className={classes.tabLabel}>Модерация</Typography>} {...a11yProps(2)} /> */}
                                    {/* <Tab onClick={() => sessionStorage.setItem('KnowledgeTab', "Others")} label={<Typography className={classes.tabLabel}><MoreHorizIcon /></Typography>} {...a11yProps(2)} /> */}
                                </Tabs>}
                                <TabPanel value={value} index={0}>
                                    <Typography variant="h6" >
                                        {knowledgeStore.module.name}
                                    </Typography>
                                    <Typography variant="h6" >
                                        {knowledgeStore.page.name}
                                    </Typography>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        sx={{
                                            mt: 1,
                                        }}
                                    >
                                        <Typography variant="subtitle2" >
                                            {themeList[knowledgeStore.module.theme]}
                                        </Typography>
                                        <Typography variant="subtitle2" >
                                            {"-"}
                                        </Typography>
                                        <Typography variant="subtitle2" >
                                            {categoryList[knowledgeStore.module.category]}

                                        </Typography>
                                        <Typography variant="subtitle2" >
                                            {"-"}
                                        </Typography>
                                        <Typography variant="subtitle2" >
                                            {difficultyList[knowledgeStore.module.difficulty]}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        sx={{
                                            mt: 1,
                                        }}
                                    >
                                        <Typography variant="subtitle2">
                                            {knowledgeStore.module.description != undefined ? knowledgeStore.module.description : "Автор не оставил описания"}
                                        </Typography>

                                    </Grid>
                                </TabPanel>
                                {knowledgeStore.module["map"] != undefined && <TabPanel value={value} index={1}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        sx={{
                                            mt: 1,
                                        }}
                                    >
                                        <Typography variant="subtitle2" >
                                            Навигация по страницам
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    //className={classes.gridWrapperMeta}
                                    >
                                        {knowledgeStore.module["map"].slice(0 + (paginationCounter - 1) * 10, 10 + (paginationCounter - 1) * 10).map((name, index) => (
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="flex-start"
                                                alignItems="center"
                                                key={index.toString()}
                                            >
                                                <ArrowRightIcon />
                                                <Link
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => {
                                                        router.push({
                                                            pathname: '/knowledge/module/[moduleId]/[pageId]',
                                                            query: { moduleId: knowledgeStore.module.id, pageId: index + (paginationCounter - 1) * 10 },
                                                        })
                                                    }}
                                                    color="inherit"
                                                    underline="hover"
                                                >
                                                    {name}
                                                </Link>
                                                {/* <Typography>
                                                    {item.name}
                                                </Typography> */}
                                            </Grid>))}
                                        <Pagination
                                            sx={{
                                                "& .MuiPaginationItem-root": {
                                                    color: theme => theme.palette.primary.contrastText,
                                                }
                                            }}
                                            count={Math.ceil(knowledgeStore.module["map"].length / 10)}
                                            color="primary"
                                            onChange={handleChangePagination}
                                        />
                                    </Grid>
                                </TabPanel>}
                                <TabPanel value={value} index={2}>
                                    Item Three
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Three
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid sx={{ zIndex: 1 }}>
                {children}
            </Grid>
        </Grid >
    );
}));


export default ModuleInfo;