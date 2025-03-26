export const Pagination = ({
  currentPage,
  prevPage,
  paginationRange,
  nextPage,
  pageHandler,
  totalNumberOfPages,
}) => {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          return (
            <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
            >
              <button
                onClick={() => pageHandler(pageNumber)}
                className="page-link"
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li
          className={`page-item ${currentPage === totalNumberOfPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={nextPage}
            disabled={currentPage === totalNumberOfPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
