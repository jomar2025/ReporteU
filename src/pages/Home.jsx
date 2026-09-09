import logoAlcaldia from "../assets/logo1.png";
import fondo from "../assets/fondo.jpg";

function Home({
  menuOpen,
  setMenuOpen,
  goHome,
  goToLogin,
  goToRegister,
  goToEntityLogin,
  scrollToSection,
}) {
  return (
    <div className="site">

      <header className="header">

        <div className="header-inner">

          <button
            className="brand"
            onClick={goHome}
            type="button"
          >

            <img
              src={logoAlcaldia}
              alt="Alcaldía de Barranquilla"
              className="brand-logo"
            />

            <div className="brand-text">

              <span>
                DISTRITO DE BARRANQUILLA
              </span>

              <strong>
                Reporta Barranquilla
              </strong>

            </div>

          </button>

          <nav
            className={`nav ${
              menuOpen
                ? "nav-open"
                : ""
            }`}
          >

            <button
              onClick={goHome}
              type="button"
            >
              Inicio
            </button>

            <button
              onClick={() =>
                scrollToSection("como-funciona")
              }
              type="button"
            >
              ¿Cómo funciona?
            </button>

            <button
              onClick={() =>
                scrollToSection("reportar")
              }
              type="button"
            >
              ¿Qué puedes reportar?
            </button>

            <div className="mobile-nav-actions">

              <button
                className="nav-login"
                onClick={goToLogin}
                type="button"
              >
                Iniciar sesión
              </button>

              <button
                className="nav-register"
                onClick={goToRegister}
                type="button"
              >
                Registrarse
              </button>

            </div>

          </nav>

          <div className="header-actions">

            <button
              className="nav-login"
              onClick={goToLogin}
              type="button"
            >
              Iniciar sesión
            </button>

            <button
              className="nav-register"
              onClick={goToRegister}
              type="button"
            >
              Registrarse
            </button>
            <button
              className="nav-entity"
              onClick={goToEntityLogin}
              type="button"
            >
              Acceso entidad
            </button>

          </div>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Abrir menú"
            type="button"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </header>

      <main>

        {/* HERO */}

        <section className="hero">

          <div className="hero-content">

            <div className="hero-copy">

              <span className="eyebrow">
                PLATAFORMA DE PARTICIPACIÓN
                CIUDADANA
              </span>

              <h1>
                Una mejor ciudad
                <br />
                comienza contigo.
              </h1>

              <p>
                Reporta las problemáticas de
                tu comunidad y realiza
                seguimiento al estado de cada
                solicitud desde un solo lugar.
              </p>

              <div className="hero-buttons">

                <button
                  className="btn-primary"
                  onClick={goToRegister}
                  type="button"
                >
                  Crear una cuenta
                  <span>→</span>
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    scrollToSection(
                      "como-funciona"
                    )
                  }
                  type="button"
                >
                  Conoce cómo funciona
                </button>

              </div>

              <div className="hero-info">

                <div>
                  <strong>100%</strong>
                  <span>Digital</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Disponible</span>
                </div>

                <div>
                  <strong>1</strong>
                  <span>Solo lugar</span>
                </div>

              </div>

            </div>

            <div className="hero-image-wrapper">

              <img
                src={fondo}
                alt="Barranquilla"
                className="hero-image"
              />

              <div className="hero-caption">

                <strong>
                  Barranquilla
                </strong>

                <span>
                  Construimos ciudad entre
                  todos
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* INTRO */}

        <section className="intro">

          <div>

            <span className="section-label">
              PARTICIPACIÓN CIUDADANA
            </span>

            <h2>
              Tu reporte puede
              <br />
              generar un cambio.
            </h2>

          </div>

          <p>
            Esta plataforma permite registrar
            problemáticas comunitarias de
            manera organizada y consultar el
            estado de cada reporte, facilitando
            la comunicación entre la ciudadanía
            y las entidades responsables.
          </p>

        </section>

        {/* COMO FUNCIONA */}

        <section
          className="steps-section"
          id="como-funciona"
        >

          <div className="section-heading">

            <div>

              <span className="section-label">
                ASÍ DE FÁCIL
              </span>

              <h2>
                ¿Cómo funciona?
              </h2>

            </div>

            <p>
              Desde el registro hasta el
              seguimiento, todo está organizado
              para que puedas consultar tus
              reportes fácilmente.
            </p>

          </div>

          <div className="steps-grid">

            <article className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                +
              </div>

              <h3>
                Crea tu cuenta
              </h3>

              <p>
                Regístrate con tus datos e
                inicia sesión para acceder a
                tu panel ciudadano.
              </p>

            </article>

            <article className="step-card featured">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                ⌁
              </div>

              <h3>
                Registra una problemática
              </h3>

              <p>
                Selecciona una categoría,
                describe la situación, indica
                la ubicación y agrega evidencia.
              </p>

            </article>

            <article className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                ✓
              </div>

              <h3>
                Haz seguimiento
              </h3>

              <p>
                Consulta desde tu panel el
                estado en que se encuentra cada
                reporte realizado.
              </p>

            </article>

          </div>

        </section>

        {/* REPORTES */}

        <section
          className="reports-section"
          id="reportar"
        >

          <div className="section-heading reports-heading">

            <div>

              <span className="section-label">
                PROBLEMÁTICAS
              </span>

              <h2>
                ¿Qué puedes reportar?
              </h2>

            </div>

            <button
              className="text-button"
              onClick={goToRegister}
              type="button"
            >
              Crear un reporte
              <span>→</span>
            </button>

          </div>

          <div className="reports-grid">

            <article className="report-card">

              <span>01</span>

              <div className="report-icon">
                ♻
              </div>

              <h3>
                Residuos sólidos
              </h3>

              <p>
                Acumulación de basura y
                situaciones relacionadas con
                residuos en espacios públicos.
              </p>

            </article>

            <article className="report-card">

              <span>02</span>

              <div className="report-icon">
                💧
              </div>

              <h3>
                Fugas de agua
              </h3>

              <p>
                Reporta fugas o situaciones
                relacionadas con el servicio de
                agua.
              </p>

            </article>

            <article className="report-card">

              <span>03</span>

              <div className="report-icon">
                ☼
              </div>

              <h3>
                Alumbrado público
              </h3>

              <p>
                Lámparas dañadas, vías sin
                alumbrado o fallas del servicio
                de iluminación.
              </p>

            </article>

            <article className="report-card">

              <span>04</span>

              <div className="report-icon">
                ⌂
              </div>

              <h3>
                Vías públicas
              </h3>

              <p>
                Huecos, daños y deterioro en
                calles y vías de la ciudad.
              </p>

            </article>

            <article className="report-card">

              <span>05</span>

              <div className="report-icon">
                ◇
              </div>

              <h3>
                Espacio comunitario
              </h3>

              <p>
                Afectaciones relacionadas con
                espacios de uso comunitario.
              </p>

            </article>

          </div>

        </section>

        {/* PRIVACIDAD */}

        <section className="privacy-section">

          <div className="privacy-card">

            <div className="privacy-icon">
              ◉
            </div>

            <div>

              <span className="section-label">
                TU PRIVACIDAD
              </span>

              <h2>
                Decide cómo realizar tu
                reporte.
              </h2>

              <p>
                Puedes realizar un reporte
                identificado o anónimo. En el
                reporte anónimo tu identidad no
                será visible públicamente en la
                información del reporte.
              </p>

            </div>

            <div className="privacy-options">

              <div>

                <strong>
                  Identificado
                </strong>

                <span>
                  Tu identidad está asociada al
                  reporte.
                </span>

              </div>

              <div>

                <strong>
                  Anónimo
                </strong>

                <span>
                  Tu identidad no será visible
                  públicamente.
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta-section">

          <div>

            <span className="section-label">
              PARTICIPA
            </span>

            <h2>
              Tu ciudad también
              <br />
              necesita de ti.
            </h2>

            <p>
              Regístrate y empieza a reportar
              las situaciones que afectan a tu
              comunidad.
            </p>

          </div>

          <button
            className="btn-light"
            onClick={goToRegister}
            type="button"
          >
            Registrarme ahora
            <span>→</span>
          </button>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <img
              src={logoAlcaldia}
              alt="Alcaldía de Barranquilla"
              className="footer-logo"
            />

            <div>

              <strong>
                Reporta Barranquilla
              </strong>

              <p>
                Plataforma de reporte
                ciudadano de problemáticas
                comunitarias.
              </p>

            </div>

          </div>

          <div className="footer-links">
              <button
                onClick={goHome}
                type="button"
              >
                Inicio
              </button>

              <button
                onClick={() =>
                  scrollToSection(
                    "como-funciona"
                  )
                }
                type="button"
              >
                ¿Cómo funciona?
              </button>
              <button
                onClick={goToLogin}
                type="button"
              >
                Iniciar sesión
              </button>

              <button
                onClick={goToEntityLogin}
                type="button"
              >
                Acceso institucional
              </button>

            </div>
        </div>
        <div className="footer-bottom">
          <span>
            Copyright © Omar Arrieta - Juan Alarcón
          </span>
          <span>
            Barranquilla, Colombia · 2026
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;