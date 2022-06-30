import { useState } from "react";
import Filtering from "./Filtering/Filtering";
import TabSection from "./TabSection";

function coinToss() {
  // return ["all", "your", "blocked"].indexOf(route) === viewData.orderId;
  return Math.random() > 0.5;
}

function FilterAndTab(props) {
  const [filterByNameKey, setFilterByNameKey] = useState("");
  const [filterByCardType, setFilterByCardType] = useState("");
  const [filterByOwnerName, setFilterByOwnerName] = useState("");

  const filterByRouteCriteria = coinToss;

  const filterByNameCriteria = props.filterByNameKey
    ? (viewData) => viewData.name.toLowerCase().includes(props.filterByNameKey)
    : () => true;

  const filterByCardTypeCriteria = props.filterByCardType
    ? (viewData) => viewData.cardType === props.filterByCardType
    : () => true;

  const filteredViews = props.viewsData
    .filter(filterByRouteCriteria)
    .filter(filterByNameCriteria)
    .filter(filterByCardTypeCriteria);

  const ownerNames = filteredViews.map((viewData) => viewData.ownerName);

  // make row-wise pairs
  const rowWiseViewsData = [];
  let row = [];
  for (const viewData of filteredViews) {
    if (row.length === 2) {
      rowWiseViewsData.push(row);
      row = [viewData];
    } else row.push(viewData);
  }
  return (
    <>
      <Filtering
        setFilterByNameKey={setFilterByNameKey}
        setFilterByCardType={setFilterByCardType}
        setFilterByOwnerName={setFilterByOwnerName}
        filterByNameKey={filterByNameKey}
        filterByCardType={filterByCardType}
        filterByOwnerName={filterByCardType}
        ownerNames={ownerNames}
      />
      <TabSection
        rowWiseViewsData={rowWiseViewsData}
        route={props.route}
        filterByNameKey={filterByNameKey}
        filterByCardType={filterByCardType}
        filterByOwnerName={filterByCardType}
      />
    </>
  );
}

export default FilterAndTab;
