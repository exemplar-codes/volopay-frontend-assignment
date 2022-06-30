import { useState } from "react";
import searchIcon from "../../../../shared/search-50-icon.png";

function FilterByName(props) {
  const [filterByNameActive, setFilterByNameActive] = useState(false);
  return (
    <>
      {filterByNameActive ? (
        <>
          <input
            type="text"
            value={props.filterByNameKey}
            onChange={(e) => {
              const inputText = e.target.value.trim().toLocaleLowerCase();
              props.setFilterByNameKey(inputText);
            }}
          />
          &nbsp;
          <button onClick={() => setFilterByNameActive(false)}>Back</button>
        </>
      ) : (
        <div
          style={{
            backgroundColor: "#f6f6f6",
            borderRadius: "3px",
            padding: "3px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => setFilterByNameActive(true)}
        >
          <img src={searchIcon} height="22px" alt="search-icon" />
        </div>
      )}
    </>
  );
}

export default FilterByName;
