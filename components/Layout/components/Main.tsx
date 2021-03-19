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

interface MainProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    BordersProps,
    PositionProps {}

const Main = styled.main<MainProps>(
  {
    boxSizing: 'border-box',
    paddingLeft: 66,
    paddingTop: 75,
    paddingRight: 16,
    paddingBottom: 0,
    overflowY: 'auto',
  },
  space,
  color,
  layout,
  borders,
  position
);

export default Main;
