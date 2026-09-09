import { useEffect, useState } from "react";
import "./App.css";

/* =========================
   PÁGINAS CIUDADANAS
========================= */

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MyReports from "./pages/MyReports";
import NewReport from "./pages/NewReport";
import ReportDetail from "./pages/ReportDetail";

/* =========================
   ENTIDADES
========================= */

import EntityLogin from "./entity/EntityLogin";
import EntityDashboard from "./entity/EntityDashboard";
import EntityReports from "./entity/EntityReports";
import EntityReportDetail from "./entity/EntityReportDetail";


function App() {

  /* =========================================================
     NAVEGACIÓN
  ========================================================= */

  const [page, setPage] = useState("home");

  const [menuOpen, setMenuOpen] =
    useState(false);


  /* =========================================================
     USUARIOS CIUDADANOS
  ========================================================= */

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


  const [currentUser, setCurrentUser] =
    useState(() => {

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


  /* =========================================================
     REPORTES
  ========================================================= */

  const [reports, setReports] =
    useState(() => {

      try {

        const saved =
          localStorage.getItem(
            "rb_reports"
          );

        return saved
          ? JSON.parse(saved)
          : [];

      } catch {

        return [];

      }

    });


  /* =========================================================
     LOGIN CIUDADANO
  ========================================================= */

  const [loginForm, setLoginForm] =
    useState({
      email: "",
      password: "",
    });


  const [loginError, setLoginError] =
    useState("");


  /* =========================================================
     REGISTRO
  ========================================================= */

  const [registerForm, setRegisterForm] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });


  const [registerError, setRegisterError] =
    useState("");


  /* =========================================================
     REPORTE
  ========================================================= */

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


  const [reportError, setReportError] =
    useState("");


  /* =========================================================
     REPORTES
  ========================================================= */

  const [selectedReport, setSelectedReport] =
    useState(null);


  const [successMessage, setSuccessMessage] =
    useState("");


  /* =========================================================
     ENTIDADES
  ========================================================= */

  const entities = [

    {
      id: "triple-a",
      name: "Triple A",
      email: "triplea@reportabarranquilla.local",
      password: "TripleA123",
    },

    {
      id: "a-ire",
      name: "A-IRE",
      email: "aire@reportabarranquilla.local",
      password: "Aire123",
    },

    {
      id: "obras-publicas",
      name:
        "Secretaría de Obras Públicas de la Alcaldía Distrital",
      email:
        "obras@reportabarranquilla.local",
      password: "Obras123",
    },

    {
      id: "alcaldia",
      name:
        "Alcaldía Distrital de Barranquilla",
      email:
        "alcaldia@reportabarranquilla.local",
      password: "Alcaldia123",
    },

  ];


  const [currentEntity, setCurrentEntity] =
    useState(() => {

      try {

        const saved =
          localStorage.getItem(
            "rb_current_entity"
          );

        return saved
          ? JSON.parse(saved)
          : null;

      } catch {

        return null;

      }

    });


  const [entityForm, setEntityForm] =
    useState({
      email: "",
      password: "",
    });


  const [entityError, setEntityError] =
    useState("");


  const [
    selectedEntityReport,
    setSelectedEntityReport,
  ] = useState(null);


  /* =========================================================
     GUARDAR USUARIOS
  ========================================================= */

  const saveUsers = (newUsers) => {

    setUsers(newUsers);

    localStorage.setItem(
      "rb_users",
      JSON.stringify(newUsers)
    );

  };


  /* =========================================================
     GUARDAR REPORTES
  ========================================================= */

  const saveReports = (newReports) => {

    setReports(newReports);

    localStorage.setItem(
      "rb_reports",
      JSON.stringify(newReports)
    );

  };


  /* =========================================================
     USUARIO ACTUAL
  ========================================================= */

  useEffect(() => {

    if (currentUser) {

      localStorage.setItem(
        "rb_current_user",
        JSON.stringify(currentUser)
      );

    }

  }, [currentUser]);


  /* =========================================================
     ENTIDAD ACTUAL
  ========================================================= */

  useEffect(() => {

    if (currentEntity) {

      localStorage.setItem(
        "rb_current_entity",
        JSON.stringify(currentEntity)
      );

    }

  }, [currentEntity]);


  /* =========================================================
     NAVEGACIÓN HOME
  ========================================================= */

  const goHome = () => {

    setPage("home");

    setMenuOpen(false);

    setSuccessMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================================
     LOGIN CIUDADANO
  ========================================================= */

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


  /* =========================================================
     REGISTRO
  ========================================================= */

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


  /* =========================================================
     LOGIN CIUDADANO
  ========================================================= */

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


  /* =========================================================
     REGISTRO CIUDADANO
  ========================================================= */

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


    if (
      password.length < 6
    ) {

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


    const exists =
      users.some(
        (item) =>
          item.email
            .toLowerCase() ===
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


  /* =========================================================
     CERRAR SESIÓN CIUDADANO
  ========================================================= */

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


  /* =========================================================
     LOGIN ENTIDAD
  ========================================================= */

  const handleEntityLogin = (e) => {

    e.preventDefault();

    setEntityError("");

    const email =
      entityForm.email
        .trim()
        .toLowerCase();


    if (
      !email ||
      !entityForm.password
    ) {

      setEntityError(
        "Completa el correo institucional y la contraseña."
      );

      return;
    }


    const entity =
      entities.find(
        (item) =>
          item.email.toLowerCase() ===
            email &&
          item.password ===
            entityForm.password
      );


    if (!entity) {

      setEntityError(
        "Credenciales de entidad incorrectas."
      );

      return;
    }


    setCurrentEntity(entity);

    localStorage.setItem(
      "rb_current_entity",
      JSON.stringify(entity)
    );


    setEntityForm({
      email: "",
      password: "",
    });


    setPage(
      "entity-dashboard"
    );

  };


  /* =========================================================
     CERRAR SESIÓN ENTIDAD
  ========================================================= */

  const handleEntityLogout = () => {

    setCurrentEntity(null);

    setSelectedEntityReport(null);

    localStorage.removeItem(
      "rb_current_entity"
    );

    setEntityError("");

    setPage("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================================
     ASIGNACIÓN AUTOMÁTICA
  ========================================================= */

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

      return (
        "Secretaría de Obras Públicas de la Alcaldía Distrital"
      );

    }


    if (
      category ===
      "Espacio comunitario"
    ) {

      return (
        "Alcaldía Distrital de Barranquilla"
      );

    }


    return "Entidad responsable";

  };


  /* =========================================================
     EVIDENCIA
  ========================================================= */

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


  /* =========================================================
     ELIMINAR EVIDENCIA
  ========================================================= */

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


  /* =========================================================
     CREAR REPORTE
  ========================================================= */

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


    saveReports([
      newReport,
      ...reports,
    ]);


    setReportForm({

      category: "",
      description: "",
      location: "",
      evidence: "",
      modality: "Identificado",

    });


    setEvidencePreview("");

    setReportError("");


    setSuccessMessage(
      "Tu reporte fue registrado correctamente."
    );


    setPage("my-reports");

  };


  /* =========================================================
     MIS REPORTES
  ========================================================= */

  const myReports =
    reports.filter(
      (report) =>
        currentUser &&
        report.userId ===
          currentUser.id
    );


  /* =========================================================
     REPORTES DE ENTIDAD
  ========================================================= */

  const entityReports =
    reports.filter(
      (report) =>
        currentEntity &&
        report.entity ===
          currentEntity.name
    );


  /* =========================================================
     ABRIR REPORTE CIUDADANO
  ========================================================= */

  const openReport = (
    report
  ) => {

    setSelectedReport(report);

    setPage(
      "report-detail"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================================
     ABRIR REPORTE ENTIDAD
  ========================================================= */

  const openEntityReport = (
    report
  ) => {

    setSelectedEntityReport(
      report
    );

    setPage(
      "entity-report-detail"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================================
     ACTUALIZAR ESTADO
  ========================================================= */

  const updateReportStatus = (
    reportId,
    newStatus
  ) => {

    if (!currentEntity) {
      return;
    }


    const targetReport =
      reports.find(
        (report) =>
          report.id ===
          reportId
      );


    if (
      !targetReport ||
      targetReport.entity !==
        currentEntity.name
    ) {

      return;
    }


    const updatedReports =
      reports.map(
        (report) =>
          report.id ===
          reportId
            ? {
                ...report,
                status:
                  newStatus,
              }
            : report
      );


    saveReports(
      updatedReports
    );


    const updatedReport =
      updatedReports.find(
        (report) =>
          report.id ===
          reportId
      );


    setSelectedEntityReport(
      updatedReport
    );

  };


  /* =========================================================
     SCROLL HOME
  ========================================================= */

  const scrollToSection = (
    id
  ) => {

    if (page !== "home") {

      setPage("home");

      setTimeout(() => {

        document
          .getElementById(id)
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 100);

    } else {

      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
        });

    }


    setMenuOpen(false);

  };


  /* =========================================================
     LOGIN ENTIDAD
  ========================================================= */

  if (page === "entity-login") {

    return (
      <EntityLogin
        entityForm={
          entityForm
        }
        setEntityForm={
          setEntityForm
        }
        entityError={
          entityError
        }
        handleEntityLogin={
          handleEntityLogin
        }
        goHome={
          goHome
        }
      />
    );

  }


  /* =========================================================
     DASHBOARD ENTIDAD
  ========================================================= */

  if (
    page === "entity-dashboard"
  ) {

    return currentEntity ? (

      <EntityDashboard
        currentEntity={
          currentEntity
        }
        entityReports={
          entityReports
        }
        setPage={
          setPage
        }
        openEntityReport={
          openEntityReport
        }
        handleEntityLogout={
          handleEntityLogout
        }
      />

    ) : (

      <EntityLogin
        entityForm={
          entityForm
        }
        setEntityForm={
          setEntityForm
        }
        entityError={
          entityError
        }
        handleEntityLogin={
          handleEntityLogin
        }
        goHome={
          goHome
        }
      />

    );

  }


  /* =========================================================
     REPORTES ENTIDAD
  ========================================================= */

  if (
    page === "entity-reports"
  ) {

    return currentEntity ? (

      <EntityReports
        currentEntity={
          currentEntity
        }
        entityReports={
          entityReports
        }
        setPage={
          setPage
        }
        openEntityReport={
          openEntityReport
        }
        handleEntityLogout={
          handleEntityLogout
        }
      />

    ) : (

      <EntityLogin
        entityForm={
          entityForm
        }
        setEntityForm={
          setEntityForm
        }
        entityError={
          entityError
        }
        handleEntityLogin={
          handleEntityLogin
        }
        goHome={
          goHome
        }
      />

    );

  }


  /* =========================================================
     DETALLE ENTIDAD
  ========================================================= */

  if (
    page ===
    "entity-report-detail"
  ) {

    return currentEntity ? (

      <EntityReportDetail
        currentEntity={
          currentEntity
        }
        selectedEntityReport={
          selectedEntityReport
        }
        users={
          users
        }
        setPage={
          setPage
        }
        updateReportStatus={
          updateReportStatus
        }
        handleEntityLogout={
          handleEntityLogout
        }
      />

    ) : (

      <EntityLogin
        entityForm={
          entityForm
        }
        setEntityForm={
          setEntityForm
        }
        entityError={
          entityError
        }
        handleEntityLogin={
          handleEntityLogin
        }
        goHome={
          goHome
        }
      />

    );

  }


  /* =========================================================
     LOGIN CIUDADANO
  ========================================================= */

  if (page === "login") {

    return (
      <Login
        loginForm={
          loginForm
        }
        setLoginForm={
          setLoginForm
        }
        loginError={
          loginError
        }
        successMessage={
          successMessage
        }
        handleLogin={
          handleLogin
        }
        goHome={
          goHome
        }
        goToRegister={
          goToRegister
        }
      />
    );

  }


  /* =========================================================
     REGISTRO
  ========================================================= */

  if (page === "register") {

    return (
      <Register
        registerForm={
          registerForm
        }
        setRegisterForm={
          setRegisterForm
        }
        registerError={
          registerError
        }
        handleRegister={
          handleRegister
        }
        goHome={
          goHome
        }
        goToLogin={
          goToLogin
        }
      />
    );

  }


  /* =========================================================
     DASHBOARD CIUDADANO
  ========================================================= */

  if (page === "dashboard") {

    return currentUser ? (

      <Dashboard
        currentUser={
          currentUser
        }
        logout={
          logout
        }
        myReports={
          myReports
        }
        setPage={
          setPage
        }
        openReport={
          openReport
        }
        setSuccessMessage={
          setSuccessMessage
        }
        setReportError={
          setReportError
        }
      />

    ) : (

      <Login
        loginForm={
          loginForm
        }
        setLoginForm={
          setLoginForm
        }
        loginError={
          loginError
        }
        successMessage={
          successMessage
        }
        handleLogin={
          handleLogin
        }
        goHome={
          goHome
        }
        goToRegister={
          goToRegister
        }
      />

    );

  }


  /* =========================================================
     MIS REPORTES
  ========================================================= */

  if (
    page === "my-reports"
  ) {

    return currentUser ? (

      <MyReports
        currentUser={
          currentUser
        }
        logout={
          logout
        }
        myReports={
          myReports
        }
        setPage={
          setPage
        }
        openReport={
          openReport
        }
        successMessage={
          successMessage
        }
      />

    ) : (

      <Login
        loginForm={
          loginForm
        }
        setLoginForm={
          setLoginForm
        }
        loginError={
          loginError
        }
        successMessage={
          successMessage
        }
        handleLogin={
          handleLogin
        }
        goHome={
          goHome
        }
        goToRegister={
          goToRegister
        }
      />

    );

  }


  /* =========================================================
     NUEVO REPORTE
  ========================================================= */

  if (
    page === "new-report"
  ) {

    return currentUser ? (

      <NewReport
        currentUser={
          currentUser
        }
        logout={
          logout
        }
        reportForm={
          reportForm
        }
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
        setPage={
          setPage
        }
      />

    ) : (

      <Login
        loginForm={
          loginForm
        }
        setLoginForm={
          setLoginForm
        }
        loginError={
          loginError
        }
        successMessage={
          successMessage
        }
        handleLogin={
          handleLogin
        }
        goHome={
          goHome
        }
        goToRegister={
          goToRegister
        }
      />

    );

  }


  /* =========================================================
     DETALLE REPORTE CIUDADANO
  ========================================================= */

  if (
    page === "report-detail"
  ) {

    return currentUser ? (

      <ReportDetail
        currentUser={
          currentUser
        }
        logout={
          logout
        }
        selectedReport={
          selectedReport
        }
        setPage={
          setPage
        }
      />

    ) : (

      <Login
        loginForm={
          loginForm
        }
        setLoginForm={
          setLoginForm
        }
        loginError={
          loginError
        }
        successMessage={
          successMessage
        }
        handleLogin={
          handleLogin
        }
        goHome={
          goHome
        }
        goToRegister={
          goToRegister
        }
      />

    );

  }


  /* =========================================================
     HOME
  ========================================================= */

  return (
    <Home
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      goHome={goHome}
      goToLogin={goToLogin}
      goToRegister={goToRegister}
      goToEntityLogin={() =>
      setPage("entity-login")
  }
  scrollToSection={scrollToSection}
  />
  );

}

export default App;