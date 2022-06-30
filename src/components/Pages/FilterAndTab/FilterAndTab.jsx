import { useState } from "react";
import Filtering from "./Filtering/Filtering";
import TabSection from "./TabSection";

function FilterAndTab(props) {
  const [filterByNameKey, setFilterByNameKey] = useState("");
  const [filterByCardType, setFilterByCardType] = useState("");
  const [filterByOwnerName, setFilterByOwnerName] = useState("");

  const filterByNameCriteria = filterByNameKey
    ? (viewData) => viewData.name.toLowerCase().includes(filterByNameKey)
    : () => true;

  const filterByCardTypeCriteria = filterByCardType
    ? (viewData) => viewData.cardType === filterByCardType
    : () => true;

  const filterByOwnerNameCriteria = filterByOwnerName
    ? (viewData) => viewData.ownerName === filterByOwnerName
    : () => true;

  let filteredViews = props.viewsData
    .filter(filterByNameCriteria)
    .filter(filterByCardTypeCriteria);

  const ownerNames = [
    ...new Set(filteredViews.map((viewData) => viewData.ownerName)),
  ];

  filteredViews = filteredViews.filter(filterByOwnerNameCriteria);
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
        filterByOwnerName={filterByOwnerName}
        ownerNames={ownerNames}
      />
      <TabSection rowWiseViewsData={rowWiseViewsData} />
    </>
  );
}

export default FilterAndTab;
