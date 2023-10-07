import { borderRadius, boxShadow, color, spacing, typography } from "./Variables";
import { GLEComponentTheme } from "./GLEComponentTheme.types";

const GLEComponentLightTheme: GLEComponentTheme = {
    gleComponent : {
        borderRadius,
        boxShadow,
        color,
        fonts: {
            family: 'NunitoSans, sans-serif',
        },
        name: 'light',
        spacing,
        typography,
    }
};

export default GLEComponentLightTheme