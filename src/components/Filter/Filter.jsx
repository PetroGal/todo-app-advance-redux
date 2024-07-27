import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { filterTodo } from '../../reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
const addFilterTodo = (event) => {
  dispatch(filterTodo(event.target.value))
}

  return <input className={style.input} placeholder="Find it" name="filter" onChange={addFilterTodo}/>;
};
