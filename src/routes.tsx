import { createBrowserRouter, Navigate } from "react-router"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/projects/ugm-research-enterprises",
    Component: ProjectPage,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])
