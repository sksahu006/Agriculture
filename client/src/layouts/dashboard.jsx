import { Routes, Route } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
  Footer,
} from "@/components/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#c5f3b8] to-[#d3f2c0] tracking-widest">
      {/* <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "src\assets\KaffeinnLogo.png" : "src\assets\KaffeinnLogo.png"
        }
      /> */}
      <div className="p-4">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
