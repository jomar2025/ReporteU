import DashboardHeader from "../components/DashboardHeader";
import ReportRow from "../components/ReportRow";

function Dashboard({
  currentUser,
  logout,
  myReports,
  setPage,
  openReport,
  setSuccessMessage,
  setReportError,
}) {
  return (
    <div className="dashboard-page">

      <DashboardHeader
        currentUser={currentUser}
        logout={logout}
      />

      <main className="dashboard-content">

        <div className="dashboard-welcome">

          <div>

            <span>
              BIENVENIDO DE NUEVO
            </span>

            <h1>
              Hola,{" "}
              {currentUser?.name?.split(" ")[0]}
            </h1>

            <p>
              Desde aquí puedes registrar y
              hacer seguimiento a tus
              problemáticas reportadas.
            </p>

          </div>

          <button
            className="dashboard-primary-button"
            onClick={() => {
              setSuccessMessage("");
              setReportError("");
              setPage("new-report");
            }}
            type="button"
          >
            + Nuevo reporte
          </button>

        </div>

        <div className="dashboard-stats">

          <div className="stat-card">

            <span>
              Total de reportes
            </span>

            <strong>
              {myReports.length}
            </strong>

          </div>

          <div className="stat-card">

            <span>
              Reportados
            </span>

            <strong>
              {
                myReports.filter(
                  (r) =>
                    r.status ===
                    "Reportado"
                ).length
              }
            </strong>

          </div>

          <div className="stat-card">

            <span>
              En proceso
            </span>

            <strong>
              {
                myReports.filter(
                  (r) =>
                    r.status ===
                    "En proceso"
                ).length
              }
            </strong>

          </div>

          <div className="stat-card">

            <span>
              Atendidos
            </span>

            <strong>
              {
                myReports.filter(
                  (r) =>
                    r.status ===
                    "Atendido"
                ).length
              }
            </strong>

          </div>

        </div>

        <div className="dashboard-section">

          <div className="dashboard-section-heading">

            <div>

              <span>
                SEGUIMIENTO
              </span>

              <h2>
                Mis reportes
              </h2>

            </div>

            {myReports.length > 0 && (

              <button
                onClick={() =>
                  setPage("my-reports")
                }
                type="button"
              >
                Ver todos →
              </button>

            )}

          </div>

          {myReports.length === 0 ? (

            <div className="empty-reports">

              <div className="empty-icon">
                +
              </div>

              <h3>
                Aún no tienes reportes
              </h3>

              <p>
                Cuando registres una
                problemática aparecerá aquí
                para que puedas hacer
                seguimiento.
              </p>

              <button
                className="dashboard-primary-button"
                onClick={() =>
                  setPage("new-report")
                }
                type="button"
              >
                Crear mi primer reporte
              </button>

            </div>

          ) : (

            <div className="report-list">

              {myReports
                .slice(0, 3)
                .map((report) => (

                  <ReportRow
                    key={report.id}
                    report={report}
                    onClick={() =>
                      openReport(report)
                    }
                  />

                ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Dashboard;