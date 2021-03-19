import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaMarkdown, FaJsSquare, FaFilePdf } from 'react-icons/fa';
import { VscFile } from 'react-icons/vsc';

const StyledNavbar = styled.nav`
  background-color: #222b33;
  display: flex;
  height: 50px;
  overflow-x: auto;
  padding-left: 50px;
  position: fixed;
  top: 25px;
  left: 0;
  right: 0;
  z-index: 9999;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLink = styled.a`
  align-items: center;
  background-color: #222b33;
  color: #4f565d;
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  &.active {
    background-color: #1d252b;
    color: #fff;
  }
  &.active&:after {
    background-color: #00aced;
    content: '';
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default function NavBar() {
  const { pathname } = useRouter();

  return (
    <StyledNavbar>
      <Link href="/" passHref>
        <StyledLink className={pathname === '/' && 'active'}>
          <FaMarkdown style={{ marginRight: 5, color: '#1F90FF' }} />
          Preview README.md
        </StyledLink>
      </Link>

      <Link href="/about" passHref>
        <StyledLink className={pathname === '/about' && 'active'}>
          <FaJsSquare style={{ marginRight: 5, color: '#F7DF1E' }} />
          about.js
        </StyledLink>
      </Link>

      <Link href="/resume" passHref>
        <StyledLink className={pathname === '/resume' && 'active'}>
          <FaFilePdf style={{ marginRight: 5, color: '#fff' }} />
          resume.pdf
        </StyledLink>
      </Link>

      <Link href="/portfolio" passHref>
        <StyledLink className={pathname === '/portfolio' && 'active'}>
          <VscFile style={{ marginRight: 5, color: '#fff' }} />
          Extension: Portfolio
        </StyledLink>
      </Link>
    </StyledNavbar>
  );
}
