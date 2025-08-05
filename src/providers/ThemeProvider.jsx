import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

// provider
const ThemeProvider = ({ children }) => {
  // theme state
  const [theme, setTheme] = useState("light");
  const [searchParams, setSearchParams] = useSearchParams({test: "test1"});

  useEffect(() => {
    setSearchParams({ ...searchParams, mode: theme });
  }, [theme]);

  // themeToggler function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
