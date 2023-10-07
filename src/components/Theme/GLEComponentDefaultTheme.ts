import { GLEComponentTheme } from "./GLEComponentTheme.types";
import GLEComponentLightTheme from "./GLEComponentLightTheme";

const GLEComponentDefaultTheme: GLEComponentTheme = {
    gle: {
        ...GLEComponentLightTheme.gleComponent
    }
};

export default GLEComponentDefaultTheme