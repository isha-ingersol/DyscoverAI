import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to login, saving current page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
