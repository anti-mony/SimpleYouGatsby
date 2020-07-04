/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

import React from "react"
import ThemeState from "./src/theme/ThemeState"


export const wrapRootElement = ({ element }) => {
    return (
        <ThemeState>
            {element}
        </ThemeState>
    )
}

