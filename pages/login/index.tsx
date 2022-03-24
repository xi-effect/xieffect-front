/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import { Stack } from '@mui/material';

import React from 'react';

// @ts-ignore
import Header from '../../components/PagesComponents/Login/Header.tsx';
// @ts-ignore
import Form from '../../components/PagesComponents/Login/Form.tsx';

const Login = () => {
  return (
    <>
      <Head>
        <title>Ξffect | Вход</title>
      </Head>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          backgroundColor: 'background.main',
        }}>
        <Header />
        <Form />
      </Stack>
    </>
  );
};

export default Login;