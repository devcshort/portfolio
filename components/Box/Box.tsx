import styled from 'styled-components';
import {
  space,
  color,
  layout,
  borders,
  position,
  PositionProps,
  BordersProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    BordersProps,
    PositionProps {}

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  space,
  color,
  layout,
  borders,
  position
);

export default Box;
