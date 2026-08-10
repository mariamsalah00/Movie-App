function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
            <div className="spinner-border text-warning" role="status" style={{ width: "4rem", height: "4rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
