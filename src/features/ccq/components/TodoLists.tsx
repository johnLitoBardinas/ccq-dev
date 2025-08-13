import React from 'react';
import useTodos from '../hooks/useTodos';
import { Todo } from '../services/todoService';

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p>TodoLists Sample Component</p>
      <ul>
        {todos?.map((todo: Todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
