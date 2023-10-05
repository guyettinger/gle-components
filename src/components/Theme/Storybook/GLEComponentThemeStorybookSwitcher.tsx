export const GLEComponentThemeStorybookSwitcher = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            // The icon for the toolbar item
            icon: 'circlehollow',
            // Array of options
            items: [
                { value: 'light', icon: 'circlehollow', title: 'light' },
                { value: 'dark', icon: 'circle', title: 'dark' },
            ],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
}