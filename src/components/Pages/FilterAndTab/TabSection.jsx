import PropTypes from "prop-types";
import styles from "./TabSection.module.css";
import Card from "../../Card/Card";

function sectionCriteria() {
  // return ["all", "your", "blocked"].indexOf(route) === viewData.orderId;
  return Math.random() > 0.5;
}

function TabSection(props) {
  const filterByNameCriteria = props.filterByNameKey
    ? (viewData) => viewData.name.toLowerCase().includes(props.filterByNameKey)
    : () => true;

  const filterByCardTypeCriteria = props.filterByCardType
    ? (viewData) => viewData.cardType === props.filterByCardType
    : () => true;

  // make row-wise pairs
  const rowWiseViews = [];
  let row = [];
  for (const viewData of props.viewsData
    .filter(sectionCriteria)
    .filter(filterByNameCriteria)
    .filter(filterByCardTypeCriteria)) {
    if (row.length === 2) {
      rowWiseViews.push(row);
      row = [viewData];
    } else row.push(viewData);
  }

  return (
    <div>
      {rowWiseViews.map(([leftData, rightData], k) => (
        <div className={styles["row-style"]} key={k}>
          <Card {...leftData} />
          {rightData && <Card {...rightData} />}
        </div>
      ))}
    </div>
  );
}

TabSection.propTypes = {
  route: PropTypes.oneOf(["your", "all", "blocked"]),
};

export default TabSection;
