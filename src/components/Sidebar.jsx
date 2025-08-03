export default function Sidebar() {

  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];

  const menuItem = menuItems.map((item,index) => (<li key={index}>
    <button className="w-full text-left p-2 rounded hover:bg-opacity-80 transition-colors hover:bg-gray-200 cursor-pointer">{item}</button>
  </li>));

  // console.log(menuItem);

  return (
    <aside className="w-64 p-4 transition-colors duration-300 bg-gray-50 text-gray-800">
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul>
          {menuItem}
        </ul>
      </nav>
    </aside>
  );
}
