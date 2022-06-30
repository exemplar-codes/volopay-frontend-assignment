import { useState } from "react";
import Filtering from "./Filtering/Filtering";
import TabSection from "./TabSection";

function FilterAndTab(props) {
  const [filterByNameKey, setFilterByNameKey] = useState("");
  return (
    <>
      <Filtering
        setFilterByNameKey={setFilterByNameKey}
        filterByNameKey={filterByNameKey}
      />
      <TabSection
        route={props.route}
        filterByNameKey={filterByNameKey}
        viewsData={props.viewsData}
      />
    </>
  );
}

export default FilterAndTab;
