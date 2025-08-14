import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/index.jsx";
import Error from "./components/error.jsx";
import Layout from "./components/Layout.jsx";
import AssessmentComponent from "./components/Assessments/Assessment.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const createRouter = (isLoggedIn, setIsLoggedIn) =>
  createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, element: <Main /> },
        { path: "/how-it-works", element: <Main /> },
        { path: "/learn-more", element: <Main /> },
        { path: "/about", element: <Main /> },

        {
          path: "/assessment",
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AssessmentComponent />
            </ProtectedRoute>
          ),
        },

        {
          path: "/login",
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },

        {
          path: "/signup",
          element: <Signup />,
        },

        { path: "/error", element: <Error /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

function Router({ isLoggedIn, setIsLoggedIn }) {
  const router = createRouter(isLoggedIn, setIsLoggedIn);
  return <RouterProvider router={router} />;
}

export default Router;
