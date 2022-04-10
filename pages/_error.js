/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ErrorPage from '../components/PagesComponents/Error/ErrorPage';

// eslint-disable-next-line no-underscore-dangle
export default function _500() {

  return (
    <ErrorPage
      imageSrc="/assets/404/500Error.svg"
      textMessage="Внутренняя ошибка сервера"
    />
  );
}