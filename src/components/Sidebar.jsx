import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];
  const navigate = useNavigate();
  
  // using custom context
  const { theme } = useTheme();

  const menuItem = menuItems.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => navigate(`/${item.toLocaleLowerCase()}`)}
        className={clsx(
          "w-full text-left p-2 rounded hover:bg-opacity-80 transition-all duration-150 hover:scale-105 cursor-pointer font-semibold",
          theme === "light" && "hover:bg-gray-900 hover:text-white",
          theme === "dark" && "hover:bg-gray-50 hover:text-gray-900"
        )}
      >
        {item}
      </button>
    </li>
  ));

  // console.log(menuItem);

  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-300",
        theme === "light" && "bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-800 text-gray-50"
      )}
    >
      <nav>
        <h2 className="text-lg font-bold mb-2">Menu</h2>
        <ul>{menuItem}</ul>
      </nav>
    </aside>
  );
}
