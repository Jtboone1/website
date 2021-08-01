import React from "react";
import { ThemeProvider } from "./Context";
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";

export default function Layout({ children }) {
    const large_screen = useMediaQuery({ query: "(min-width: 1200px)" });
    return (
        <ThemeProvider>
            {
                large_screen && <Nav />
            }
            {children}
            {
                !large_screen && <Nav />
            }
        </ThemeProvider>
    );
}
