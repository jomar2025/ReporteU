import DashboardHeader from "../components/DashboardHeader";
import StatusBadge from "../components/StatusBadge";

function EntityReports({
  currentEntity,
  entityReports,
  setPage,
  openEntityReport,
  handleEntityLogout,
}) {
  return (
    <div className="dashboard-page">

      <DashboardHeader
        currentUser={{
          name: currentEntity?.name,
        }}
        logout={handleEntityLogout}
      />

      <main className="dashboard-content">

        <button
          className="dashboard-back"
          onClick={() =>
            setPage("entity-dashboard")
          }
          type="button"
        >
          ← Volver al panel
        </button>

        <div className="dashboard-page-title">

          <span>
            GESTIÓN INSTITUCIONAL
          </span>

          <h1>
            Reportes asignados
          </h1>

          <p>
            Consulta las incidencias asignadas
            a {currentEntity?.name}.
          </p>

        </div>

        {entityReports.length === 0 ? (

          <div className="empty-reports large">

            <div className="empty-icon">
              ✓
            </div>

            <h3>
              No hay reportes asignados
            </h3>

            <p>
              Actualmente no existen reportes
              correspondientes a tu entidad.
            </p>

          </div>

        ) : (

          <div className="report-list large-list">

            {entityReports.map((report) => (

              <button
                key={report.id}
                className="report-row"
                onClick={() =>
                  openEntityReport(report)
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
                    status={report.status}
                  />

                  <span className="row-arrow">
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default EntityReports;