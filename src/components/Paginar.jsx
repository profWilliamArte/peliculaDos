

const Paginar = ({currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="d-flex justify-content-evenly" id="paginar">
        <div className="text-center  text-white">
        Pagina ({currentPage} de {totalPages})
        </div>
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
            <li className="page-item">
                <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                >
                Anterior
                </a>
            </li>
            <li className="page-item active">
                <a className="page-link" href="#">
                {currentPage}
                </a>
            </li>
            <li className="page-item">
                <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                >
                Siguiente
                </a>
            </li>
            </ul>
        </nav>
  </div>
  )
}

export default Paginar