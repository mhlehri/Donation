const InputField = ({ searchandle, allCardData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchV = e.target.search.value;
    if (searchV == "") {
      searchandle(allCardData);
    } else {
      const isfindCard = allCardData?.filter(
        (card) => card.category.toUpperCase() === searchV.toUpperCase()
      );

      if (isfindCard.length !== 0) {
        searchandle(isfindCard);
      } else {
        searchandle(allCardData);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-control">
      <div className="input-group">
        <input
          type="text"
          name="search"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn bg-[#FF444A] hover:bg-[#FF444A99]">
          Search
        </button>
      </div>
    </form>
  );
};

export default InputField;
