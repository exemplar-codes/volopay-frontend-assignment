import PropTypes from "prop-types";
import styles from "./TabSection.module.css";
import Card from "../../Card/Card";

function TabSection(props) {
  return (
    <div>
      {props.rowWiseViewsData.map(([leftData, rightData], k) => (
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
