import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../constants/colors";


export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? darkTheme : lightTheme;
    return (
        <ThemeContext.Provider value={{theme, setIsDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
};