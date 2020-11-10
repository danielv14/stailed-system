import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H4 } from './H4';

export default {
  title: 'Components/Typography/H4',
  component: H4,
} as Meta;

export const Normal = () => (
  <H4>Header level 4</H4>
)

export const Bold = () => (
  <H4 isBold>Header level 4</H4>
)