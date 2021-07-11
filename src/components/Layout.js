import React from "react";
import { ThemeProvider } from "./Context";
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <Nav />
            {children}
        </ThemeProvider>
    );
}
