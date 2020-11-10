import styled from '@emotion/styled';
import { flexbox, FlexboxProps, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export type BoxProps = SpaceProps & FlexboxProps & LayoutProps;

/**
 * A low level component working as the smallest building block to build other components from
 */
export const Box = styled.div<BoxProps>(
  space,
  flexbox,
  layout,
)

Box.displayName = 'Box'