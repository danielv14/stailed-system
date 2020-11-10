import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H2 } from './H2';

export default {
  title: 'Components/Typography/H2',
  component: H2,
} as Meta;

export const Normal = () => (
  <H2>Header level 2</H2>
)

export const Bold = () => (
  <H2 isBold>Header level 2</H2>
)