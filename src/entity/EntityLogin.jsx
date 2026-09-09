import logoAlcaldia from "../assets/logo1.png";

function EntityLogin({
  entityForm,
  setEntityForm,
  entityError,
  handleEntityLogin,
  goHome,
}) {
  return (
    <div className="auth-page">

      {/* =========================
         PARTE IZQUIERDA
      ========================= */}

      <div className="auth-left">

        <div className="auth-brand">
          <img
            src={logoAlcaldia}
            alt="Alcaldía de Barranquilla"
          />
        </div>

        <div className="auth-left-content">

          <span>
            REPORTA BARRANQUILLA
          </span>

          <h1>
            Gestión de
            <br />
            incidencias urbanas.
          </h1>

          <p>
            Accede al panel de gestión de
            tu entidad para consultar y
            atender los reportes asignados.
          </p>

        </div>

        <div className="auth-footer-text">
          Copyright © Omar Arrieta - Juan Alarcón
        </div>

      </div>


      {/* =========================
         PARTE DERECHA
      ========================= */}

      <div className="auth-right">

        <button
          className="back-home"
          onClick={goHome}
          type="button"
        >
          ← Volver al inicio
        </button>

        <div className="auth-box">

          <div className="auth-heading">

            <span>
              ACCESO INSTITUCIONAL
            </span>

            <h2>
              Panel de entidad
            </h2>

            <p>
              Ingresa con las credenciales
              asignadas a tu entidad.
            </p>

          </div>


          {/* ERROR */}

          {entityError && (
            <div className="form-error">
              {entityError}
            </div>
          )}


          {/* FORMULARIO */}

          <form onSubmit={handleEntityLogin}>

            <label>
              Correo institucional

              <input
                type="email"
                placeholder="entidad@reportabarranquilla.local"
                value={entityForm.email}
                onChange={(e) =>
                  setEntityForm((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                autoComplete="email"
              />

            </label>


            <label>
              Contraseña

              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={entityForm.password}
                onChange={(e) =>
                  setEntityForm((prev) => ({
                    ...prev,
                    password:
                      e.target.value,
                  }))
                }
                autoComplete="current-password"
              />

            </label>


            <button
              type="submit"
              className="auth-submit"
            >
              Ingresar al panel
              <span>→</span>
            </button>

          </form>


          {/* INFORMACIÓN */}

          <div
            style={{
              marginTop: "25px",
              padding: "14px",
              borderRadius: "9px",
              background: "#f3f8f5",
              border: "1px solid #dce9e3",
            }}
          >

            <span
              style={{
                display: "block",
                color: "#6f7f78",
                fontSize: "11px",
                lineHeight: "1.6",
              }}
            >
              El acceso de entidad es
              independiente del acceso
              ciudadano. Las cuentas de
              entidad serán creadas
              previamente por el sistema.
            </span>

          </div>


          {/* VOLVER */}

          <div className="auth-switch">

            ¿Eres ciudadano?

            <button
              onClick={goHome}
              type="button"
            >
              Volver al inicio
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EntityLogin;