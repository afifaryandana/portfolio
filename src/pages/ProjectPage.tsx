import { useEffect, useRef } from "react"
import { Link } from "react-router"
import fundingFlow from "../assets/ugm-funding-flow-light.png"
import processImage from "../assets/ugm-process-light.png"
import reportingFlow from "../assets/ugm-reporting-flow-light.png"
import heroImage from "../assets/ugm-research.png"
import userFlow from "../assets/ugm-user-flow-light.png"
import SiteHeader, { Arrow } from "../components/SiteHeader"
import { useLanguage } from "../i18n"

const roles = [
  {
    title: "Superadmin",
    titleFi: "Pääkäyttäjä",
    description:
      "Manages system-wide configuration, creates research units, and assigns unit administrators.",
    descriptionFi:
      "Hallinnoi järjestelmän asetuksia, luo tutkimusyksiköitä ja nimeää niiden ylläpitäjät.",
  },
  {
    title: "Research Unit Administrator",
    titleFi: "Tutkimusyksikön ylläpitäjä",
    description:
      "Maintains the research unit profile and assigns Grant Manager and Research Management roles.",
    descriptionFi:
      "Ylläpitää tutkimusyksikön profiilia ja nimeää apurahapäälliköt sekä tutkimushallinnon roolit.",
  },
  {
    title: "Grant Manager",
    titleFi: "Apurahapäällikkö",
    description:
      "Creates grants, verifies proposal administration, and reviews final research reports.",
    descriptionFi:
      "Luo apurahoja, tarkistaa hakemusten hallinnolliset tiedot ja arvioi lopulliset tutkimusraportit.",
  },
  {
    title: "Researcher",
    titleFi: "Tutkija",
    description:
      "Creates ideas, submits proposals, conducts research, and reports the final research output.",
    descriptionFi:
      "Luo tutkimusideoita, jättää hakemuksia, toteuttaa tutkimusta ja raportoi lopputulokset.",
  },
]

const uiDemos = [
  {
    title: "Landing page",
    titleFi: "Aloitussivu",
    description:
      "Introduces the platform and gives users an overview of researchers, grants, ideas, proposals, research, and published outputs.",
    descriptionFi:
      "Esittelee alustan ja tarjoaa yleiskuvan tutkijoista, apurahoista, ideoista, hakemuksista, tutkimuksista ja julkaistuista tuloksista.",
    src: "https://framerusercontent.com/assets/TsmLPLxtIVnIMQtgw2jEjsmdh3I.mp4",
  },
  {
    title: "Superadmin",
    titleFi: "Pääkäyttäjä",
    description:
      "A system-level workspace for creating research units and assigning the administrators who manage them.",
    descriptionFi:
      "Järjestelmätason työtila tutkimusyksiköiden luomiseen ja niiden ylläpitäjien nimeämiseen.",
    src: "https://framerusercontent.com/assets/KF1jDf1xAOlGolhleHWMn240Yzg.mp4",
  },
  {
    title: "Research Unit Administrator",
    titleFi: "Tutkimusyksikön ylläpitäjä",
    description:
      "One place to maintain the unit profile, delegate grant-management roles, and keep responsibilities organized.",
    descriptionFi:
      "Yksi työtila yksikön profiilin ylläpitoon, apurahahallinnon roolien jakamiseen ja vastuiden organisointiin.",
    src: "https://framerusercontent.com/assets/nuul8NeAtFFW2DdxRcCIw6pawjo.mp4",
  },
  {
    title: "Grant Manager",
    titleFi: "Apurahapäällikkö",
    description:
      "A central workspace for creating grants, verifying proposal administration, and reviewing final reports.",
    descriptionFi:
      "Keskitetty työtila apurahojen luomiseen, hakemusten tarkistamiseen ja loppuraporttien arviointiin.",
    src: "https://framerusercontent.com/assets/4Hcb9WRP9uIiwZDc4UIe7YBGtE.mp4",
  },
  {
    title: "Researcher",
    titleFi: "Tutkija",
    description:
      "The core journey for creating ideas, submitting proposals, conducting research, and reporting findings.",
    descriptionFi:
      "Tutkijan keskeinen polku ideoiden luomisesta ja hakemusten jättämisestä tutkimukseen ja tulosten raportointiin.",
    src: "https://framerusercontent.com/assets/kc7mFXvc7m13o05D69fw7yaWIlo.mp4",
  },
]

function UiVideo({ src, title }: { src: string title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play()
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      aria-label={`${title} interface demonstration`}
      loop
      muted
      playsInline
      preload="metadata"
    />
  )
}

export default function ProjectPage() {
  const { language } = useLanguage()
  const fi = language === "fi"
  const t = (english: string, finnish: string) => (fi ? finnish : english)

  return (
    <>
      <SiteHeader project />
      <main className="case-study">
        <div className="case-back">
          <Link to="/">{t("← Back to work", "← Takaisin töihin")}</Link>
        </div>

        <section className="case-hero">
          <p className="overline">
            {t(
              "Case study · Product design · 2025",
              "Case study · Tuotesuunnittelu · 2025",
            )}
          </p>
          <h1>Universitas Gadjah Mada Research Enterprises</h1>
          <div className="case-meta">
            <div>
              <span>{t("Role", "Rooli")}</span>
              <p>{t("Solo Product Designer", "Vastaava tuotesuunnittelija")}</p>
            </div>
            <div>
              <span>{t("Client", "Asiakas")}</span>
              <p>Universitas Gadjah Mada</p>
            </div>
            <div>
              <span>{t("Scope", "Laajuus")}</span>
              <p>
                {t(
                  "End-to-end product design",
                  "Kokonaisvaltainen tuotesuunnittelu",
                )}
              </p>
            </div>
            <div>
              <span>{t("Year", "Vuosi")}</span>
              <p>2025-2026</p>
            </div>
            <div>
              <span>{t("Staging", "Testiversio")}</span>
              <p>
                <a
                  href="https://dev.ugmresearch.id"
                  target="_blank"
                  rel="noreferrer"
                >
                  dev.ugmresearch.id ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="case-visual case-visual--hero">
          <img src={heroImage} alt="UGM Research Enterprises product preview" />
        </div>

        <section className="case-text-block">
          <p className="case-label">{t("Overview", "Yleiskatsaus")}</p>
          <div>
            <h2>
              {t(
                "One connected portal for the complete research journey.",
                "Yksi yhtenäinen portaali koko tutkimusprosessiin.",
              )}
            </h2>
            <p>
              {t(
                "UGM Research Enterprises is an end-to-end research portal that digitalizes researcher and internal-team workflows—from idea creation and funding proposals to research activity and output reporting. The product supports more than 7,000 researchers and 50 internal users at Universitas Gadjah Mada.",
                "UGM Research Enterprises on kokonaisvaltainen tutkimusportaali, joka digitalisoi tutkijoiden ja sisäisten tiimien työnkulut ideoiden luomisesta ja rahoitushakemuksista tutkimuksen toteutukseen ja tulosten raportointiin. Tuote palvelee yli 7 000 tutkijaa ja 50 sisäistä käyttäjää Universitas Gadjah Madassa.",
              )}
            </p>
          </div>
        </section>

        <section className="case-goal">
          <div>
            <p className="case-label">{t("The goal", "Tavoite")}</p>
            <h2>
              {t(
                "Make research management simpler and smoother.",
                "Tehdä tutkimushallinnosta yksinkertaisempaa ja sujuvampaa.",
              )}
            </h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              {t("More efficient", "Tehokkaampi")}
            </li>
            <li>
              <span>02</span>
              {t("More transparent", "Läpinäkyvämpi")}
            </li>
            <li>
              <span>03</span>
              {t("More accountable", "Vastuullisempi")}
            </li>
            <li>
              <span>04</span>
              {t("More scalable", "Skaalautuvampi")}
            </li>
          </ol>
        </section>

        <section className="case-process">
          <div className="case-section-title">
            <p className="case-label">{t("Process", "Prosessi")}</p>
            <h2>
              {t(
                "Understanding a complex, multi-role system.",
                "Monimutkaisen, moniroolisen järjestelmän ymmärtäminen.",
              )}
            </h2>
            <p>
              {t(
                "The work began by mapping responsibilities, dependencies, and handoffs across six distinct user roles before defining the core product flows.",
                "Työ alkoi kuuden käyttäjäroolin vastuiden, riippuvuuksien ja siirtymien kartoittamisesta ennen tuotteen keskeisten työnkulkujen määrittelyä.",
              )}
            </p>
          </div>
          <div className="process-image">
            <div className="image-caption">
              <span>01</span>
              <p>
                {t(
                  "Design process and product roles",
                  "Suunnitteluprosessi ja tuoteroolit",
                )}
                <a href={processImage} target="_blank" rel="noreferrer">
                  {t("Open full size ↗", "Avaa täysikokoisena ↗")}
                </a>
              </p>
            </div>
            <a
              className="flow-image-link"
              href={processImage}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the design process flow at full size"
            >
              <img
                src={processImage}
                alt="Design process and product user roles"
              />
            </a>
          </div>
          <div className="process-image">
            <div className="image-caption">
              <span>02</span>
              <p>
                {t(
                  "Role setup and access flow",
                  "Roolien määritys ja käyttöoikeudet",
                )}
                <a href={userFlow} target="_blank" rel="noreferrer">
                  {t("Open full size ↗", "Avaa täysikokoisena ↗")}
                </a>
              </p>
            </div>
            <a
              className="flow-image-link"
              href={userFlow}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the administrator setup flow at full size"
            >
              <img src={userFlow} alt="Administrator setup user flow" />
            </a>
          </div>
        </section>

        <section className="role-section">
          <div className="case-section-title">
            <p className="case-label">
              {t("Product structure", "Tuotteen rakenne")}
            </p>
            <h2>
              {t(
                "One platform, designed for different responsibilities.",
                "Yksi alusta eri vastuualueille.",
              )}
            </h2>
          </div>
          <div className="role-grid">
            {roles.map((role, index) => (
              <article key={role.title}>
                <span>0{index + 1}</span>
                <h3>{fi ? role.titleFi : role.title}</h3>
                <p>{fi ? role.descriptionFi : role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ui-showcase">
          <div className="case-section-title">
            <p className="case-label">{t("Interface", "Käyttöliittymä")}</p>
            <h2>{t("See the product in motion.", "Näe tuote toiminnassa.")}</h2>
            <p>
              {t(
                "Each workspace was shaped around the responsibilities of a specific role while keeping the complete research process connected.",
                "Jokainen työtila suunniteltiin tietyn roolin vastuiden ympärille säilyttäen koko tutkimusprosessi yhtenäisenä.",
              )}
            </p>
          </div>
          <div className="ui-demo-list">
            {uiDemos.map((demo, index) => (
              <article className="ui-demo" key={demo.title}>
                <div>
                  <span>0{index + 1}</span>
                  <h3>{fi ? demo.titleFi : demo.title}</h3>
                  <p>{fi ? demo.descriptionFi : demo.description}</p>
                </div>
                <div className="ui-video">
                  <UiVideo
                    src={demo.src}
                    title={fi ? demo.titleFi : demo.title}
                  />
                  <span>
                    {t("Playing when in view", "Toistetaan näkyvissä")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-process case-process--compact">
          <div className="case-section-title">
            <p className="case-label">{t("Key journeys", "Keskeiset polut")}</p>
            <h2>
              {t(
                "From funding proposal to final report.",
                "Rahoitushakemuksesta loppuraporttiin.",
              )}
            </h2>
          </div>
          <div className="process-image">
            <div className="image-caption">
              <span>03</span>
              <p>
                {t(
                  "Proposal funding and review flow",
                  "Rahoitushakemuksen ja arvioinnin työnkulku",
                )}
                <a href={fundingFlow} target="_blank" rel="noreferrer">
                  {t("Open full size ↗", "Avaa täysikokoisena ↗")}
                </a>
              </p>
            </div>
            <a
              className="flow-image-link"
              href={fundingFlow}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the research funding flow at full size"
            >
              <img src={fundingFlow} alt="Research proposal funding flow" />
            </a>
          </div>
          <div className="process-image">
            <div className="image-caption">
              <span>04</span>
              <p>
                {t(
                  "Research reporting flow",
                  "Tutkimuksen raportoinnin työnkulku",
                )}
                <a href={reportingFlow} target="_blank" rel="noreferrer">
                  {t("Open full size ↗", "Avaa täysikokoisena ↗")}
                </a>
              </p>
            </div>
            <a
              className="flow-image-link"
              href={reportingFlow}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the research reporting flow at full size"
            >
              <img src={reportingFlow} alt="Research reporting flow" />
            </a>
          </div>
        </section>

        <section className="case-learning">
          <p className="case-label">{t("Learning", "Opit")}</p>
          <blockquote>
            {t(
              "“Being the solo designer taught me to balance many different needs, make decisions independently, and turn a complex research system into something people could use with confidence.”",
              "”Ainoana suunnittelijana toimiminen opetti minua tasapainottamaan erilaisia tarpeita, tekemään päätöksiä itsenäisesti ja muuttamaan monimutkaisen tutkimusjärjestelmän ratkaisuksi, jota ihmiset voivat käyttää luottavaisesti.”",
            )}
          </blockquote>
        </section>

        <section className="next-project">
          <p>{t("End of case study", "Case studyn loppu")}</p>
          <h2>
            {t(
              "Explore more selected work.",
              "Tutustu muihin valittuihin töihin.",
            )}
          </h2>
          <Link to="/#work">
            {t("Back to projects", "Takaisin projekteihin")} <Arrow />
          </Link>
        </section>
      </main>
      <footer className="footer">
        <p>© 2026 M. Afif Aryandana</p>
        <a href="#top">{t("Back to top ↑", "Takaisin ylös ↑")}</a>
      </footer>
    </>
  )
}
