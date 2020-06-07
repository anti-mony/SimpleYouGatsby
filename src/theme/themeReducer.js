export default (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                ...state,
                dark: !state.dark
            }
        default:
            return state
    }
}