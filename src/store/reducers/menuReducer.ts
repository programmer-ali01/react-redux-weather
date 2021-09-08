import { MenuState, MenuAction, SET_MENU } from "../types";

const initialState: MenuState = {
    show: false,
}



export const menuReducer = (state = initialState, action: MenuAction): MenuState => {
    switch (action.type) {
        case SET_MENU:
            return {
                show: action.payload
            }
        default:
            return state;

    }
}

export default menuReducer;
