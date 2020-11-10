import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H1 } from './H1';

export default {
  title: 'Components/Typography/H1',
  component: H1,
} as Meta;

export const Normal = () => (
  <H1>Header level 1</H1>
)

export const Bold = () => (
  <H1 isBold>Header level 1</H1>
)