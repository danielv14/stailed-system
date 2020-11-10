import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H6 } from './H6';

export default {
  title: 'Components/Typography/H6',
  component: H6,
} as Meta;

export const Normal = () => (
  <H6>Header level 6</H6>
)

export const Bold = () => (
  <H6 isBold>Header level 6</H6>
)