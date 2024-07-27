import { Section, Container, Header, Form, TodoList, Filter, EditForm } from 'components';
  import { useSelector } from 'react-redux';
import { selectIsEdit } from 'reduxTodo/selectors';

export const App = () => {
  const isEdit = useSelector(selectIsEdit)
  return (
    <>
      <Header />
      <Section>
        <Container>
        {!isEdit ? <Form /> : <EditForm />}
          <Filter/>
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
