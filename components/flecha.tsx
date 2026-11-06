/** Flecha diagonal que reemplaza a los enlaces de texto tipo "Ver todos". */
export function Flecha({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 18 18 6M8 6h10v10" />
    </svg>
  );
}
