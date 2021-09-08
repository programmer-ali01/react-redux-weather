import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../store/actions/alertAction';
import { getWeather, setLoading } from '../store/actions/weatherAction';



interface SearchProps {
    title: string
}



const Search: FC<SearchProps> = ({ title }) => {

    const styles = {
        textColor: {
            color: 'white'
        }
    }

    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    // this function changes and sets the change
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (city.trim() === '') {
            return dispatch(setAlert('city is required!'));
        }
        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }
    return (
        <div className="hero has-text-centered pt-5">
            <div className="container">
                <div style={styles.textColor} className="title">{title}</div>
                <form className="py-5" onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="input has-text-centered mb-2"
                        placeholder="Enter city name"
                        style={{ maxWidth: 300 }}
                        value={city}
                        onChange={changeHandler}
                    />
                    <button className="button is-info is-fullwidth" style={{ maxWidth: 300, margin: '0 auto' }}>
                        Search
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Search;