import React from 'react';
import { Outlet } from 'react-router-dom';

const CCQPage = () => {
  return (
    <div className="ccq-container">
      <h1>CCQ Dashboard</h1>
      <section className="mt-2">
        <Outlet />
      </section>
    </div>
  );
};

export default CCQPage;
