import { useState } from "react";

import filterIcon from "../../../../../shared/filter-64-icon.png";
import GeneralFilterModal from "./GeneralFilterModal";

function GeneralFilter(props) {
  const [generalFilterActive, setGeneralFilterActive] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {generalFilterActive && (
        <GeneralFilterModal setGeneralFilterActive={setGeneralFilterActive} />
      )}
      <div
        style={{
          backgroundColor: "#f6f6f6",
          borderRadius: "3px",
          padding: "3px",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setGeneralFilterActive(true)}
      >
        <img src={filterIcon} height="22px" alt="filter-icon" />
        &nbsp;&nbsp;Filter
      </div>
    </div>
  );
}

export default GeneralFilter;
