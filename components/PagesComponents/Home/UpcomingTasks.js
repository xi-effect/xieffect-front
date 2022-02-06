import React from 'react';
import { inject, observer } from 'mobx-react';
import { Paper, Stack, Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';

const tasks = [
    {
        startTime: '2022-01-29T06:50:00.000+04:00',
        endTime: '2022-01-29T19:46:00.000+04:00',
        label: 'Зарядка и умывание',
        type: 'live',
    },
    {
        startTime: '2021-12-19T07:30:00.000+04:00',
        endTime: '2022-01-29T16:45:00.000+04:00',
        label: 'Медитация',
        type: 'live',
    },
    {
        startTime: '2021-12-19T08:00:00.000+04:00',
        endTime: '2022-01-31T22:30:00.000+04:00',
        label: 'Завтрак',
        type: 'live',
    },
    {
        startTime: '2021-12-19T09:00:00.000+04:00',
        endTime: '2022-02-01T09:45:00.000+04:00',
        label: 'Математика',
        type: 'school',
    },
    {
        startTime: '2021-12-19T10:00:00.000+04:00',
        endTime: '2022-01-29T17:45:00.000+04:00',
        label: 'Литература',
        type: 'school',
    },
    {
        startTime: '2021-12-19T11:00:00.000+04:00',
        endTime: '2021-12-19T12:45:00.000+04:00',
        label: 'История',
        type: 'school',
    },

    {
        startTime: '2021-12-19T13:45:00.000+04:00',
        endTime: '2021-12-19T16:00:00.000+04:00',
        label: 'Обед',
        type: 'live',
    },
    {
        startTime: '2021-12-19T16:45:00.000+04:00',
        endTime: '2021-12-19T19:00:00.000+04:00',
        label: 'Кружок исторических реконструкций',
        type: 'club',
    },
    {
        startTime: '2021-12-19T20:45:00.000+04:00',
        endTime: '2021-12-19T21:00:00.000+04:00',
        label: 'Домашнее задание. Информатика',
        type: 'homework',
    },
];

const getTaskLabel = (t) => {
    if (t === 'all') return 'Все'
    if (t === 'live') return 'Жизнь'
    if (t === 'school') return 'Школа'
    if (t === 'club') return 'Дополнительные занятия'
    if (t === 'homework') return 'Домашняя работа'
}

const getTaskColor = (t) => {
    if (t === 'live') return '#ff9800'
    if (t === 'school') return '#cddc39'
    if (t === 'club') return '#2196f3'
    if (t === 'homework') return '#e91e63'
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const Task = inject('rootStore', 'managmentStore')(observer(({ rootStore, managmentStore, task, nextTask }) => {

    return (
        <>
            <Box
                sx={{
                    mt: 2,
                    width: '100%',
                    position: 'relative'
                }}>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'text.secondary',
                        position: 'absolute',
                        top: "0px",
                        left: "-46px",

                    }}>
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'text.secondary',
                        position: 'absolute',
                        bottom: "-4px",
                        left: "-46px",
                    }}>
                </Typography>

                <Paper
                    elevation={12}
                    // direction="row"
                    // justifyContent="flex-start"
                    // alignItems="center"
                    sx={{
                        // position: 'absolute',
                        // top: 60 * (dateStart.getHours() - 6) + dateStart.getMinutes(),
                        height: 95,
                        minHeight: "64px",
                        width: 'calc(100% - 88px)',
                        // minWidth: 300,
                        // bgcolor: 'primary.main',
                        borderRadius: 2,
                        ml: 0.5,
                        "&:before": {
                            position: "absolute",
                            content: '""',
                            top: 0,
                            left: 2,
                            right: 0,
                            width: "10px",
                            height: "100%",
                            borderRadius: 2,
                            // background: getTaskColor(task.type),
                        },
                        // mt: 1.5,
                        // ml: 1,
                    }}>

                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    // spacing={1}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: getTaskColor(task.type),
                                ml: 2,
                            }}>

                            {getTaskLabel(task.type)}

                        </Typography>

                        <Typography
                            sx={{
                                width: 'calc(100% - 16px)',
                                ml: 2,
                            }}
                            noWrap>

                            {capitalize(moment().to(task.endTime))}

                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                width: 'calc(100% - 32px)',
                                ml: 2,
                            }}
                            noWrap >

                            {task.label}

                        </Typography>

                        <IconButton
                            style={{ float: "right" }}
                            sx={{
                                position: 'absolute',
                                bottom: 32,
                                right: 100,
                                boxShadow: 4,
                                height: 32,
                                width: 32,
                                bgcolor: 'secondary.main',
                                '&:hover': {
                                    bgcolor: 'secondary.main',
                                }
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>


                    </Stack>
                </Paper>
            </Box>
        </>
    )
}));

const UpcomingTasks = inject('rootStore', 'managmentStore')(observer(({ rootStore, }) => {

    const SEPARATOR = 10; //период отслеживаемого дедлайна в часах;

    const upTasks = tasks.filter(task => moment().diff(task.endTime) < 0 && moment().date() === moment(task.endTime).date() && (moment(task.endTime).hours() - moment().hours()) <= SEPARATOR)
        .sort((a, b) => moment(a.endTime) - moment(b.endTime))
        .map(task => <Task task={task} key={task.label} />);


    return (
        <div style={{ width: "30%" }}>
            <h2>Ближайшие задачи: </h2>
            {upTasks}
        </div>)

}));

export default UpcomingTasks;