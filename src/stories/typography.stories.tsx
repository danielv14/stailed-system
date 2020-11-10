import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { H1 } from '../components/Typography/H1/H1';
import { H2 } from '../components/Typography/H2/H2';
import { H3 } from '../components/Typography/H3/H3';
import { H4 } from '../components/Typography/H4/H4';
import { H5 } from '../components/Typography/H5/H5';
import { H6 } from '../components/Typography/H6/H6';
import { Paragraph } from '../components/Typography/Paragraph/Paragraph';


export default {
  title: 'Components/Typography/Typography Scale',
  component: H1,
  subcomponents: { H2, H3, H4, H5, H6, Paragraph },
  parameters: { docsOnly: true }
} as Meta;

export const TypographyScale = () => (
  <>
    <H1>Header level 1</H1>
    <H2>Header level 2</H2>
    <H3>Header level 3</H3>
    <H4>Header level 4</H4>
    <H5>Header level 5</H5>
    <H6>Header level 6</H6>
    <Paragraph>A Paragraph</Paragraph>
  </>
)
