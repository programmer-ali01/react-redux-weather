import { SET_MENU, MenuAction } from "../types";

export const setMenu = (show: boolean): MenuAction => {
    return {
        type: SET_MENU,
        payload: show
    }
}
