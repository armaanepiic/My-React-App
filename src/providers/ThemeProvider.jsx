import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

// provider
const ThemeProvider = ({ children }) => {
  // theme state
  const [theme, setTheme] = useState("light");

  // themeToggler function
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
