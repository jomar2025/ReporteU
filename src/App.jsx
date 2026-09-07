import { useEffect, useState } from "react";
import "./App.css";

import logoAlcaldia from "./assets/logo1.png";
import fondo from "./assets/fondo.jpg";

/* =========================================================
   LOGIN
========================================================= */

function Login({
  loginForm,
  setLoginForm,
  loginError,
  successMessage,
  handleLogin,
  goHome,
  goToRegister,
}) {
  return (
    <div className="auth-page">

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
            Una mejor ciudad
            <br />
            comienza contigo.
          </h1>

          <p>
            Ingresa a tu cuenta para
            registrar problemáticas y
            consultar el seguimiento de tus
            reportes.
          </p>

        </div>

        <div className="auth-footer-text">
          Copyright © Omar Arrieta - Juan Alarcón
        </div>

      </div>

      <div className="auth-right">

        <button
          className="back-home"
          onClick={goHome}
        >
          ← Volver al inicio
        </button>

        <div className="auth-box">

          <div className="auth-heading">

            <span>
              BIENVENIDO
            </span>

            <h2>
              Iniciar sesión
            </h2>

            <p>
              Accede a tu panel ciudadano.
            </p>

          </div>

          {loginError && (
            <div className="form-error">
              {loginError}
            </div>
          )}

          {successMessage && (
            <div className="form-success">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleLogin}>

            <label>
              Correo electrónico

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm((prev) => ({
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
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                autoComplete="current-password"
              />

            </label>

            <button
              type="submit"
              className="auth-submit"
            >
              Iniciar sesión
              <span>→</span>
            </button>

          </form>

          <div className="auth-switch">

            ¿No tienes una cuenta?

            <button onClick={goToRegister}>
              Regístrate aquí
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   REGISTRO
========================================================= */

function Register({
  registerForm,
  setRegisterForm,
  registerError,
  handleRegister,
  goHome,
  goToLogin,
}) {
  return (
    <div className="auth-page">

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
            Participa en
            <br />
            tu comunidad.
          </h1>

          <p>
            Crea tu cuenta para registrar
            problemáticas y hacer seguimiento
            a tus reportes.
          </p>

        </div>

        <div className="auth-footer-text">
          Copyright © Omar Arrieta - Juan Alarcón
        </div>

      </div>

      <div className="auth-right">

        <button
          className="back-home"
          onClick={goHome}
        >
          ← Volver al inicio
        </button>

        <div className="auth-box register-box">

          <div className="auth-heading">

            <span>
              CREAR CUENTA
            </span>

            <h2>
              Regístrate
            </h2>

            <p>
              Crea tu cuenta ciudadana en
              pocos pasos.
            </p>

          </div>

          {registerError && (
            <div className="form-error">
              {registerError}
            </div>
          )}

          <form onSubmit={handleRegister}>

            <label>
              Nombre completo

              <input
                type="text"
                placeholder="Tu nombre completo"
                value={registerForm.name}
                onChange={(e) =>
                  setRegisterForm((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                autoComplete="name"
              />

            </label>

            <label>
              Correo electrónico

              <input
                type="email"
                placeholder="correo@ejemplo.com"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                autoComplete="email"
              />

            </label>

            <div className="form-two-columns">

              <label>
                Contraseña

                <input
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  autoComplete="new-password"
                />

              </label>

              <label>
                Confirmar contraseña

                <input
                  type="password"
                  placeholder="Repite tu contraseña"
                  value={registerForm.confirmPassword}
                  onChange={(e) =>
                    setRegisterForm((prev) => ({
                      ...prev,
                      confirmPassword:
                        e.target.value,
                    }))
                  }
                  autoComplete="new-password"
                />

              </label>

            </div>

            <button
              type="submit"
              className="auth-submit"
            >
              Crear mi cuenta
              <span>→</span>
            </button>

          </form>

          <div className="auth-switch">

            ¿Ya tienes una cuenta?

            <button onClick={goToLogin}>
              Inicia sesión
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   HEADER DEL DASHBOARD
========================================================= */

function DashboardHeader({
  currentUser,
  logout,
}) {
  return (
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
            Panel ciudadano
          </strong>

        </div>

      </div>

      <div className="dashboard-user">

        <div className="user-avatar">
          {currentUser?.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <div className="user-info">

          <strong>
            {currentUser?.name}
          </strong>

          <span>
            Ciudadano
          </span>

        </div>

        <button onClick={logout}>
          Cerrar sesión
        </button>

      </div>

    </header>
  );
}


/* =========================================================
   ESTADO
========================================================= */

function StatusBadge({ status }) {
  const className = status
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("í", "i");

  return (
    <span
      className={`status-badge status-${className}`}
    >
      {status}
    </span>
  );
}


/* =========================================================
   LÍNEA DE SEGUIMIENTO
========================================================= */

function StatusTimeline({ status }) {
  const states = [
    "Reportado",
    "En revisión",
    "En proceso",
    "Atendido",
  ];

  const currentIndex =
    states.indexOf(status);

  return (
    <div className="timeline">

      {states.map((state, index) => (

        <div
          className={`timeline-item ${
            index <= currentIndex
              ? "completed"
              : ""
          } ${
            index === currentIndex
              ? "current"
              : ""
          }`}
          key={state}
        >

          <div className="timeline-dot">

            {index < currentIndex
              ? "✓"
              : index + 1}

          </div>

          <div>

            <strong>
              {state}
            </strong>

            {index === currentIndex && (
              <span>
                Estado actual
              </span>
            )}

          </div>

        </div>

      ))}

    </div>
  );
}


/* =========================================================
   FILA DE REPORTE
========================================================= */

function ReportRow({
  report,
  onClick,
}) {
  return (
    <button
      className="report-row"
      onClick={onClick}
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
  );
}


/* =========================================================
   NUEVO REPORTE
========================================================= */

function NewReport({
  currentUser,
  reportForm,
  setReportForm,
  reportError,
  createReport,
  handleEvidenceChange,
  evidencePreview,
  removeEvidence,
  setPage,
  DashboardHeaderComponent,
  logout,
}) {
  return (
    <div className="dashboard-page">

      <DashboardHeaderComponent
        currentUser={currentUser}
        logout={logout}
      />

      <main className="dashboard-content">

        <button
          className="dashboard-back"
          onClick={() =>
            setPage("dashboard")
          }
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
                onChange={handleEvidenceChange}
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
                    onClick={removeEvidence}
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


/* =========================================================
   APP
========================================================= */

function App() {

  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================
     USUARIOS
  ========================= */

  const [users, setUsers] = useState(() => {
    try {
      const saved =
        localStorage.getItem("rb_users");

      return saved
        ? JSON.parse(saved)
        : [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved =
        localStorage.getItem(
          "rb_current_user"
        );

      return saved
        ? JSON.parse(saved)
        : null;
    } catch {
      return null;
    }
  });

  /* =========================
     REPORTES
  ========================= */

  const [reports, setReports] = useState(() => {
    try {
      const saved =
        localStorage.getItem("rb_reports");

      return saved
        ? JSON.parse(saved)
        : [];
    } catch {
      return [];
    }
  });

  /* =========================
     LOGIN
  ========================= */

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  /* =========================
     REGISTRO
  ========================= */

  const [registerForm, setRegisterForm] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  /* =========================
     REPORTE
  ========================= */

  const [reportForm, setReportForm] =
    useState({
      category: "",
      description: "",
      location: "",
      evidence: "",
      modality: "Identificado",
    });

  const [evidencePreview, setEvidencePreview] =
    useState("");

  /* =========================
     ESTADOS
  ========================= */

  const [selectedReport, setSelectedReport] =
    useState(null);

  const [loginError, setLoginError] =
    useState("");

  const [registerError, setRegisterError] =
    useState("");

  const [reportError, setReportError] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  /* =========================
     GUARDAR USUARIOS
  ========================= */

  const saveUsers = (newUsers) => {
    setUsers(newUsers);

    localStorage.setItem(
      "rb_users",
      JSON.stringify(newUsers)
    );
  };

  /* =========================
     GUARDAR REPORTES
  ========================= */

  const saveReports = (newReports) => {
    setReports(newReports);

    localStorage.setItem(
      "rb_reports",
      JSON.stringify(newReports)
    );
  };

  /* =========================
     USUARIO ACTUAL
  ========================= */

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "rb_current_user",
        JSON.stringify(currentUser)
      );
    }
  }, [currentUser]);

  /* =========================
     NAVEGACIÓN
  ========================= */

  const goHome = () => {
    setPage("home");
    setMenuOpen(false);
    setSuccessMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToLogin = () => {
    setPage("login");
    setMenuOpen(false);

    setLoginError("");
    setSuccessMessage("");
    setRegisterError("");
    setReportError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToRegister = () => {
    setPage("register");
    setMenuOpen(false);

    setRegisterError("");
    setSuccessMessage("");
    setLoginError("");
    setReportError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = (e) => {
    e.preventDefault();

    setLoginError("");
    setSuccessMessage("");

    const email =
      loginForm.email
        .trim()
        .toLowerCase();

    if (
      !email ||
      !loginForm.password
    ) {
      setLoginError(
        "Completa el correo electrónico y la contraseña."
      );

      return;
    }

    const user = users.find(
      (item) =>
        item.email.toLowerCase() ===
          email &&
        item.password ===
          loginForm.password
    );

    if (!user) {
      setLoginError(
        "Correo electrónico o contraseña incorrectos."
      );

      return;
    }

    setCurrentUser(user);

    localStorage.setItem(
      "rb_current_user",
      JSON.stringify(user)
    );

    setLoginForm({
      email: "",
      password: "",
    });

    setPage("dashboard");
  };

  /* =========================
     REGISTRO
  ========================= */

  const handleRegister = (e) => {
    e.preventDefault();

    setRegisterError("");
    setSuccessMessage("");

    const name =
      registerForm.name.trim();

    const email =
      registerForm.email
        .trim()
        .toLowerCase();

    const password =
      registerForm.password;

    const confirmPassword =
      registerForm.confirmPassword;

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setRegisterError(
        "Completa todos los campos."
      );

      return;
    }

    if (password.length < 6) {
      setRegisterError(
        "La contraseña debe tener mínimo 6 caracteres."
      );

      return;
    }

    if (
      password !==
      confirmPassword
    ) {
      setRegisterError(
        "Las contraseñas no coinciden."
      );

      return;
    }

    const exists = users.some(
      (item) =>
        item.email.toLowerCase() ===
        email
    );

    if (exists) {
      setRegisterError(
        "Ya existe una cuenta con este correo."
      );

      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt:
        new Date().toISOString(),
    };

    saveUsers([
      ...users,
      newUser,
    ]);

    setRegisterForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setSuccessMessage(
      "Cuenta creada correctamente. Ahora puedes iniciar sesión."
    );

    setPage("login");
  };

  /* =========================
     CERRAR SESIÓN
  ========================= */

  const logout = () => {
    setCurrentUser(null);

    localStorage.removeItem(
      "rb_current_user"
    );

    setSelectedReport(null);
    setSuccessMessage("");
    setReportError("");

    setPage("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     ENTIDAD RESPONSABLE
  ========================= */

  const getResponsibleEntity = (
    category
  ) => {

    if (
      category ===
        "Residuos sólidos" ||
      category ===
        "Fugas de agua"
    ) {
      return "Triple A";
    }

    if (
      category ===
        "Alumbrado público" ||
      category ===
        "Lámparas dañadas" ||
      category ===
        "Vía sin alumbrado"
    ) {
      return "A-IRE";
    }

    if (
      category ===
        "Daños en vías públicas" ||
      category === "Huecos"
    ) {
      return "Secretaría de Obras Públicas de la Alcaldía Distrital";
    }

    if (
      category ===
      "Espacio comunitario"
    ) {
      return "Alcaldía Distrital de Barranquilla";
    }

    return "Entidad responsable";
  };

  /* =========================
     EVIDENCIA
  ========================= */

  const handleEvidenceChange = (e) => {

    const file =
      e.target.files?.[0];

    if (!file) {

      setReportForm((prev) => ({
        ...prev,
        evidence: "",
      }));

      setEvidencePreview("");

      return;
    }

    if (
      !file.type.startsWith(
        "image/"
      )
    ) {

      setReportError(
        "La evidencia debe ser una imagen."
      );

      e.target.value = "";

      return;
    }

    const maxSize =
      5 * 1024 * 1024;

    if (file.size > maxSize) {

      setReportError(
        "La imagen no puede superar los 5 MB."
      );

      e.target.value = "";

      return;
    }

    setReportError("");

    const reader =
      new FileReader();

    reader.onload = () => {

      const imageData =
        reader.result;

      setReportForm((prev) => ({
        ...prev,
        evidence: imageData,
      }));

      setEvidencePreview(
        imageData
      );
    };

    reader.readAsDataURL(file);
  };

  /* =========================
     ELIMINAR EVIDENCIA
  ========================= */

  const removeEvidence = () => {

    setReportForm((prev) => ({
      ...prev,
      evidence: "",
    }));

    setEvidencePreview("");

    const fileInput =
      document.getElementById(
        "evidence-input"
      );

    if (fileInput) {
      fileInput.value = "";
    }
  };

  /* =========================
     CREAR REPORTE
  ========================= */

  const createReport = (e) => {

    e.preventDefault();

    setReportError("");
    setSuccessMessage("");

    if (!currentUser) {
      setPage("login");
      return;
    }

    if (
      !reportForm.category ||
      !reportForm.description.trim() ||
      !reportForm.location.trim()
    ) {

      setReportError(
        "Completa la categoría, descripción y ubicación."
      );

      return;
    }

    const newReport = {

      id: Date.now(),

      userId:
        currentUser.id,

      category:
        reportForm.category,

      description:
        reportForm.description.trim(),

      location:
        reportForm.location.trim(),

      evidence:
        reportForm.evidence || "",

      modality:
        reportForm.modality,

      entity:
        getResponsibleEntity(
          reportForm.category
        ),

      status:
        "Reportado",

      date:
        new Date().toLocaleDateString(
          "es-CO"
        ),

      createdAt:
        new Date().toISOString(),
    };

    const newReports = [
      newReport,
      ...reports,
    ];

    saveReports(newReports);

    setReportForm({
      category: "",
      description: "",
      location: "",
      evidence: "",
      modality:
        "Identificado",
    });

    setEvidencePreview("");

    setReportError("");

    setSuccessMessage(
      "Tu reporte fue registrado correctamente."
    );

    setPage("my-reports");
  };

  /* =========================
     MIS REPORTES
  ========================= */

  const myReports =
    reports.filter(
      (report) =>
        currentUser &&
        report.userId ===
          currentUser.id
    );

  /* =========================
     ABRIR REPORTE
  ========================= */

  const openReport = (
    report
  ) => {

    setSelectedReport(
      report
    );

    setPage(
      "report-detail"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================
     SCROLL
  ========================= */

  const scrollToSection = (
    id
  ) => {

    if (page !== "home") {

      setPage("home");

      setTimeout(() => {

        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior:
              "smooth",
          });

      }, 100);

    } else {

      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior:
            "smooth",
        });
    }

    setMenuOpen(false);
  };


  /* =========================================================
     PÁGINA PRINCIPAL
  ========================================================= */

  const Home = () => (
    <div className="site">

      <header className="header">

        <div className="header-inner">

          <button
            className="brand"
            onClick={goHome}
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

            <button onClick={goHome}>
              Inicio
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "como-funciona"
                )
              }
            >
              ¿Cómo funciona?
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "reportar"
                )
              }
            >
              ¿Qué puedes reportar?
            </button>

            <div className="mobile-nav-actions">

              <button
                className="nav-login"
                onClick={goToLogin}
              >
                Iniciar sesión
              </button>

              <button
                className="nav-register"
                onClick={goToRegister}
              >
                Registrarse
              </button>

            </div>

          </nav>

          <div className="header-actions">

            <button
              className="nav-login"
              onClick={goToLogin}
            >
              Iniciar sesión
            </button>

            <button
              className="nav-register"
              onClick={goToRegister}
            >
              Registrarse
            </button>

          </div>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            aria-label="Abrir menú"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </header>

      <main>

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
                >
                  Conoce cómo funciona
                </button>

              </div>

              <div className="hero-info">

                <div>
                  <strong>
                    100%
                  </strong>
                  <span>
                    Digital
                  </span>
                </div>

                <div>
                  <strong>
                    24/7
                  </strong>
                  <span>
                    Disponible
                  </span>
                </div>

                <div>
                  <strong>
                    1
                  </strong>
                  <span>
                    Solo lugar
                  </span>
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
          >
            Registrarme ahora
            <span>→</span>
          </button>

        </section>

      </main>

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

            <button onClick={goHome}>
              Inicio
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "como-funciona"
                )
              }
            >
              ¿Cómo funciona?
            </button>

            <button onClick={goToLogin}>
              Iniciar sesión
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


  /* =========================================================
     DASHBOARD
  ========================================================= */

  const Dashboard = () => (

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
                  setPage(
                    "my-reports"
                  )
                }
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
                  setPage(
                    "new-report"
                  )
                }
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


  /* =========================================================
     MIS REPORTES
  ========================================================= */

  const MyReports = () => (

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
                    openReport(
                      report
                    )
                  }
                />

              )
            )}

          </div>

        )}

      </main>

    </div>
  );


  /* =========================================================
     DETALLE
  ========================================================= */

  const ReportDetail = () => {

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
                  setPage(
                    "dashboard"
                  )
                }
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
              setPage(
                "my-reports"
              )
            }
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
  };


  /* =========================================================
     CONTROL DE PÁGINAS
  ========================================================= */

  if (page === "login") {

    return (
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loginError={loginError}
        successMessage={successMessage}
        handleLogin={handleLogin}
        goHome={goHome}
        goToRegister={goToRegister}
      />
    );
  }

  if (page === "register") {

    return (
      <Register
        registerForm={registerForm}
        setRegisterForm={
          setRegisterForm
        }
        registerError={
          registerError
        }
        handleRegister={
          handleRegister
        }
        goHome={goHome}
        goToLogin={goToLogin}
      />
    );
  }

  if (page === "dashboard") {

    return currentUser ? (
      <Dashboard />
    ) : (
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loginError={loginError}
        successMessage={successMessage}
        handleLogin={handleLogin}
        goHome={goHome}
        goToRegister={goToRegister}
      />
    );
  }

  if (page === "my-reports") {

    return currentUser ? (
      <MyReports />
    ) : (
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loginError={loginError}
        successMessage={successMessage}
        handleLogin={handleLogin}
        goHome={goHome}
        goToRegister={goToRegister}
      />
    );
  }

  if (page === "new-report") {

    return currentUser ? (

      <NewReport
        currentUser={currentUser}
        reportForm={reportForm}
        setReportForm={
          setReportForm
        }
        reportError={
          reportError
        }
        createReport={
          createReport
        }
        handleEvidenceChange={
          handleEvidenceChange
        }
        evidencePreview={
          evidencePreview
        }
        removeEvidence={
          removeEvidence
        }
        setPage={setPage}
        DashboardHeaderComponent={
          DashboardHeader
        }
        logout={logout}
      />

    ) : (

      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loginError={loginError}
        successMessage={successMessage}
        handleLogin={handleLogin}
        goHome={goHome}
        goToRegister={goToRegister}
      />

    );
  }

  if (page === "report-detail") {

    return currentUser ? (
      <ReportDetail />
    ) : (
      <Login
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        loginError={loginError}
        successMessage={successMessage}
        handleLogin={handleLogin}
        goHome={goHome}
        goToRegister={goToRegister}
      />
    );
  }

  return <Home />;
}

export default App;