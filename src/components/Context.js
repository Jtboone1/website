import React, { createContext, useState } from "react";

const style = {
    retro: false,
    setStyle: () => {}
}

const StyleContext = createContext(style);

const ThemeProvider = ({ children }) => {
    const [style, setStyle] = useState(false);

    return (
        <StyleContext.Provider value={{
            retro: style,
            setStyle
        }}>
            { children }
        </StyleContext.Provider>
    )
}

export default StyleContext;
export { ThemeProvider }