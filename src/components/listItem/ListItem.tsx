import {
  TextField,
  ListItem as MuiListItem,
  ListItemText,
  Checkbox,
  Button,
} from '@mui/material';
import { useDeleteTask, useUpdateTask } from '../../api/todo-api';
import styled from 'styled-components';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TextFieldS = styled(TextField)`
  width: 100%;
`;

const MuiListItemS = styled(MuiListItem)`
  padding-left: 0;
  padding-right: 0;
`;

export default function TaskListItem({ task }: { task: Task }) {
  const { id, title, completed } = task;

  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  return (
    <MuiListItemS key={id}>
      <ListItemText
        primary={
          <TextFieldS
            value={title}
            onChange={e =>
              updateTask.mutate({ ...task, title: e.target.value })
            }
          />
        }
      />
      <Checkbox
        checked={completed}
        onChange={() =>
          updateTask.mutate({ ...task, completed: !task.completed })
        }
      />
      <Button onClick={() => deleteTask.mutate(id)} variant="outlined">
        Delete
      </Button>
    </MuiListItemS>
  );
}
