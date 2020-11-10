import { Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { Box } from '../../Box/Box';
import { Paragraph } from './Paragraph';


export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
} as Meta;

export const example = () => (
  <Box maxWidth="500px">
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ligula mi. Pellentesque congue tempor tortor a auctor. Curabitur eleifend imperdiet nisl nec imperdiet. Duis congue mollis massa ut tristique. Mauris faucibus leo non tellus finibus, ac suscipit nisl egestas. Etiam a neque turpis. Morbi consequat euismod venenatis. Aliquam erat volutpat. Mauris malesuada sem nibh, in faucibus elit vehicula nec. Nunc in consequat purus. Pellentesque nisl mauris, ultrices vitae arcu et, ullamcorper finibus sem. Curabitur id tortor at leo viverra tempus a sollicitudin mauris.
  </Paragraph>
  <Paragraph>
    Etiam et fermentum quam, a varius enim. Phasellus venenatis nisi eget ex mollis suscipit. Duis felis lorem, fringilla ac facilisis ac, facilisis nec sem. Nam cursus est sed ullamcorper viverra. Quisque eget turpis massa. Morbi dignissim ante id sem eleifend imperdiet. In vitae eros mattis, lacinia augue posuere, dictum mauris. Aliquam accumsan magna egestas massa porttitor convallis a quis ipsum. Donec posuere nec odio quis placerat.
  </Paragraph>
  </Box>
)