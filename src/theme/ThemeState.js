import React, { useReducer } from "react"

import ThemeContext from "./themeContext"
import themeReducer from "./themeReducer"

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const dark = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#424242'
        },
        secondary: {
            main: '#1de9b6'
        },
    }
});

const light = createMuiTheme({
    palette: {
        primary: {
            main: '#b0bec5',
        },
        secondary: {
            main: '#00796b',
        },
    },
});

const ThemeState = (props) => {

    // Initial State
    const initialState = {
        dark: false
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)

    const toggle = () => {
        dispatch({ type: "TOGGLE" })
        localStorage.setItem("theme", state.dark ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider
            value={{
                dark: state.dark,
                toggle
            }}
        >
            <ThemeProvider theme={state.dark ? dark : light}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider >
    )

}

export default ThemeState