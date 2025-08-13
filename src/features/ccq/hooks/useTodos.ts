import { useQuery } from '@tanstack/react-query';
import todoService, { Todo } from '../services/todoService';

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: todoService.getAll,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export default useTodos;
