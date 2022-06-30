import PropTypes from "prop-types";
import styles from "./TabSection.module.css";
import Card from "../Card/Card";
import { useState } from "react";

let data = [
  {
    orderId: 0,
    name: "Apple",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "burner",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
  {
    orderId: 1,
    name: "Amazon",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "subscription",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
  {
    orderId: 2,
    name: "Coca-Cola",
    ownerName: "Vishal",
    budgetName: "Software Subscription",
    cardType: "subscription",
    availableToSpend: { value: 1000, currency: "SGD" },
    spent: { value: 400, currency: "SGD" },
    limit: { value: 40, currency: "SGD" },
    expiry: "9 Feb",
  },
];

const scrollLimit = 54;

function sectionCriteria() {
  // return ["all", "your", "blocked"].indexOf(route) === viewData.orderId;
  return Math.random() > 0.5;
}

function TabSection(props) {
  window.onscroll = function (e) {
    // print "false" if direction is down and "true" if up
    const scrollPercentage = (100 * this.scrollY) / document.body.scrollHeight;
    if (scrollPercentage > 20) {
      if (!(viewsData.length > scrollLimit)) {
        setViewsData((prevViews) => [...prevViews, ...data]); // add 3 data points, mocking server fetch
      }
    }
  };

  const [viewsData, setViewsData] = useState([
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ]);

  const rowWiseViews = [];
  let filterByNameCriteria = () => true;

  if (props.filterByNameKey) {
    console.log("Name filter", props.filterByNameKey);
    filterByNameCriteria = (viewData) =>
      viewData.name.toLowerCase().includes(props.filterByNameKey);
  }

  // make row-wise pairs
  let row = [];
  for (const viewData of viewsData
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
