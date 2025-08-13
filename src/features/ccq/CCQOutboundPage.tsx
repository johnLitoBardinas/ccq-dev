import React from 'react';
import TodoList from './components/TodoLists';

const CCQOutboundPage = () => {
  return (
    <div className="ccq-outbound-container">
      <h1>CCQ Outbound Dashboard</h1>
      <section className="mt-2">
        <TodoList />
      </section>
    </div>
  );
};

export default CCQOutboundPage;
