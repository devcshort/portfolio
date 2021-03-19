import styled from 'styled-components';
import { VscFiles, VscSourceControl, VscExtensions } from 'react-icons/vsc';
import { FaLinkedinIn, FaBlog, FaStackOverflow } from 'react-icons/fa';

const StyledSidebar = styled.div`
  background-color: #1d252b;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 25px);
  position: fixed;
  top: 25px;
  left: 0;
  bottom: 0;
  width: 50px;
  z-index: 99999;
`;

const IconButton = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  height: 50px;
  justify-content: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    background-color: #00aced;
    content: '';
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2px;
  }
`;

const IconLink = styled.a`
  align-items: center;
  color: #444b52;
  display: flex;
  font-size: 1.5rem;
  height: 50px;
  justify-content: center;
  &:hover {
    color: #fff;
  }
`;

export default function SideBar() {
  return (
    <StyledSidebar>
      <IconButton>
        <VscFiles />
      </IconButton>
      <IconLink
        href="https://github.com/devcshort"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <VscSourceControl />
      </IconLink>
      <IconLink
        href="https://www.npmjs.com/~nightlight"
        target="_blank"
        rel="noopener noreferrer"
        title="Npmjs"
      >
        <VscExtensions />
      </IconLink>
      <IconLink
        href="https://blog.chrisrshort.dev"
        target="_blank"
        rel="noopener noreferrer"
        title="Blog"
      >
        <FaBlog />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/in/devcshort"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </IconLink>
      <IconLink
        href="https://stackoverflow.com/users/5140389/chris"
        target="_blank"
        rel="noopener noreferrer"
        title="Stack Overflow"
      >
        <FaStackOverflow />
      </IconLink>
    </StyledSidebar>
  );
}
