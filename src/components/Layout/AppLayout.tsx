import { Outlet } from "react-router";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <>
      <div className="flex flex-col font-publicSans lg:hidden bg-beige100">
        <main className="overflow-y-auto  px-4 py-6 md:px-10 md:py-8">
          <Outlet />
        </main>
        <BottomNav />
      </div>
      <div className="lg:flex h-screen font-publicSans hidden bg-beige100">
        <Sidebar />
        <main className="overflow-y-auto px-10 py-8  flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
