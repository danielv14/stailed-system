import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  decorators: [(Story) => <div style={{background: 'pink'}}><Story /></div>]
} as Meta;

export const withPadding = () => (
  <Box p="30px">I am a box with some padding</Box>
)

export const withPaddingAndMargin = () => (
    <Box p="30px" m="30px">I am a box with some padding and margin</Box>
)