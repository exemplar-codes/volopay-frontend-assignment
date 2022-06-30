import { useState } from "react";
import Filtering from "./Filtering/Filtering";
import TabSection from "./TabSection";

function FilterAndTab(props) {
  const [filterByNameKey, setFilterByNameKey] = useState("");
  const [filterByCardType, setFilterByCardType] = useState("");

  return (
    <>
      <Filtering
        setFilterByNameKey={setFilterByNameKey}
        setFilterByCardType={setFilterByCardType}
        filterByNameKey={filterByNameKey}
        filterByCardType={filterByCardType}
      />
      <TabSection
        viewsData={props.viewsData}
        route={props.route}
        filterByNameKey={filterByNameKey}
        filterByCardType={filterByCardType}
      />
    </>
  );
}

export default FilterAndTab;
