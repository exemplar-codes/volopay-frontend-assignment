function FilterByName(props) {
  return (
    <input
      type="text"
      value={props.filterByNameKey}
      onChange={(e) => {
        const inputText = e.target.value.toLocaleLowerCase();
        props.setFilterByNameKey(inputText);
      }}
    />
  );
}

export default FilterByName;
