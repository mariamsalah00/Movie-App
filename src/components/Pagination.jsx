function Pagination({ page, setPage, totalPages }) {
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center gap-3 my-4">
            <button className="btn btn-warning" onClick={previousPage} disabled={page === 1}>
                Previous
            </button>

            <span className="fw-bold">
                Page {page} of {totalPages}
            </span>

            <button className="btn btn-warning" onClick={nextPage} disabled={page === totalPages}>
                Next
            </button>
        </div>
    );
}

export default Pagination;
