interface Props {
  page: number;
  totalPages: number;
  next: () => void;
  prev: () => void;
  goToPage: (p: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  next,
  prev,
  goToPage,
}: Props) {
  // Generar un rango de páginas (máximo 5 visibles)
  const getPages = () => {
    const pages = [];
    const maxButtons = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start < maxButtons - 1) {
      start = Math.max(1, end - maxButtons + 1);
    }

    for (let i = start; i <= end; i++) pages.push(i);

    return pages;
  };

  return (
    <nav className="pagination is-centered" role="navigation">
      {/* Botón anterior */}
      <button className="button" disabled={page <= 1} onClick={prev}>
        ←
      </button>

      {/* Números */}
      <ul className="pagination-list mx-3">
        {getPages().map((num) => (
          <li key={num}>
            <button
              className={`pagination-link ${page === num ? "is-current" : ""}`}
              style={{
                backgroundColor: page === num ? "#c36becff" : "#00bfc5ff",
                color: "white",
                borderRadius: "6px",
              }}
              onClick={() => goToPage(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>

      {/* Botón siguiente */}
      <button className="button" disabled={page >= totalPages} onClick={next}>
        →
      </button>
    </nav>
  );
}
