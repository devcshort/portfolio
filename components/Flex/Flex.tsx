import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

interface BoxProps extends SpaceProps, ColorProps, LayoutProps, FlexboxProps {}

const Flex = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    display: 'flex',
  },
  space,
  color,
  layout,
  flexbox
);

export default Flex;
