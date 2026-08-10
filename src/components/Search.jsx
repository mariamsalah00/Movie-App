function Search({ search, setSearch }) {
  return (
    <div className="row my-4">
      <div className="col-md-8 mx-auto">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search for a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;