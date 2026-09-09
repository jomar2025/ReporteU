import DashboardHeader from "../components/DashboardHeader";
import StatusBadge from "../components/StatusBadge";
import StatusTimeline from "../components/StatusTimeline";

function EntityReportDetail({
  currentEntity,
  selectedEntityReport,
  users,
  setPage,
  updateReportStatus,
  handleEntityLogout,
}) {
  if (!selectedEntityReport) {
    return (
      <div className="dashboard-page">

        <DashboardHeader
          currentUser={{
            name: currentEntity?.name,
          }}
          logout={handleEntityLogout}
        />

        <main className="dashboard-content">

          <div className="empty-reports">

            <h3>
              No se encontró el reporte.
            </h3>

            <button
              className="dashboard-primary-button"
              onClick={() =>
                setPage("entity-dashboard")
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

  /*
    Buscar el ciudadano relacionado con el reporte.
    Solo se utilizará cuando el reporte sea identificado.
  */
  const reporter =
    selectedEntityReport.modality === "Identificado"
      ? users?.find(
          (user) =>
            String(user.id) ===
            String(selectedEntityReport.userId)
        )
      : null;

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
            setPage("entity-reports")
          }
          type="button"
        >
          ← Volver a reportes
        </button>

        {/* ENCABEZADO */}

        <div className="detail-header">

          <div>

            <span>
              REPORTE #{selectedEntityReport.id}
            </span>

            <h1>
              {selectedEntityReport.category}
            </h1>

            <p>
              Registrado el{" "}
              {selectedEntityReport.date}
            </p>

          </div>

          <StatusBadge
            status={
              selectedEntityReport.status
            }
          />

        </div>

        {/* INFORMACIÓN DEL REPORTE */}

        <div className="detail-grid">

          <div className="detail-card">

            <span>
              CATEGORÍA
            </span>

            <strong>
              {selectedEntityReport.category}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              UBICACIÓN
            </span>

            <strong>
              {selectedEntityReport.location}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              MODALIDAD
            </span>

            <strong>
              {selectedEntityReport.modality}
            </strong>

          </div>

          <div className="detail-card">

            <span>
              ENTIDAD RESPONSABLE
            </span>

            <strong>
              {selectedEntityReport.entity}
            </strong>

          </div>

        </div>

        {/* DATOS DEL CIUDADANO */}

        <div className="detail-description">

          <span>
            DATOS DEL CIUDADANO
          </span>

          {selectedEntityReport.modality ===
          "Identificado" ? (

            reporter ? (
              <div
                style={{
                  marginTop: "18px",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, minmax(0, 1fr))",
                  gap: "15px",
                }}
              >

                <div className="detail-card">

                  <span>
                    NOMBRE COMPLETO
                  </span>

                  <strong>
                    {reporter.name}
                  </strong>

                </div>

                <div className="detail-card">

                  <span>
                    CORREO ELECTRÓNICO
                  </span>

                  <strong>
                    {reporter.email}
                  </strong>

                </div>

              </div>
            ) : (

              <p
                style={{
                  marginTop: "15px",
                }}
              >
                No se encontraron los datos del
                ciudadano asociado al reporte.
              </p>

            )

          ) : (

            <div
              style={{
                marginTop: "15px",
                padding: "18px",
                borderRadius: "10px",
                background: "#f2faf7",
                border: "1px solid #d7eae2",
              }}
            >

              <strong
                style={{
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Reporte anónimo
              </strong>

              <p
                style={{
                  margin: 0,
                }}
              >
                La identidad del ciudadano no está
                disponible para este reporte.
              </p>

            </div>

          )}

        </div>

        {/* DESCRIPCIÓN */}

        <div className="detail-description">

          <span>
            DESCRIPCIÓN
          </span>

          <p>
            {selectedEntityReport.description}
          </p>

        </div>

        {/* EVIDENCIA */}

        {selectedEntityReport.evidence && (

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
                  selectedEntityReport.evidence
                }
                alt="Evidencia del reporte"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "500px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  background: "#f1f5f3",
                }}
              />

            </div>

          </div>

        )}

        {/* CAMBIO DE ESTADO */}

        <div className="tracking-card">

          <div className="tracking-heading">

            <div>

              <span>
                GESTIÓN DEL REPORTE
              </span>

              <h2>
                Actualizar estado
              </h2>

            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4, 1fr)",
              gap: "10px",
              marginBottom: "30px",
            }}
          >

            <button
              type="button"
              className="dashboard-primary-button"
              onClick={() =>
                updateReportStatus(
                  selectedEntityReport.id,
                  "Reportado"
                )
              }
            >
              Reportado
            </button>

            <button
              type="button"
              className="dashboard-primary-button"
              onClick={() =>
                updateReportStatus(
                  selectedEntityReport.id,
                  "En revisión"
                )
              }
            >
              En revisión
            </button>

            <button
              type="button"
              className="dashboard-primary-button"
              onClick={() =>
                updateReportStatus(
                  selectedEntityReport.id,
                  "En proceso"
                )
              }
            >
              En proceso
            </button>

            <button
              type="button"
              className="dashboard-primary-button"
              onClick={() =>
                updateReportStatus(
                  selectedEntityReport.id,
                  "Atendido"
                )
              }
            >
              Atendido
            </button>

          </div>

          <StatusTimeline
            status={
              selectedEntityReport.status
            }
          />

        </div>

      </main>

    </div>
  );
}

export default EntityReportDetail;