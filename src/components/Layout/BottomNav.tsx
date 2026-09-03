import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router";

const links = [
  { icon: GoHomeFill, title: "Overview", path: "/" },
  { icon: GoHomeFill, title: "Transactions", path: "/transactions" },
  { icon: GoHomeFill, title: "Budgets", path: "/budgets" },
  { icon: GoHomeFill, title: "Pots", path: "/pots" },
  { icon: GoHomeFill, title: "Recurring Bills", path: "/bills" },
];

function BottomNav() {
  return (
    <nav className="bg-grey900 rounded-t-2xl pt-2 px-4 fixed bottom-0 left-0 right-0 w-full flex items-center justify-between">
      {links.map(({ icon: Icon, title, path }) => (
        <Link
          to={path}
          key={title}
          className="flex flex-col gap-1 items-center"
        >
          <Icon /> <span className="hidden md:inline">{title}</span>
        </Link>
      ))}
    </nav>
  );
}

export default BottomNav;
