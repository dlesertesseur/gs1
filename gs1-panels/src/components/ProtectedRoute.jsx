import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderBar from "./HeaderBar";

export const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth.value);

  if (!user.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen">
      <HeaderBar/>
      <div>{children}</div>
    </div>
  );
};
