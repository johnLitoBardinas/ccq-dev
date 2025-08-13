import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="ccq">CCQ</NavLink> | <NavLink to="outbound">Outbound</NavLink> |{' '}
        <NavLink to="inbound">Inbound</NavLink>
      </nav>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
