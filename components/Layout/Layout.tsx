import { HTMLAttributes } from 'react';

import Main from './components/Main';
import StatusBar from './components/StatusBar';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

interface LayoutProps extends HTMLAttributes<HTMLElement> {}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <StatusBar />
      <SideBar />
      <NavBar />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
