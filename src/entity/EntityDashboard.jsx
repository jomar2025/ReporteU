import StatusBadge from "../components/StatusBadge";
import logoAlcaldia from "../assets/logo1.png";

function EntityDashboard({
  currentEntity,
  entityReports,
  setPage,
  openEntityReport,
  handleEntityLogout,
}) {
  const total = entityReports.length;

  const reported = entityReports.filter(
    (report) => report.status === "Reportado"
  ).length;

  const inReview = entityReports.filter(
    (report) => report.status === "En revisión"
  ).length;

  const inProcess = entityReports.filter(
    (report) => report.status === "En proceso"
  ).length;

  const attended = entityReports.filter(
    (report) => report.status === "Atendido"
  ).length;

  return (
    <div className="dashboard-page">

      {/* =========================
         HEADER
      ========================= */}

      <header className="dashboard-header">

        <div className="dashboard-brand">

          <img
            src={logoAlcaldia}
            alt="Alcaldía de Barranquilla"
            />

          <div>

            <span>
              REPORTA BARRANQUILLA
            </span>

            <strong>
              Panel de entidad
            </strong>

          </div>

        </div>

        <div className="dashboard-user">

          <div className="user-avatar">
            {currentEntity?.name
              ?.charAt(0)
              .toUpperCase()}
          </div>

          <div className="user-info">

            <strong>
              {currentEntity?.name}
            </strong>

            <span>
              Entidad responsable
            </span>

          </div>

          <button
            onClick={handleEntityLogout}
            type="button"
          >
            Cerrar sesión
          </button>

        </div>

      </header>


      {/* =========================
         CONTENIDO
      ========================= */}

      <main className="dashboard-content">

        <div className="dashboard-welcome">

          <div>

            <span>
              GESTIÓN INSTITUCIONAL
            </span>

            <h1>
              {currentEntity?.name}
            </h1>

            <p>
              Consulta y gestiona los reportes
              ciudadanos asignados a tu entidad.
            </p>

          </div>

        </div>


        {/* =========================
           ESTADÍSTICAS
        ========================= */}

        <div className="dashboard-stats">

          <div className="stat-card">

            <span>
              Total de reportes
            </span>

            <strong>
              {total}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              Reportados
            </span>

            <strong>
              {reported}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              En revisión
            </span>

            <strong>
              {inReview}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              En proceso
            </span>

            <strong>
              {inProcess}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              Atendidos
            </span>

            <strong>
              {attended}
            </strong>

          </div>

        </div>


        {/* =========================
           REPORTES
        ========================= */}

        <div className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>

              <span>
                REPORTES ASIGNADOS
              </span>

              <h2>
                Incidencias de la entidad
              </h2>

            </div>

            <button
              onClick={() =>
                setPage("entity-reports")
              }
              type="button"
            >
              Ver todos →
            </button>

          </div>


          {entityReports.length === 0 ? (

            <div className="empty-reports">

              <div className="empty-icon">
                ✓
              </div>

              <h3>
                No tienes reportes asignados
              </h3>

              <p>
                Cuando un ciudadano registre
                una problemática correspondiente
                a tu entidad aparecerá aquí.
              </p>

            </div>

          ) : (

            <div className="report-list">

              {entityReports
                .slice(0, 5)
                .map((report) => (

                  <button
                    key={report.id}
                    className="report-row"
                    onClick={() =>
                      openEntityReport(
                        report
                      )
                    }
                    type="button"
                  >

                    <div className="report-row-main">

                      <div className="report-row-icon">
                        {report.category
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>

                        <span>
                          {report.category}
                        </span>

                        <strong>
                          {report.location}
                        </strong>

                        <small>
                          Registrado el{" "}
                          {report.date}
                        </small>

                      </div>

                    </div>

                    <div className="report-row-status">

                      <StatusBadge
                        status={
                          report.status
                        }
                      />

                      <span className="row-arrow">
                        →
                      </span>

                    </div>

                  </button>

                ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default EntityDashboard;