import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = 'https://66db12b5f47a05d55be6f902.mockapi.io/api/tasks';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// Fetch all tasks
export const useTasks = () =>
  useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
  });

// Create a new task
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, Omit<Task, 'id'>>({
    mutationFn: async newTask => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

// Update a task
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation<Task, Error, Task>({
    mutationFn: async updatedTask => {
      const response = await fetch(`${API_URL}/${updatedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};

// Delete a task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async id => {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
};
