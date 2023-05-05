
export type changeThemeIdAT = {
    type: "SET_THEME_ID",
    id: number
}
type ActionType = changeThemeIdAT

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): {themeId: number} => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => {
    return {
        type: "SET_THEME_ID",
        id: id
    }
} // fix any
