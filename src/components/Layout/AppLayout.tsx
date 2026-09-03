import { Outlet } from "react-router";
import BottomNav from "./BottomNav";

function AppLayout() {
  return <div className="flex flex-col">
    <main className="overflow-y-auto px-4 py-6"><Outlet/></main>
    <BottomNav/>
  </div>;
}

export default AppLayout;
