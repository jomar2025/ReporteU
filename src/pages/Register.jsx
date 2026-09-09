import logoAlcaldia from "../assets/logo1.png";

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
          type="button"
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

            <button
              onClick={goToLogin}
              type="button"
            >
              Inicia sesión
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;