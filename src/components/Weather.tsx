import React, { FC } from 'react';
import { WeatherData } from '../store/types';


import './Weather.css';

interface WeatherProps {
    data: WeatherData
}

const Weather: FC<WeatherProps> = ({ data }) => {

    const styles = {
        textColor: {
            color: 'white'
        }
    }

    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered" style={{ marginBottom: 50, color: 'white' }}>{data.name} - {data.sys.country}</h1>
                <div className="level" style={{ alignItems: 'flex-start', color: 'white' }}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.weather[0].description}</p>
                            <p className="title pt-5">
                                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
                            </p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">temp</p>
                            <div style={styles.textColor} className="pt-5">
                                <p className="mb-2">{data.main.temp}K</p>
                                <p className="mb-2">{fahrenheit}<sup>&#5457;</sup></p>
                                <p>{celsius}<sup>&#8451;</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">humidity</p>
                            <p className="pt-5" style={styles.textColor}>{data.main.humidity}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">pressure</p>
                            <p className="pt-5" style={styles.textColor}>{data.main.pressure}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">wind</p>
                            <p className="pt-5" style={styles.textColor}>{data.wind.speed} m/s</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weather;