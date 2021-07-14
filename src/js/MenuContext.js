import * as React from 'react';

export const Selections = {
    ABOUT: 'about',
    APPLE: 'apple',
    WEB: 'web',
    UX: 'ux'
};

export const MenuContext = React.createContext({
    selection: Selections.ABOUT,
    setSelection: () => {},
});