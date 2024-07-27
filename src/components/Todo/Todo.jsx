import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleClick}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
