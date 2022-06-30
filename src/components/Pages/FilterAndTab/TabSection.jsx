import PropTypes from "prop-types";
import styles from "./TabSection.module.css";
import Card from "../../Card/Card";



function sectionCriteria() {
  // return ["all", "your", "blocked"].indexOf(route) === viewData.orderId;
  return Math.random() > 0.5;
}

function TabSection(props) {
  const rowWiseViews = [];
  let filterByNameCriteria = () => true;

  if (props.filterByNameKey) {
    console.log("Name filter", props.filterByNameKey);
    filterByNameCriteria = (viewData) =>
      viewData.name.toLowerCase().includes(props.filterByNameKey);
  }

  // make row-wise pairs
  let row = [];
  for (const viewData of props.viewsData
    .filter(sectionCriteria)
    .filter((viewData) => filterByNameCriteria(viewData))) {
    if (row.length === 2) {
      rowWiseViews.push(row);
      row = [viewData];
    } else row.push(viewData);
  }

  return (
    <div>
      {rowWiseViews.map(([leftData, rightData], k) => (
        <div className={styles["row-style"]} key={k}>
          {/* <p>{k}</p> */}
          <Card
            {...leftData}
            cardType={sectionCriteria() ? "burner" : "subscription"}
          />
          {rightData && (
            <Card
              {...rightData}
              cardType={sectionCriteria() ? "burner" : "subscription"}
            />
          )}
        </div>
      ))}
    </div>
  );
}

TabSection.propTypes = {
  route: PropTypes.oneOf(["your", "all", "blocked"]),
};

export default TabSection;
