import { useTasks, useCreateTask } from '../../api/todo-api';
import { TextField } from '@mui/material';
import { Formik, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import ListItem from '../listItem/ListItem';
import { StyledButton, StyledForm } from './TodoList.styled';
import Paginate from '../paginate/Paginate';
import Loader from '../loader/Loader';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

export default function TodoList() {
  const { data: tasks = [], isLoading } = useTasks();
  const createTask = useCreateTask();

  if (isLoading) {
    return <Loader />;
  }

  const reversedTasks = [...tasks].reverse();

  return (
    <>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={TaskSchema}
        onSubmit={(values, { resetForm }) => {
          createTask.mutate(
            { title: values.title, completed: false },
            {
              onSuccess: () => {
                resetForm();
              },
            }
          );
        }}
      >
        {() => (
          <StyledForm>
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
            <StyledButton type="submit" variant="contained">
              Add Task
            </StyledButton>
          </StyledForm>
        )}
      </Formik>

      <Paginate
        itemsPerPage={6}
        array={reversedTasks}
        renderItem={(task: Task) => <ListItem key={task.id} task={task} />}
      />
    </>
  );
}
