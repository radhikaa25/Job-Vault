import Header from "@/components/header";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const params = useLocation();
  const notShow = params.pathname !== "/";
  return (
    <div>
      <div className={notShow && "grid-background"}></div>
      {/* <div>{params}</div> */}
      <main className={notShow && "min-h-screen container"}>
        {notShow && <Header />}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
