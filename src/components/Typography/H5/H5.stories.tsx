import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H5 } from './H5';

export default {
  title: 'Components/Typography/H5',
  component: H5,
} as Meta;

export const Normal = () => (
  <H5>Header level 5</H5>
)

export const Bold = () => (
  <H5 isBold>Header level 5</H5>
)