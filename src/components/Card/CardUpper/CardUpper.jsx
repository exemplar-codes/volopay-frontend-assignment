import PropTypes from "prop-types";
import styles from "./CardUpper.module.css";

import fireIcon from "../../../shared/fire-60-icon.png";

function CardUpper(props) {
  return (
    <div className={styles["card-upper"]}>
      <div className={styles["card-left"]}>
        <span className={styles["card-main-text"]}>{props.name}</span>
        <span className={styles["card-secondary-text"]}>
          {props.ownerName}
          &nbsp;{" • "}&nbsp;
          {props.budgetName}
        </span>
      </div>
      <div className={styles["card-right"]}>
        <div className={styles["fire-icon"]}>
          <img src={fireIcon} height="22px" alt="fire-icon" />
        </div>
      </div>
    </div>
  );
}

CardUpper.propTypes = {
  name: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  budgetName: PropTypes.string.isRequired,
};

CardUpper.defaultProps = {
  name: "Mixmax",
  ownerName: "Vishal",
  budgetName: "Software Subscription",
};

export default CardUpper;
