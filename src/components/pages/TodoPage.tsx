import Container from '../container/Container';
import Section from '../section/Section';
import TodoList from '../todoList/TodoList';
import Header from '../header/Header';

export default function TodoPage() {
  return (
    <>
      <Header />

      <Section>
        <Container>
          <TodoList />
        </Container>
      </Section>
    </>
  );
}
