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

export default StatusTimeline;