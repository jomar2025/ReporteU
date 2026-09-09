import logoAlcaldia from "../assets/logo1.png";

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

export default DashboardHeader;