import APCLient from './api-client';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default new APCLient<Todo>('/todos');
