import {
  useTasks,
  useCreateTask,
  useUpdateTask,
  useDeleteTask,
} from '../api/todoApi';
import {
  Button,
  Checkbox,
  TextField,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Formik, Form, Field, FieldProps } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

const Control = styled(TextField)`
  width: 100%;
`;

export default function TodoList() {
  const { data: tasks = [], isLoading } = useTasks();
  const createTask = useCreateTask();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          createTask.mutate({ title: values.title, completed: false });
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field name="title">
              {({ field, meta }: FieldProps<string>) => (
                <TextField
                  {...field}
                  label="New Task"
                  error={meta.touched && Boolean(meta.error)}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Button type="submit" variant="contained" color="primary">
              Add Task
            </Button>
          </Form>
        )}
      </Formik>

      <List>
        {tasks.map((task: Task) => (
          <ListItem key={task.id}>
            <ListItemText
              primary={
                <Control
                  value={task.title}
                  onChange={e =>
                    updateTask.mutate({ ...task, title: e.target.value })
                  }
                />
              }
            />
            <Checkbox
              checked={task.completed}
              onChange={() =>
                updateTask.mutate({ ...task, completed: !task.completed })
              }
            />
            <Button
              onClick={() => deleteTask.mutate(task.id)}
              variant="outlined"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
