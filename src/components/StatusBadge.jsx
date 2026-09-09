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

export default StatusBadge;