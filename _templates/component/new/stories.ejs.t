---
to: src/components/<%= Name %>/<%= Name %>.stories.tsx
---

import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { <%= Name %> } from './<%= Name %>';


export default {
  title: 'Components/<%= Name %>',
  component: <%= Name %>,
} as Meta;

export const exampleTitle = () => (
  <<%= Name %>>Hello world</<%= Name %>>
)

