export const Button = ({
  onClick,
  children,
  disabled = false,
  highlighted = false,
  border=false,
}) => (
  <button
    style={{
      fontWeight: highlighted ? "bold" : "normal",
      border: border ? "1px solid #389bff" : "none",
      borderRadius: "8px",

    }}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
