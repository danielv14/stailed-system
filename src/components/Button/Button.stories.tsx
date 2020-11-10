import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Button, ButtonProps, ButtonSize } from './Button';


export default {
  title: 'Components/Button',
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
