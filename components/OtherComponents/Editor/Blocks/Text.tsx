/* eslint-disable react/prefer-exact-props */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Typography } from '@mui/material';
import * as React from 'react';
// import { Menu, MenuItem, Stack, ListItemIcon, ListItemText, Typography } from '@mui/material';
// import "./TextEditor.scss";

type TextProps = {
  contentState: any;
  blockProps: any;
  block: any;
};

const Text: React.FC<TextProps> = (props) => {
  const { contentState } = props;
  console.log('contentStateText', contentState);
  // const { foo } = props.blockProps;
  // const data = contentState.getEntity(block.getEntityAt(0)).getData();
  // console.log('data', data, foo);
  return <Typography> Text </Typography>;
};
export default Text;
