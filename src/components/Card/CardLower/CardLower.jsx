import PropTypes from "prop-types";
import { Green, PinkRed } from "../../../shared/sharedAssets";
import BulletColumn from "./BulletColumn";
import styles from "./CardLower.module.css";

import CustomProgressBar from "./CustomProgressBar";

function CardLower(props) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: '7px' }}>
        <CustomProgressBar
          value1={props.spent.value}
          value2={props.availableToSpend.value}
        />
      </div>
      <BulletColumn
        color={PinkRed}
        keyText="Spent"
        valueText={`${props.spent.value} ${props.spent.currency}`}
      />
      <BulletColumn
        color={Green}
        keyText="Available to Spend"
        valueText={`${props.availableToSpend.value} ${props.availableToSpend.currency}`}
        boldValueText
      />
    </div>
  );
}

CardLower.propTypes = {
  availableToSpend: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }).isRequired,
  spent: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }).isRequired,
};

CardLower.defaultProps = {
  availableToSpend: { value: 1000, currency: "SGD" },
  spent: { value: 400, currency: "SGD" },
};

export default CardLower;
