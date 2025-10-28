const initState = {
    themeId: 1,
}

export type ThemeAction = {
    type: 'SET_THEME_ID'
    payload: {
        id: number
    }
}

type ThemeState = {
    themeId: number
}

export const themeReducer = (state: ThemeState = initState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.payload.id,
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ThemeAction => ({
    type: 'SET_THEME_ID',
    payload: { id }
})