import {
  TextField,
  ListItem as MuiListItem,
  ListItemText,
  Checkbox,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { useDeleteTask, useUpdateTask } from '../../api/todo-api';
import styled from 'styled-components';
import SaveIcon from '@mui/icons-material/Save';
import { useThemeContext } from '../../providers/ThemeContextProvider';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledMuiListItem = styled(MuiListItem)`
  padding-left: 0;
  padding-right: 0;

  & .MuiInputBase-root {
    padding-right: 0;
  }
`;

const StyledIconButton = styled(IconButton)<{ iconColor: string }>`
  margin-right: 6px;
  margin-left: 6px;

  svg {
    color: ${({ iconColor }) => iconColor};
  }
`;

export default function TaskListItem({ task }: { task: Task }) {
  const { id, title, completed } = task;

  const [newTitle, setNewTitle] = useState(title);

  const { currentTheme } = useThemeContext();

  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  const handleBlur = () => {
    if (newTitle !== title) {
      updateTask.mutate({ ...task, title: newTitle });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const iconColor =
    currentTheme === 'dark'
      ? 'rgba(255, 255, 255, 0.25)'
      : 'rgba(0, 0, 0, 0.25)';

  return (
    <StyledMuiListItem key={id}>
      <ListItemText
        primary={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledTextField
              value={newTitle}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <Tooltip title="save" arrow>
                    <StyledIconButton
                      onClick={handleBlur}
                      iconColor={iconColor}
                    >
                      <SaveIcon />
                    </StyledIconButton>
                  </Tooltip>
                ),
              }}
            />
          </div>
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
    </StyledMuiListItem>
  );
}
