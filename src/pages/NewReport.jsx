import DashboardHeader from "../components/DashboardHeader";

function NewReport({
  currentUser,
  logout,
  reportForm,
  setReportForm,
  reportError,
  createReport,
  handleEvidenceChange,
  evidencePreview,
  removeEvidence,
  setPage,
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
            NUEVO REPORTE
          </span>

          <h1>
            Registrar una problemática
          </h1>

          <p>
            Completa la información para
            registrar la situación que deseas
            reportar.
          </p>

        </div>

        {reportError && (

          <div
            className="form-error"
            style={{
              maxWidth: "820px",
              marginBottom: "18px",
            }}
          >
            {reportError}
          </div>

        )}

        <form
          className="report-form"
          onSubmit={createReport}
        >

          {/* INFORMACIÓN */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                01
              </span>

              <div>

                <h3>
                  Información del reporte
                </h3>

                <p>
                  Describe la problemática que
                  encontraste.
                </p>

              </div>

            </div>

            <label>
              Categoría

              <select
                value={reportForm.category}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    category:
                      e.target.value,
                  }))
                }
              >

                <option value="">
                  Selecciona una categoría
                </option>

                <option value="Residuos sólidos">
                  Residuos sólidos
                </option>

                <option value="Fugas de agua">
                  Fugas de agua
                </option>

                <option value="Alumbrado público">
                  Alumbrado público
                </option>

                <option value="Lámparas dañadas">
                  Lámparas dañadas
                </option>

                <option value="Vía sin alumbrado">
                  Vía sin alumbrado
                </option>

                <option value="Daños en vías públicas">
                  Daños en vías públicas
                </option>

                <option value="Huecos">
                  Huecos
                </option>

                <option value="Espacio comunitario">
                  Espacio comunitario
                </option>

              </select>

            </label>

            <label>
              Descripción

              <textarea
                placeholder="Describe detalladamente la problemática..."
                rows="6"
                value={reportForm.description}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    description:
                      e.target.value,
                  }))
                }
              />

            </label>

            <label>
              Ubicación

              <input
                type="text"
                placeholder="Ejemplo: Calle 72 # 45-20, Barranquilla"
                value={reportForm.location}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    location:
                      e.target.value,
                  }))
                }
              />

            </label>

            {/* EVIDENCIA */}

            <label>
              Evidencia fotográfica

              <input
                id="evidence-input"
                type="file"
                accept="image/*"
                onChange={
                  handleEvidenceChange
                }
              />

              <span
                style={{
                  marginTop: "-12px",
                  color: "#85908b",
                  fontSize: "11px",
                  fontWeight: "400",
                }}
              >
                Puedes subir una fotografía
                como evidencia de la problemática.
                Máximo 5 MB.
              </span>

            </label>

            {evidencePreview && (

              <div
                style={{
                  marginTop: "-8px",
                  marginBottom: "20px",
                  padding: "15px",
                  border: "1px solid #dce5e1",
                  borderRadius: "12px",
                  background: "#f7faf8",
                }}
              >

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >

                  <strong
                    style={{
                      color:
                        "var(--green-deep)",
                      fontSize: "13px",
                    }}
                  >
                    Vista previa
                  </strong>

                  <button
                    type="button"
                    onClick={
                      removeEvidence
                    }
                    style={{
                      border: "0",
                      background:
                        "transparent",
                      color: "#9d3737",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    Eliminar imagen
                  </button>

                </div>

                <img
                  src={evidencePreview}
                  alt="Vista previa de la evidencia"
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "350px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    background: "#eef3f0",
                  }}
                />

              </div>

            )}

          </div>

          {/* MODALIDAD */}

          <div className="form-section">

            <div className="form-section-title">

              <span>
                02
              </span>

              <div>

                <h3>
                  Modalidad del reporte
                </h3>

                <p>
                  Selecciona cómo quieres que
                  aparezca tu identidad.
                </p>

              </div>

            </div>

            <div className="modality-options">

              <label
                className={
                  reportForm.modality ===
                  "Identificado"
                    ? "modality-option active"
                    : "modality-option"
                }
              >

                <input
                  type="radio"
                  name="modality"
                  value="Identificado"
                  checked={
                    reportForm.modality ===
                    "Identificado"
                  }
                  onChange={(e) =>
                    setReportForm((prev) => ({
                      ...prev,
                      modality:
                        e.target.value,
                    }))
                  }
                />

                <div>

                  <strong>
                    Identificado
                  </strong>

                  <span>
                    Tu identidad queda asociada
                    al reporte.
                  </span>

                </div>

              </label>

              <label
                className={
                  reportForm.modality ===
                  "Anónimo"
                    ? "modality-option active"
                    : "modality-option"
                }
              >

                <input
                  type="radio"
                  name="modality"
                  value="Anónimo"
                  checked={
                    reportForm.modality ===
                    "Anónimo"
                  }
                  onChange={(e) =>
                    setReportForm((prev) => ({
                      ...prev,
                      modality:
                        e.target.value,
                    }))
                  }
                />

                <div>

                  <strong>
                    Anónimo
                  </strong>

                  <span>
                    Tu identidad no será visible
                    públicamente.
                  </span>

                </div>

              </label>

            </div>

          </div>

          {/* ASIGNACIÓN */}

          <div className="automatic-assignment">

            <div className="assignment-icon">
              ↗
            </div>

            <div>

              <strong>
                Asignación automática
              </strong>

              <p>
                La plataforma asignará el
                reporte a la entidad responsable
                según la categoría seleccionada.
                Tú no tendrás que elegir la
                entidad.
              </p>

            </div>

          </div>

          <button
            type="submit"
            className="submit-report"
          >
            Registrar reporte
            <span>→</span>
          </button>

        </form>

      </main>

    </div>
  );
}

export default NewReport;