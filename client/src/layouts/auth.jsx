import { Routes, Route, useNavigate } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/components/layout";
import routes from "@/routes";
import { useEffect, useState } from "react";

export function Auth() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("checked")
        const token = localStorage.getItem("authToken");
        if (!token) {
          navigate("/auth/sign-in");
        } else {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/auth/sign-in");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);
  const navbarRoutes = [
    {
      name: "dashboard",
      path: "/dashboard/home",
      icon: ChartPieIcon,
    },
    {
      name: "profile",
      path: "/dashboard/home",
      icon: UserIcon,
    },
    {
      name: "sign up",
      path: "/auth/sign-up",
      icon: UserPlusIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  return (
    <>
      {isLoading ? <div className="flex justify-center items-center min-h-screen">
        < div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500" ></div >
      </div > : <div className="relative min-h-screen w-full">
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "auth" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
      }
    </>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
