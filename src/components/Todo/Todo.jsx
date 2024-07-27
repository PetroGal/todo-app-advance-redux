import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleChange = () => {
    dispatch(changeTodo(todo))
  }
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

      <button className={style.editButton} type="button" onClick={handleChange}>
      <RiEdit2Line size={24} />
    </button>
    </div>
  );
};
