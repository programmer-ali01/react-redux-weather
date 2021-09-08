import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';

import './App.css';
import clouds from './assets/clouds2.jpg';
//import BackgroundImage from './components/BackgroundImage';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
//import BurgerMenu from './components/BurgerMenu';


import { setAlert } from './store/actions/alertAction';
import { setError } from './store/actions/weatherAction';
import { setMenu } from './store/actions/menuAction';

function App() {
  const styles = {
    container: {
      backgroundImage: `url(${clouds})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    },
    overlay: {
      background: 'rgba(39,62,84,0.82)',
      overflow: 'hidden',
      height: '100%',
      Zindex: '2'
    }
  };
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  const showMenu = useSelector((state: RootState) => state.menu.show);

  const burgerMenuHandler = () => {
    if (showMenu) {
      return dispatch(setMenu(false))
    }
  }

  let navbarItems: string[] = ["Home", "About Us", "Contact Us"]

  return (
    <div style={styles.container}>
      <div style={styles.overlay} onClick={burgerMenuHandler}>
        <Navbar
          title="Weather"
          items={navbarItems}
        />


        <Search title="Enter City Name" />
        {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

        {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
        {error && <Alert message={error} onClose={() => dispatch(setError())} />}
      </div>
    </div >

  );
}

export default App;
