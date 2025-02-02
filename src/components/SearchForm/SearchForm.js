import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchString } from '../../redux/store';
import { useEffect } from 'react';

const SearchForm = () => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    setValue('');
    dispatch(searchString(value));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchString(value));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." onChange={ (e) => setValue(e.target.value) } />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;