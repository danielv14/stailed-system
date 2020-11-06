// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Title } from './Title';


export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

export const exampleTitle = () => (
  <Title>Hello world</Title>
)