import PropTypes from "prop-types";
import styles from "./Card.module.css";
import CardMiddle from "./CardMiddle/CardMiddle";
import CardUpper from "./CardUpper/CardUpper";
import CardLower from "./CardLower/CardLower";

function Card(props) {
  return (
    <div
      className={styles["card-container"]}
      style={{
        boxShadow: `0px 0px 10px 10px ${
          props.cardType === "burner" ? "#d3d3d3" : "#f6f6f6"
        }`,
      }}
    >
      <CardUpper
        name={props.name}
        ownerName={props.ownerName}
        budgetName={props.budgetName}
      />
      <br />
      <CardMiddle
        expiry={props.expiry}
        limit={props.lmit}
        cardType={props.cardType}
      />
      <CardLower
        spent={props.spent}
        availableToSpend={props.availableToSpend}
      />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  budgetName: PropTypes.string.isRequired,
  cardType: PropTypes.oneOf(["burner", "subscription"]).isRequired,
  availableToSpend: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }).isRequired,
  spent: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }).isRequired,
  expiry: PropTypes.string,
  limit: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }),
};

Card.defaultProps = {
  name: "Mixmax",
  ownerName: "Vishal",
  budgetName: "Software Subscription",
  cardType: "burner",
  availableToSpend: { value: 1000, currency: "SGD" },
  spent: { value: 400, currency: "SGD" },
  limit: { value: 40, currency: "SGD" },
  expiry: "9 Feb",
};

export default Card;
