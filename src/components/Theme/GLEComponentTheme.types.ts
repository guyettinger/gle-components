import { ReactNode } from "react";
import { spacing, color, borderRadius, boxShadow, typography } from "./Variables";

// import { DefaultTheme } from "styled-components";
// declare module 'styled-components' {
//     export interface DefaultTheme {
//         gle: {
//             name: string
//             fonts: {
//                 family: string
//             }
//             spacing: typeof spacing
//             color: typeof color
//             borderRadius: typeof borderRadius
//             boxShadow: typeof boxShadow
//             typography: typeof typography
//         }
//     }
// }

export interface GLEComponentTheme {
    gle: {
        name: string
        fonts: {
            family: string
        }
        spacing: typeof spacing
        color: typeof color
        borderRadius: typeof borderRadius
        boxShadow: typeof boxShadow
        typography: typeof typography
    }
}

export interface GLEComponentThemeProviderProps {
    theme: GLEComponentTheme
    children: ReactNode
}