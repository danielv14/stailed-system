import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H3 } from './H3';

export default {
  title: 'Components/Typography/H3',
  component: H3,
} as Meta;

export const Normal = () => (
  <H3>Header level 3</H3>
)

export const Bold = () => (
  <H3 isBold>Header level 3</H3>
)