import DashboardHeader from "../components/DashboardHeader";
import ReportRow from "../components/ReportRow";

function MyReports({
  currentUser,
  logout,
  myReports,
  setPage,
  openReport,
  successMessage,
}) {
  return (
    <div className="dashboard-page">

      <DashboardHeader
        currentUser={currentUser}
        logout={logout}
      />

      <main className="dashboard-content">

        <button
          className="dashboard-back"
          onClick={() =>
            setPage("dashboard")
          }
          type="button"
        >
          ← Volver al panel
        </button>

        <div className="dashboard-page-title">

          <span>
            SEGUIMIENTO CIUDADANO
          </span>

          <h1>
            Mis reportes
          </h1>

          <p>
            Consulta todos los reportes que
            has realizado y revisa su estado.
          </p>

        </div>

        {successMessage && (
          <div className="form-success">
            {successMessage}
          </div>
        )}

        {myReports.length === 0 ? (

          <div className="empty-reports large">

            <div className="empty-icon">
              +
            </div>

            <h3>
              No tienes reportes registrados
            </h3>

            <p>
              Registra una problemática para
              comenzar a hacer seguimiento.
            </p>

            <button
              className="dashboard-primary-button"
              onClick={() =>
                setPage("new-report")
              }
              type="button"
            >
              Crear reporte
            </button>

          </div>

        ) : (

          <div className="report-list large-list">

            {myReports.map(
              (report) => (

                <ReportRow
                  key={report.id}
                  report={report}
                  onClick={() =>
                    openReport(report)
                  }
                />

              )
            )}

          </div>

        )}

      </main>

    </div>
  );
}

export default MyReports;