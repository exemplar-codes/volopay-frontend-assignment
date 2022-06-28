import PropTypes from "prop-types";
import styles from "./TabSection.module.css";
import Card from "../Card/Card";

function TabSection(props) {
  const data = [
    {
      name: "Mixmax",
      ownerName: "Vishal",
      budgetName: "Software Subscription",
      cardType: "burner",
      availableToSpend: { value: 1000, currency: "SGD" },
      spent: { value: 400, currency: "SGD" },
      limit: { value: 40, currency: "SGD" },
      expiry: "9 Feb",
    },
    {
      name: "Mixmax",
      ownerName: "Vishal",
      budgetName: "Software Subscription",
      cardType: "burner",
      availableToSpend: { value: 1000, currency: "SGD" },
      spent: { value: 400, currency: "SGD" },
      limit: { value: 40, currency: "SGD" },
      expiry: "9 Feb",
    },
    {
      name: "Mixmax",
      ownerName: "Vishal",
      budgetName: "Software Subscription",
      cardType: "burner",
      availableToSpend: { value: 1000, currency: "SGD" },
      spent: { value: 400, currency: "SGD" },
      limit: { value: 40, currency: "SGD" },
      expiry: "9 Feb",
    },
    {
      name: "Mixmax",
      ownerName: "Vishal",
      budgetName: "Software Subscription",
      cardType: "burner",
      availableToSpend: { value: 1000, currency: "SGD" },
      spent: { value: 400, currency: "SGD" },
      limit: { value: 40, currency: "SGD" },
      expiry: "9 Feb",
    },
  ];
  const rowWiseViews = [[data[0], data[1]], [data[2]]];

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

TabSection.propTypes = {};

TabSection.defaultProps = {};

export default TabSection;
