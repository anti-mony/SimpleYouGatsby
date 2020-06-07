/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"
import React from "react"
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


export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={light}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    )
}

