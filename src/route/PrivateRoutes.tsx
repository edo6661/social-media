import { useCurrentUserStore } from "@/lib/zustand/currentUserStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { currentUser } = useCurrentUserStore();
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
