export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const SET_MENU = 'SET_MENU';

export interface weather {
    id: number
    icon: string
    main: string
    description: string
}

export interface WeatherData {
    base: string
    clouds: {
        all: number
    }
    cod: number
    coord: {
        lon: number
        lat: number
    }
    dt: number
    id: number
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    name: string
    sys: {
        country: string
        id: string
        sunrise: string
        sunset: string
        type: number
    }
    timezone: number
    visibility: number
    weather: weather[]
    wind: {
        speed: number
        deg: number
    }
}

export interface WeatherError {
    cod: string
    message: string
}

export interface WeatherState {
    data: WeatherData | null
    loading: boolean
    error: string
}

interface GetWeatherAction {
    type: typeof GET_WEATHER
    payload: WeatherData
}

interface SetLoadingAction {
    type: typeof SET_LOADING
}

interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT
    payload: string
}

export interface AlertState {
    message: string
}

export interface MenuAction {
    type: typeof SET_MENU
    payload: boolean
}

export interface MenuState {
    show: boolean
}


