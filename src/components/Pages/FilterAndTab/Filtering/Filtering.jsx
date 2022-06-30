import { useState } from "react";

import FilterByName from "./FilterByName";
import styles from "./Filtering.module.css";
import GeneralFilter from "./GeneralFilter/GeneralFilter";

function Filtering(props) {
  return (
    <div className={styles["filtering"]}>
      <FilterByName
        setFilterByNameKey={props.setFilterByNameKey}
        filterByNameKey={props.filterByNameKey}
      />
      &nbsp; &nbsp;
      <GeneralFilter />
    </div>
  );
}

export default Filtering;
