import { Link } from "react-router"
import portrait from "../assets/afif-portrait-transparent.png"
import disbursementImage from "../assets/disbursement-management.png"
import dashboardImage from "../assets/singgahsini-dashboard.png"
import ugmResearchImage from "../assets/ugm-research.png"
import ScrollToHash from "../components/ScrollToHash"
import SiteHeader, { Arrow } from "../components/SiteHeader"
import { useLanguage } from "../i18n"

const cvUrl = "/M-Afif-Aryandana-CV.pdf"

const experience = [
  {
    period: "Sep 2025 — Now",
    periodFi: "Syyskuu 2025 — Nyt",
    role: "University Ambassador",
    roleFi: "Yliopistolähettiläs",
    company: "University of Oulu",
    url: "https://www.oulu.fi/en",
    description:
      "Sharing university studies and student life in Oulu through social content, blog writing, school visits, and study fairs.",
    descriptionFi:
      "Kerron opiskelusta ja opiskelijaelämästä Oulussa sosiaalisen median, blogien, kouluvierailujen ja opiskelumessujen kautta.",
    highlights: ["Content", "Community", "Public speaking"],
    highlightsFi: ["Sisällöntuotanto", "Yhteisö", "Esiintyminen"],
  },
  {
    period: "May 2024 — Now",
    periodFi: "Toukokuu 2024 — Nyt",
    role: "Product Designer",
    roleFi: "Tuotesuunnittelija",
    company: "Universitas Gadjah Mada",
    url: "https://ugm.ac.id/en/",
    description:
      "Designing complex research and administration products, including an end-to-end portal used across the university ecosystem.",
    descriptionFi:
      "Suunnittelen tutkimuksen ja hallinnon digitaalisia tuotteita, mukaan lukien koko yliopistoyhteisöä palvelevan tutkimusportaalin.",
    highlights: ["7,000+ researchers", "50+ internal users", "Design system"],
    highlightsFi: [
      "7 000+ tutkijaa",
      "50+ sisäistä käyttäjää",
      "Design system",
    ],
  },
  {
    period: "Nov 2023 — Feb 2024",
    periodFi: "Marraskuu 2023 — Helmikuu 2024",
    role: "UI/UX Designer · Project based",
    roleFi: "UI/UX-suunnittelija · Projekti",
    company: "Braga Technologies",
    url: "https://braga.co.id/",
    description:
      "Designed digital literature and note-taking experiences that made academic resources more accessible to Air Force cadets.",
    descriptionFi:
      "Suunnittelin digitaalisia kirjallisuus- ja muistiinpanoratkaisuja, jotka paransivat ilmavoimien kadettien pääsyä oppimateriaaleihin.",
    highlights: ["1,800 cadets", "Product design", "Prototyping"],
    highlightsFi: ["1 800 kadettia", "Tuotesuunnittelu", "Prototypointi"],
  },
  {
    period: "Oct 2023 — Dec 2023",
    periodFi: "Lokakuu 2023 — Joulukuu 2023",
    role: "UI/UX Design Mentor",
    roleFi: "UI/UX-suunnittelun mentori",
    company: "MyEduSolve",
    url: "https://myedusolve.com/",
    description:
      "Guided university students through the UI/UX design process with practical feedback, critique, and structured mentoring.",
    descriptionFi:
      "Ohjasin yliopisto-opiskelijoita UI/UX-suunnitteluprosessissa käytännön palautteen, kritiikin ja suunnitelmallisen mentoroinnin avulla.",
    highlights: ["25 mentees", "Design critique", "Mentoring"],
    highlightsFi: ["25 mentoroitavaa", "Suunnittelukritiikki", "Mentorointi"],
  },
  {
    period: "Jan 2021 — Nov 2023",
    periodFi: "Tammikuu 2021 — Marraskuu 2023",
    role: "Product Designer",
    roleFi: "Tuotesuunnittelija",
    company: "Mamikos",
    url: "https://mamikos.com",
    description:
      "Created B2B property-management tools that replaced manual disbursement and performance-reporting workflows.",
    descriptionFi:
      "Suunnittelin B2B-kiinteistöhallinnan työkaluja, jotka korvasivat manuaaliset maksatus- ja raportointiprosessit.",
    highlights: [
      "B2B SaaS",
      "14 manual roles reduced",
      "Performance reports automated",
    ],
    highlightsFi: [
      "B2B SaaS",
      "14 manuaalista roolia vähennetty",
      "Suoritusraportit automatisoitu",
    ],
  },
]

const articles = [
  {
    title:
      "Studying Interdisciplinary Product Innovation and Creation as a Product Designer",
    titleFi:
      "Monitieteisen tuoteinnovoinnin ja -kehityksen opiskelu tuotesuunnittelijana",
    source: "University of Oulu",
    href: "https://www.oulu.fi/en/apply/unioulu-ambassador-blog/studying-interdisciplinary-product-innovation-and-creation-product-designer",
  },
  {
    title:
      "I found a miracle week at my first internship as a Product Designer",
    titleFi:
      "Löysin ihmeviikon ensimmäisessä harjoittelussani tuotesuunnittelijana",
    source: "Medium",
    href: "https://medium.com/design-bootcamp/i-found-a-miracle-week-at-my-first-internship-as-a-product-designer-363a2d3ff4fe",
  },
  {
    title: "There’s a Real Correlation Between UX Process and Theatre Process",
    titleFi:
      "UX-prosessin ja teatteriprosessin välillä on todellinen yhteys",
    source: "Medium",
    href: "https://medium.com/design-bootcamp/theres-a-real-correlation-between-ux-process-and-theatre-process-55a15235af76",
  },
]

export default function HomePage() {
  const { language } = useLanguage()
  const fi = language === "fi"
  const t = (english: string, finnish: string) => (fi ? finnish : english)

  return (
    <>
      <SiteHeader />
      <ScrollToHash />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span>M. Afif Aryandana</span>
              <span>{t("Product designer", "Tuotesuunnittelija")}</span>
            </p>
            <h1>
              {t("Designing", "Suunnittelen")}{" "}
              <em>{t("useful", "hyödyllisiä")}</em>
              <br />
              {t("products", "tuotteita")}
            </h1>
            <div className="hero-introduction">
              <p>
                {t(
                  "I design thoughtful digital experiences for complex systems, combining research, product thinking, and clear interaction.",
                  "Suunnittelen harkittuja digitaalisia kokemuksia monimutkaisiin järjestelmiin yhdistämällä tutkimuksen, tuoteajattelun ja selkeän vuorovaikutuksen.",
                )}
              </p>
              <div className="hero-actions">
                <a className="hero-primary-action" href="#work">
                  {t("View selected work", "Katso valitut työt")} <Arrow />
                </a>
                <a href={cvUrl} target="_blank" rel="noreferrer" download>
                  {t("Download CV", "Lataa CV")}
                </a>
              </div>
            </div>
            <span className="hero-status">
              {t(
                "Open to product, project, and service design opportunities",
                "Avoin tuote-, projekti- ja palvelumuotoilun mahdollisuuksille",
              )}
            </span>
          </div>
        </section>

        <section className="home-section" id="work">
          <div className="section-head">
            <p>{t("Selected work", "Valitut työt")}</p>
            <span>01 — 04</span>
          </div>

          <div className="project-group-heading">
            <div>
              <span>01</span>
              <h2>{t("Ready to explore", "Tutustu nyt")}</h2>
            </div>
            <p>
              {t(
                "Published case studies and interactive prototypes",
                "Julkaistut case studyt ja interaktiiviset prototyypit",
              )}
            </p>
          </div>

          <div className="project-showcase">
            <article className="project-main">
              <Link
                className="project-media project-media--ugm"
                to="/projects/ugm-research-enterprises"
              >
                <img
                  src={ugmResearchImage}
                  alt="UGM Research Enterprises interface"
                />
                <span>
                  {t("View case study", "Katso case study")} <Arrow />
                </span>
              </Link>
              <div className="project-main-copy">
                <p>
                  {t(
                    "01 / Product design · 2025",
                    "01 / Tuotesuunnittelu · 2025",
                  )}
                </p>
                <h2>UGM Research Enterprises</h2>
                <span>
                  {t(
                    "An end-to-end research portal supporting 7,000+ researchers and 50+ internal users across complex academic workflows.",
                    "Kokonaisvaltainen tutkimusportaali, joka tukee yli 7 000 tutkijaa ja 50 sisäistä käyttäjää monimutkaisissa akateemisissa työnkuluissa.",
                  )}
                </span>
              </div>
            </article>

            <article className="project-card project-card--wide">
              <div className="project-media project-media--hydrogen">
                <div className="hydrogen-art" aria-hidden="true">
                  <span>H₂</span>
                  <div className="hydrogen-orbit hydrogen-orbit--one" />
                  <div className="hydrogen-orbit hydrogen-orbit--two" />
                  <i className="hydrogen-dot hydrogen-dot--one" />
                  <i className="hydrogen-dot hydrogen-dot--two" />
                  <small>Oulu · Finland</small>
                </div>
                <strong className="winner-badge">
                  {t("1st winner", "1. sija")}
                </strong>
              </div>
              <div className="project-card-copy">
                <p>02 / UniOulu Challenge · 2026</p>
                <h3>Hydrogen Innovation Challenge</h3>
                <span>
                  {t(
                    "An interactive learning concept that helps Oulu citizens understand upcoming hydrogen developments through an engaging and accessible experience.",
                    "Interaktiivinen oppimiskonsepti, joka auttaa oululaisia ymmärtämään tulevaa vetytalouden kehitystä kiinnostavalla ja saavutettavalla tavalla.",
                  )}
                </span>
                <div className="project-card-links">
                  <a
                    href="https://twine-ion-21992996.figma.site/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("View prototype", "Katso prototyyppi")} <Arrow />
                  </a>
                  <a
                    href="https://www.oulu.fi/en/events/unioulu-hydrogen-innovation-challenge-grand-finale"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("View event", "Katso tapahtuma")} <Arrow />
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="project-group-heading project-group-heading--upcoming">
            <div>
              <span>02</span>
              <h2>{t("Coming soon", "Tulossa pian")}</h2>
            </div>
            <p>
              {t(
                "Case studies currently being prepared",
                "Case studyt ovat parhaillaan valmisteilla",
              )}
            </p>
          </div>

          <div className="project-secondary">
            <article className="project-card">
              <div className="project-media project-media--dark">
                <img
                  src={dashboardImage}
                  alt="Owner Singgahsini dashboard interface"
                />
              </div>
              <div className="project-card-copy">
                <p>03 / Mamikos · 2023</p>
                <h3>Owner Singgahsini Dashboard</h3>
                <span>
                  {t(
                    "A control room that automated property performance reports for business owners, eliminating 100% of manual operations workflows.",
                    "Hallintanäkymä, joka automatisoi kiinteistöjen suoritusraportit omistajille ja poisti manuaaliset operatiiviset työnkulut kokonaan.",
                  )}
                </span>
              </div>
            </article>
            <article className="project-card">
              <div className="project-media project-media--dark">
                <img
                  src={disbursementImage}
                  alt="Disbursement management interface"
                />
              </div>
              <div className="project-card-copy">
                <p>04 / Mamikos · 2022</p>
                <h3>Disbursement Management</h3>
                <span>
                  {t(
                    "An ERP-controlled workflow that reduced repetitive work and human error, eliminating the need for 14 operations team members.",
                    "ERP-ohjattu työnkulku, joka vähensi toistuvaa työtä ja inhimillisiä virheitä sekä poisti 14 operatiivisen tiimin jäsenen manuaalisen työn tarpeen.",
                  )}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="home-section about-simple" id="about">
          <div className="section-head">
            <p>{t("About", "Minusta")}</p>
            <span>{t("Based in Finland", "Asun Suomessa")}</span>
          </div>
          <div className="about-simple-grid">
            <h2>
              {t("Designing with curiosity,", "Suunnittelua uteliaisuudella,")}
              <br />
              {t("clarity, and", "selkeydellä ja")}{" "}
              <em>{t("care.", "huolella.")}</em>
            </h2>
            <div className="about-copy">
              <div className="about-profile">
                <div className="about-portrait">
                  <img src={portrait} alt="M. Afif Aryandana" />
                </div>
                <div>
                  <strong>M. Afif Aryandana</strong>
                  <span>
                    {t(
                      "Product designer · Oulu, Finland",
                      "Tuotesuunnittelija · Oulu, Suomi",
                    )}
                  </span>
                </div>
              </div>
              <p>
                {t(
                  "I’m a product designer with over five years of experience creating B2B digital solutions in fast-paced teams. My work spans user research, interaction design, prototyping, testing, and service experience optimization.",
                  "Olen tuotesuunnittelija, jolla on yli viiden vuoden kokemus B2B-digitaalisten ratkaisujen luomisesta nopeatempoisissa tiimeissä. Työni kattaa käyttäjätutkimuksen, vuorovaikutussuunnittelun, prototypoinnin, testauksen ja palvelukokemuksen optimoinnin.",
                )}
              </p>
              <p>
                {t(
                  "I’m currently pursuing a Master’s degree in Interdisciplinary Product Innovation and Creation at the University of Oulu, while also representing the university as a student ambassador.",
                  "Suoritan parhaillani Oulun yliopistossa Interdisciplinary Product Innovation and Creation -maisteriohjelmaa ja toimin samalla yliopiston opiskelijalähettiläänä.",
                )}
              </p>
              <a href={cvUrl} target="_blank" rel="noreferrer" download>
                {t("Download CV", "Lataa CV")} <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="home-section" id="experience">
          <div className="section-head">
            <p>{t("Experience", "Kokemus")}</p>
            <span>{t("5+ years", "5+ vuotta")}</span>
          </div>
          <div className="experience-simple">
            {experience.map((item, index) => (
              <article key={item.company}>
                <div className="experience-meta">
                  <span>0{index + 1}</span>
                  <p>{fi ? item.periodFi : item.period}</p>
                </div>
                <div className="experience-title">
                  <h3>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  </h3>
                  <p>{fi ? item.roleFi : item.role}</p>
                </div>
                <div className="experience-description">
                  <p>{fi ? item.descriptionFi : item.description}</p>
                  <ul aria-label={`${item.company} highlights`}>
                    {(fi ? item.highlightsFi : item.highlights).map(
                      (highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ),
                    )}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section writing-simple">
          <div className="section-head">
            <p>{t("Writing", "Kirjoitukset")}</p>
            <span>{t("Selected notes", "Valitut tekstit")}</span>
          </div>
          <div>
            {articles.map((article, index) => (
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer"
                key={article.title}
              >
                <span>0{index + 1}</span>
                <h3>{fi ? article.titleFi : article.title}</h3>
                <p>{article.source}</p>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="simple-contact">
          <p>
            {t("Have a project in mind?", "Onko sinulla projekti mielessä?")}
          </p>
          <h2>{t("Let’s work together.", "Tehdään töitä yhdessä.")}</h2>
          <a href="mailto:aryandanaafif@gmail.com?subject=Website%20Inquiry">
            aryandanaafif@gmail.com <Arrow />
          </a>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 M. Afif Aryandana</p>
        <div>
          <a href={cvUrl} target="_blank" rel="noreferrer" download>
            {t("Download CV", "Lataa CV")}
          </a>
          <a
            href="https://linkedin.com/in/m-afif-aryandana"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top">{t("Back to top ↑", "Takaisin ylös ↑")}</a>
        </div>
      </footer>
    </>
  )
}
