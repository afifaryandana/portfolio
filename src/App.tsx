import { RouterProvider } from "react-router"
import { LanguageProvider } from "./i18n"
import { router } from "./routes"

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}
