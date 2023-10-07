import { GLEComponentTheme } from "./GLEComponentTheme.types";
import GLEComponentLightTheme from "./GLEComponentLightTheme";
import { baseColors, boxShadow } from "./Variables";

const GLEComponentDarkTheme: GLEComponentTheme = {
    gle: {
        ...GLEComponentLightTheme.gleComponent,
        boxShadow: {
            ...boxShadow,
            outerBorder: `0 0 0 2px ${baseColors.blue.dark5}, 0 0 0 4px ${baseColors.blue.base}`,
        },
        color: {
            ...GLEComponentLightTheme.gle.color,
            buttonRegularBackground: baseColors.grey.light4,
            buttonRegularBackgroundHover: baseColors.grey.light3,
            buttonRegularForeground: baseColors.black,
            buttonRegularActiveBorderColor: baseColors.white,
            buttonPrimaryBackground: baseColors.blue.light4,
            buttonPrimaryBackgroundHover: baseColors.blue.light3,
            buttonPrimaryForeground: baseColors.black,
            buttonPrimaryActiveBorderColor: baseColors.white,


            badgeBackground: baseColors.grey.dark4,
            badgeText: baseColors.grey.light1,
            cartButtonText: baseColors.grey.dark2,
            bannerBackground: baseColors.grey.dark5,
            buttonClearHover: baseColors.grey.dark4, // recheck
            buttonPrimary: baseColors.green.base,
            buttonPrimaryHover: baseColors.green.dark1, // recheck
            buttonSecondary: baseColors.green.base,
            buttonText: baseColors.otherBlack,
            cardBackground: baseColors.grey.dark5,
            checkoutTopBackground: baseColors.grey.dark6,
            checkoutBottomBackground: baseColors.grey.dark1,
            formBackground: baseColors.grey.dark5,
            foodItemBackground: baseColors.otherBlack,
            headerBackground: baseColors.grey.dark6,
            restaurantDetailBackground: baseColors.grey.dark5,
            headerBorder: baseColors.grey.dark4,
            inputBackground: baseColors.grey.dark4,
            inputIcon: baseColors.white,
            inputHint: baseColors.grey.light1,
            label: baseColors.grey.light4,
            labelActive: baseColors.white,
            menuSectionBackground: baseColors.grey.dark6,
            stepsIndicatorInnerBar: baseColors.green.base,
            stepsIndicatorOuterBar: baseColors.grey.dark4,
            orderSummaryBackground: baseColors.grey.dark5,
            overlayBackground: baseColors.grey.dark5,
            overlayHeader: baseColors.grey.dark4,
            primaryText: baseColors.white,
            reviewText: baseColors.blue.base,
            screenBackground: baseColors.grey.dark6,
            sidebarHeader: baseColors.grey.dark4,
            sidebarFooter: baseColors.grey.dark5,
            skeletonBase: baseColors.grey.dark3,
            skeletonHighlight: baseColors.grey.dark2,
            topBannerBackground: baseColors.grey.dark5,
        },
        name: 'dark',
    }
}

export default GLEComponentDarkTheme