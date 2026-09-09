import DashboardHeader from "../components/DashboardHeader";
import StatusBadge from "../components/StatusBadge";
import StatusTimeline from "../components/StatusTimeline";

function ReportDetail({
  currentUser,
  logout,
  selectedReport,
  setPage,
}) {
  if (!selectedReport) {
    return (
      <div className="dashboard-page">

        <DashboardHeader
          currentUser={currentUser}
          logout={logout}
        />

        <main className="dashboard-content">

          <div className="empty-reports">

            <h3>
              No se encontró el reporte.
            </h3>

            <button
              className="dashboard-primary-button"
              onClick={() =>
                setPage("dashboard")
              }
              type="button"
            >
              Volver al panel
            </button>

          </div>

        </main>

      </div>
    );
  }

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
            setPage("my-reports")
          }
          type="button"
        >
          ← Volver a mis reportes
        </button>

        <div className="detail-header">

          <div>

            <span>
              REPORTE #{selectedReport.id}
            </span>

            <h1>
              {selectedReport.category}
            </h1>

            <p>
              Registrado el{" "}
              {selectedReport.date}
            </p>

          </div>

          <StatusBadge
            status={
              selectedReport.status
            }
          />

        </div>

        <div className="detail-grid">

          <div className="detail-card">

            <span>
              CATEGORÍA
            </span>

            <strong>
              {selectedReport.category}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              ENTIDAD RESPONSABLE
            </span>

            <strong>
              {selectedReport.entity}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              MODALIDAD
            </span>

            <strong>
              {selectedReport.modality}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              UBICACIÓN
            </span>

            <strong>
              {selectedReport.location}
            </strong>

          </div>

        </div>

        <div className="detail-description">

          <span>
            DESCRIPCIÓN
          </span>

          <p>
            {selectedReport.description}
          </p>

        </div>

        {selectedReport.evidence && (

          <div className="detail-description">

            <span>
              EVIDENCIA FOTOGRÁFICA
            </span>

            <div
              style={{
                marginTop: "15px",
              }}
            >

              <img
                src={
                  selectedReport.evidence
                }
                alt="Evidencia del reporte"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "500px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  background:
                    "#f1f5f3",
                }}
              />

            </div>

          </div>

        )}

        <div className="tracking-card">

          <div className="tracking-heading">

            <div>

              <span>
                SEGUIMIENTO
              </span>

              <h2>
                Estado del reporte
              </h2>

            </div>

          </div>

          <StatusTimeline
            status={
              selectedReport.status
            }
          />

        </div>

      </main>

    </div>
  );
}

export default ReportDetail;