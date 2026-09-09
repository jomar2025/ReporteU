import StatusBadge from "./StatusBadge";

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

export default ReportRow;