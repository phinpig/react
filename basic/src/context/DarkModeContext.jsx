import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarMode] = useState(false);
    const toggleDarkMode = () => setDarMode((mode) => !mode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
