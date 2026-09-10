import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./lib/supabaseClient";

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
  console.log("Supabase conectado:", !!supabase);
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

  /*
     Las entidades ya no manejan credenciales dentro del código.
     Sus cuentas y relaciones con profiles/entities se gestionan
     directamente desde Supabase Auth + la base de datos.
  */

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

  const [entityReports, setEntityReports] =
    useState([]);


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
     CARGAR REPORTES DEL CIUDADANO DESDE SUPABASE
  ========================================================= */

  useEffect(() => {

    const loadCitizenReports = async () => {

      if (!currentUser?.id) {
        return;
      }

      if (
        page !== "dashboard" &&
        page !== "my-reports" &&
        page !== "report-detail"
      ) {
        return;
      }

      const {
        data,
        error,
      } = await supabase
        .from("reports")
        .select(`
          id,
          user_id,
          entity_id,
          category,
          description,
          location,
          evidence_url,
          modality,
          status,
          created_at,
          entities (
            name
          )
        `)
        .eq("user_id", currentUser.id)
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        console.error(
          "Error cargando reportes del ciudadano:",
          error
        );
        return;
      }

      const formattedReports = (data || []).map(
        (report) => ({
          id: report.id,
          userId: report.user_id,
          entityId: report.entity_id,
          entity:
            report.entities?.name ||
            "Entidad responsable",
          category: report.category,
          description: report.description,
          location: report.location,
          evidence: report.evidence_url || "",
          modality: report.modality,
          status: report.status,
          date: new Date(
            report.created_at
          ).toLocaleDateString("es-CO"),
          createdAt: report.created_at,
        })
      );

      setReports(formattedReports);
      localStorage.setItem(
        "rb_reports",
        JSON.stringify(formattedReports)
      );

      if (selectedReport) {
        const refreshedSelectedReport =
          formattedReports.find(
            (report) =>
              String(report.id) ===
              String(selectedReport.id)
          );

        if (refreshedSelectedReport) {
          setSelectedReport(
            refreshedSelectedReport
          );
        }
      }
    };

    loadCitizenReports();

  }, [currentUser, page]);


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

  const handleLogin = async (e) => {

  e.preventDefault();

  setLoginError("");
  setSuccessMessage("");

  const email =
    loginForm.email
      .trim()
      .toLowerCase();

  const password =
    loginForm.password;

  if (!email || !password) {

    setLoginError(
      "Completa el correo electrónico y la contraseña."
    );

    return;
  }

  try {

    const {
      data,
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {

      console.error(
        "Error de inicio de sesión:",
        error
      );

      setLoginError(
        "Correo electrónico o contraseña incorrectos."
      );

      return;
    }

    const authUser =
      data?.user;

    if (!authUser) {

      setLoginError(
        "No se pudo iniciar la sesión."
      );

      return;
    }

    /*
      Obtener el perfil del ciudadano
    */

    const {
      data: profile,
      error: profileError,
    } = await supabase
      .from("profiles")
      .select("id, name, role")
      .eq("id", authUser.id)
      .single();

    if (profileError) {

      console.error(
        "Error al obtener el perfil:",
        profileError
      );

      setLoginError(
        "La cuenta existe, pero no se pudo cargar el perfil."
      );

      return;
    }

    /*
      Crear el usuario que utiliza
      temporalmente la interfaz actual
    */

    const loggedUser = {

      id: authUser.id,

      name:
        profile?.name ||
        authUser.user_metadata?.name ||
        authUser.email,

      email:
        authUser.email,

      createdAt:
        authUser.created_at,

    };

    setCurrentUser(
      loggedUser
    );

    /*
      Esto lo mantenemos temporalmente
      mientras terminamos de migrar
      todas las partes del proyecto.
    */

    localStorage.setItem(
      "rb_current_user",
      JSON.stringify(loggedUser)
    );

    setLoginForm({
      email: "",
      password: "",
    });

    setPage("dashboard");

  } catch (error) {

    console.error(
      "Error inesperado al iniciar sesión:",
      error
    );

    setLoginError(
      "Ocurrió un error al iniciar sesión."
    );

  }

};


  /* =========================================================
     REGISTRO CIUDADANO
  ========================================================= */

  const handleRegister = async (e) => {

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


  try {

    /*
      CREAR USUARIO EN SUPABASE AUTH
    */

    const {
      data,
      error,
    } = await supabase.auth.signUp({

      email,

      password,

      options: {
        data: {
          name,
        },
      },

    });


    if (error) {

      console.error(
        "Error al registrar usuario:",
        error
      );

      setRegisterError(
        error.message ||
        "No fue posible crear la cuenta."
      );

      return;
    }


    const authUser =
      data?.user;


    if (!authUser) {

      setRegisterError(
        "No se pudo obtener el usuario creado."
      );

      return;
    }


    /*
      CREAR PERFIL DEL CIUDADANO
    */

    const {
      error: profileError,
    } = await supabase
      .from("profiles")
      .insert({

        id: authUser.id,

        name,

        role: "citizen",

        entity_id: null,

      });


    if (profileError) {

      console.error(
        "Error al crear perfil:",
        profileError
      );

      /*
        Si el usuario ya fue creado en Auth,
        informamos del problema del perfil.
      */

      setRegisterError(
        "La cuenta fue creada, pero no se pudo completar el perfil."
      );

      return;
    }


    /*
      OBJETO TEMPORAL PARA LA INTERFAZ ACTUAL
    */

    const newUser = {

      id: authUser.id,

      name,

      email,

      createdAt:
        authUser.created_at ||
        new Date().toISOString(),

    };


    /*
      Mantenemos temporalmente
      la lista local de usuarios para
      no romper las partes que todavía
      estamos migrando.
    */

    const updatedUsers = [
      ...users.filter(
        (user) =>
          user.email?.toLowerCase() !==
          email
      ),
      newUser,
    ];


    saveUsers(
      updatedUsers
    );


    setCurrentUser(
      newUser
    );


    localStorage.setItem(
      "rb_current_user",
      JSON.stringify(newUser)
    );


    setRegisterForm({

      name: "",
      email: "",
      password: "",
      confirmPassword: "",

    });


    setSuccessMessage(
      "Cuenta creada correctamente."
    );


    setPage(
      "dashboard"
    );


  } catch (error) {

    console.error(
      "Error inesperado:",
      error
    );

    setRegisterError(
      "Ocurrió un error al crear la cuenta."
    );

  }

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

  const handleEntityLogin = async (e) => {

    e.preventDefault();

    setEntityError("");

    const email =
      entityForm.email
        .trim()
        .toLowerCase();

    const password =
      entityForm.password;

    if (!email || !password) {

      setEntityError(
        "Completa el correo institucional y la contraseña."
      );

      return;
    }

    try {

      const {
        data: authData,
        error: authError,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {

        console.error(
          "Error de inicio de sesión de entidad:",
          authError
        );

        setEntityError(
          "Credenciales de entidad incorrectas."
        );

        return;
      }

      const authUser = authData?.user;

      if (!authUser) {

        setEntityError(
          "No se pudo iniciar la sesión de la entidad."
        );

        return;
      }

      /* Obtener el perfil institucional */
      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("id, name, role, entity_id")
        .eq("id", authUser.id)
        .single();

      if (profileError || !profile) {

        console.error(
          "Error al obtener el perfil de entidad:",
          profileError
        );

        setEntityError(
          "La cuenta existe, pero no tiene un perfil de entidad válido."
        );

        await supabase.auth.signOut();
        return;
      }

      if (
        profile.role !== "entity" ||
        !profile.entity_id
      ) {

        setEntityError(
          "Esta cuenta no está configurada como entidad."
        );

        await supabase.auth.signOut();
        return;
      }

      /* Obtener la entidad asociada al perfil */
      const {
        data: entity,
        error: entityError,
      } = await supabase
        .from("entities")
        .select("id, name, email")
        .eq("id", profile.entity_id)
        .single();

      if (entityError || !entity) {

        console.error(
          "Error al obtener la entidad:",
          entityError
        );

        setEntityError(
          "No se encontró la entidad asociada a esta cuenta."
        );

        await supabase.auth.signOut();
        return;
      }

      setCurrentEntity(entity);
      setEntityForm({
        email: "",
        password: "",
      });
      setSelectedEntityReport(null);
      setPage("entity-dashboard");

    } catch (error) {

      console.error(
        "Error inesperado en login de entidad:",
        error
      );

      setEntityError(
        "Ocurrió un error al iniciar sesión."
      );

    }

  };


  /* =========================================================
     CARGAR REPORTES DE LA ENTIDAD
  ========================================================= */

  useEffect(() => {

    const loadEntityReports = async () => {

      if (!currentEntity?.id) {
        setEntityReports([]);
        return;
      }

      const {
        data,
        error,
      } = await supabase
        .from("reports")
        .select(`
          id,
          user_id,
          entity_id,
          category,
          description,
          location,
          evidence_url,
          modality,
          status,
          created_at
        `)
        .eq("entity_id", currentEntity.id)
        .order("created_at", {
          ascending: false,
        });

      if (error) {

        console.error(
          "Error cargando reportes de entidad:",
          error
        );

        setEntityReports([]);
        return;
      }

      const formattedReports =
        (data || []).map((report) => ({
          id: report.id,
          userId: report.user_id,
          entityId: report.entity_id,
          entity: currentEntity.name,
          category: report.category,
          description: report.description,
          location: report.location,
          evidence: report.evidence_url || "",
          modality: report.modality,
          status: report.status,
          date: new Date(
            report.created_at
          ).toLocaleDateString("es-CO"),
          createdAt: report.created_at,
        }));

      setEntityReports(formattedReports);

    };

    loadEntityReports();

  }, [currentEntity]);


  /* =========================================================
     CERRAR SESIÓN ENTIDAD
  ========================================================= */

  const handleEntityLogout = async () => {

    await supabase.auth.signOut();

    setCurrentEntity(null);
    setEntityReports([]);
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

 const createReport = async (e) => {

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

  try {

    /*
      1. Determinar la entidad responsable
      según la categoría.
    */

    const responsibleEntity =
      getResponsibleEntity(
        reportForm.category
      );

    /*
      2. Buscar el ID de la entidad
      en Supabase.
    */

    const {
      data: entity,
      error: entityError,
    } = await supabase
      .from("entities")
      .select("id, name")
      .eq("name", responsibleEntity)
      .single();

    if (entityError || !entity) {

      console.error(
        "Error al buscar entidad:",
        entityError
      );

      setReportError(
        "No se pudo determinar la entidad responsable del reporte."
      );

      return;
    }

    /*
      3. Crear el reporte en Supabase.
    */

    const {
      data: createdReport,
      error: reportInsertError,
    } = await supabase
      .from("reports")
      .insert({
        user_id: currentUser.id,

        entity_id: entity.id,

        category:
          reportForm.category,

        description:
          reportForm.description.trim(),

        location:
          reportForm.location.trim(),

        evidence_url:
          reportForm.evidence || null,

        modality:
          reportForm.modality,

        status:
          "Reportado",
      })
      .select()
      .single();

    if (reportInsertError) {

      console.error(
        "Error al crear reporte:",
        reportInsertError
      );

      setReportError(
        "No fue posible registrar el reporte."
      );

      return;
    }

    /*
      4. Si el reporte es identificado,
      guardar sus datos de contacto.
    */

    if (
      reportForm.modality ===
      "Identificado"
    ) {

      const {
        error: contactError,
      } = await supabase
        .from("report_contacts")
        .insert({

          report_id:
            createdReport.id,

          user_id:
            currentUser.id,

          name:
            currentUser.name,

          email:
            currentUser.email,

        });

      if (contactError) {

        console.error(
          "Error al guardar datos del ciudadano:",
          contactError
        );

        /*
          El reporte ya fue creado.
          Avisamos del problema adicional.
        */

        setReportError(
          "El reporte fue creado, pero no se pudieron guardar los datos del ciudadano."
        );

        return;
      }
    }

    /*
      5. Añadir también el reporte al estado
      local temporal para que la interfaz
      siga funcionando mientras terminamos
      la migración.
    */

    const localReport = {

      id:
        createdReport.id,

      userId:
        currentUser.id,

      category:
        createdReport.category,

      description:
        createdReport.description,

      location:
        createdReport.location,

      evidence:
        reportForm.evidence || "",

      modality:
        createdReport.modality,

      entity:
        responsibleEntity,

      entityId:
        entity.id,

      status:
        createdReport.status,

      date:
        new Date(
          createdReport.created_at
        ).toLocaleDateString(
          "es-CO"
        ),

      createdAt:
        createdReport.created_at,

    };

    /*
      Mantener temporalmente la lista local.
    */

    const updatedReports = [
      localReport,
      ...reports,
    ];

    saveReports(
      updatedReports
    );

    /*
      6. Limpiar formulario.
    */

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

    setPage(
      "my-reports"
    );

  } catch (error) {

    console.error(
      "Error inesperado al crear reporte:",
      error
    );

    setReportError(
      "Ocurrió un error al registrar el reporte."
    );

  }

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

  const updateReportStatus = async (
    reportId,
    newStatus
  ) => {

    if (!currentEntity?.id) {
      return;
    }

    try {

      const {
        data,
        error,
      } = await supabase
        .from("reports")
        .update({
          status: newStatus,
        })
        .eq("id", reportId)
        .eq("entity_id", currentEntity.id)
        .select(`
          id,
          user_id,
          entity_id,
          category,
          description,
          location,
          evidence_url,
          modality,
          status,
          created_at
        `)
        .single();

      if (error) {

        console.error(
          "Error actualizando estado:",
          error
        );

        alert(
          "No se pudo actualizar el estado del reporte."
        );

        return;
      }

      const updatedReport = {
        id: data.id,
        userId: data.user_id,
        entityId: data.entity_id,
        entity: currentEntity.name,
        category: data.category,
        description: data.description,
        location: data.location,
        evidence: data.evidence_url || "",
        modality: data.modality,
        status: data.status,
        date: new Date(
          data.created_at
        ).toLocaleDateString("es-CO"),
        createdAt: data.created_at,
      };

      setEntityReports((prevReports) =>
        prevReports.map((report) =>
          String(report.id) === String(reportId)
            ? updatedReport
            : report
        )
      );

      setReports((prevReports) =>
        prevReports.map((report) =>
          String(report.id) === String(reportId)
            ? {
                ...report,
                status: data.status,
              }
            : report
        )
      );

      setSelectedEntityReport(updatedReport);

    } catch (error) {

      console.error(
        "Error inesperado actualizando estado:",
        error
      );

      alert(
        "Ocurrió un error al actualizar el estado."
      );

    }

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