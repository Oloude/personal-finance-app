import { GoHomeFill } from "react-icons/go";
import { LuArrowDownUp } from "react-icons/lu";
import { PiChartDonutFill, PiReceiptFill } from "react-icons/pi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router";

const links = [
  { icon: GoHomeFill, title: "Overview", path: "/" },
  { icon: LuArrowDownUp, title: "Transactions", path: "/transactions" },
  { icon: PiChartDonutFill, title: "Budgets", path: "/budgets" },
  { icon: RiMoneyDollarBoxFill, title: "Pots", path: "/pots" },
  { icon: PiReceiptFill, title: "Recurring Bills", path: "/bills" },
];

function BottomNav() {
    const {pathname} = useLocation()
  return (
    <nav className="bg-grey900 rounded-t-2xl pt-2 px-4 md:px-10 fixed bottom-0 left-0 right-0 w-full flex justify-between items-end lg:hidden">
      {links.map(({ icon: Icon, title, path }) => (
        <NavLink
          to={path}
          key={title}
          className={({ isActive }) =>
            `${isActive ? "bg-beige100 border-b-4 border-green rounded-t-xl text-green" : "text-grey300"} flex flex-col items-center py-2 pb-3 gap-1 w-full max-w-26 h-auto`
          }
        >
          <Icon className="w-6 h-6" />{" "}
          <span className={`hidden md:inline text-preset5 font-bold ${pathname === path ? 'text-grey900' : 'text-gray-100'}`}>{title}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;
