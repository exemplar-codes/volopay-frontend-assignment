import { useState } from "react";
import searchIcon from "../../../shared/search-50-icon.png";
import FilterByName from "./FilterByName";
import styles from "./Filtering.module.css";

function Filtering(props) {
  const [filterByNameActive, setFilterByNameActive] = useState(false);
  return (
    <div className={styles["filtering"]}>
      {filterByNameActive ? (
        <>
          <FilterByName
            setFilterByNameKey={props.setFilterByNameKey}
            filterByNameKey={props.filterByNameKey}
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
          }}
          onClick={() => setFilterByNameActive(true)}
        >
          <img src={searchIcon} height="22px" alt="search-icon" />
        </div>
      )}
    </div>
  );
}

export default Filtering;
