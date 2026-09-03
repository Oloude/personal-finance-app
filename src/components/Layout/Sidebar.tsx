import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { LuArrowDownUp } from "react-icons/lu";
import { PiChartDonutFill, PiReceiptFill } from "react-icons/pi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import { NavLink, useLocation } from "react-router";

const links = [
  { icon: GoHomeFill, title: "Overview", path: "/" },
  { icon: LuArrowDownUp, title: "Transactions", path: "/transactions" },
  { icon: PiChartDonutFill, title: "Budgets", path: "/budgets" },
  { icon: RiMoneyDollarBoxFill, title: "Pots", path: "/pots" },
  { icon: PiReceiptFill, title: "Recurring Bills", path: "/bills" },
];

function Sidebar() {
  const [isMinimize, setIsMinimize] = useState(false);

  function handleToggleMinimize() {
    setIsMinimize((prev) => !prev);
  }

  return (
    <aside className="h-screen">
      {isMinimize ? (
        <MinimizeSidebar handleToggleMinimize={handleToggleMinimize} />
      ) : (
        <LargeSidebar handleToggleMinimize={handleToggleMinimize} />
      )}
    </aside>
  );
}

export default Sidebar;

function LargeSidebar({
  handleToggleMinimize,
}: {
  handleToggleMinimize: () => void;
}) {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-6 pb-6 bg-grey900 rounded-r-3xl overflow-hidden w-75 h-full">
      <div className="px-8 py-10">
        <img src="/logo-large.svg" alt="" />
      </div>
      <nav className="flex flex-col gap-1 pr-6">
        {links.map(({ icon: Icon, title, path }) => (
          <NavLink
            to={path}
            key={title}
            className={({ isActive }) =>
              `${isActive ? "bg-beige100 border-l-4 border-green rounded-r-xl text-green" : "text-grey300"} flex items-center px-8 py-4 gap-4 `
            }
          >
            <Icon className="w-6 h-6" />{" "}
            <span
              className={` text-preset3 font-bold ${pathname === path ? "text-grey900" : "text-gray-100"}`}
            >
              {title}
            </span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleToggleMinimize}
        className="px-8 py-4 flex items-center gap-3 cursor-pointer mt-auto text-grey300 text-preset3 font-bold"
      >
        <TbArrowBigLeftLinesFilled className="w-6 h-6" />
        Minimize Menu
      </button>
    </div>
  );
}

function MinimizeSidebar({
  handleToggleMinimize,
}: {
  handleToggleMinimize: () => void;
}) {
  return (
    <div className="flex flex-col gap-6 w-22 bg-grey900 rounded-r-3xl pb-6 h-full">
      <div className="px-8 py-10">
        <img src="/logo-small.svg" alt="" />
      </div>
      <nav className="flex flex-col gap-1 pr-4">
        {links.map(({ icon: Icon, title, path }) => (
          <NavLink
            to={path}
            key={title}
            className={({ isActive }) =>
              `${isActive ? "bg-beige100 border-l-4 border-green rounded-r-xl text-green" : "text-grey300"} flex items-center px-6 py-4 gap-4 `
            }
          >
            <Icon className="w-6 h-6" />{" "}
            {/* <span
              className={` text-preset3 font-bold ${pathname === path ? "text-grey900" : "text-gray-100"}`}
            >
              {title}
            </span> */}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleToggleMinimize}
        className="px-8 py-4 flex items-center justify-center cursor-pointer mt-auto text-grey300 "
      >
        <TbArrowBigRightLinesFilled className="w-6 h-6" />
      </button>
    </div>
  );
}
