// this file is used to protect certain screens, if not logged in, will not show that screen the route is pointing to
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.users);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
