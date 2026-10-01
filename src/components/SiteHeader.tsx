import { Link } from "react-router"
import { useLanguage } from "../i18n"

export function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  )
}

export default function SiteHeader({ project = false }: { project?: boolean }) {
  const { language, setLanguage } = useLanguage()
  const fi = language === "fi"

  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="M. Afif Aryandana, home">
        AFIF<span>®</span>
      </Link>
      <div className="header-right">
        <nav aria-label="Primary navigation">
          <Link to="/#work">{fi ? "Työt" : "Work"}</Link>
          <Link to="/#about">{fi ? "Minusta" : "About"}</Link>
          <Link to="/#experience">{fi ? "Kokemus" : "Experience"}</Link>
        </nav>
        <div className="language-switch" aria-label="Language">
          <button
            type="button"
            className={language === "en" ? "is-active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
          <button
            type="button"
            className={language === "fi" ? "is-active" : ""}
            onClick={() => setLanguage("fi")}
            aria-pressed={language === "fi"}
          >
            FI
          </button>
        </div>
        {project ? (
          <Link className="header-link" to="/">
            {fi ? "Etusivulle" : "Back home"}
          </Link>
        ) : (
          <a
            className="header-link"
            href="mailto:aryandanaafif@gmail.com?subject=Website%20Inquiry"
          >
            {fi ? "Ota yhteyttä" : "Contact"}
          </a>
        )}
      </div>
    </header>
  )
}
