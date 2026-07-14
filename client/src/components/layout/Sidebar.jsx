import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Meals", path: "/meals" },
  { name: "Nutrition", path: "/nutrition" },
  { name: "Progress", path: "/progress" },
  { name: "AI Coach", path: "/chat" },
  { name: "Profile", path: "/profile" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen border-r border-slate-700">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-green-400">
          Nutrition AI
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;