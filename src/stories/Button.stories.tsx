import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, ButtonSize } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ButtonSize
      }
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  size: ButtonSize.Medium
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  size: ButtonSize.Medium
};

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Large,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.Small,
  label: 'Button',
};