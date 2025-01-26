import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: { value } });
      };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
					<TextInput placeholder="Search..." onChange={ (e) => setValue(e.target.value) } />
					<TextInput placeholder="Add new column" />
					<Button type="submit">Search</Button>
        </form>
    );
};

export default SearchForm;