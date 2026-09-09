import logoAlcaldia from "../assets/logo1.png";

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
          type="button"
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

            <button
              onClick={goToRegister}
              type="button"
            >
              Regístrate aquí
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;