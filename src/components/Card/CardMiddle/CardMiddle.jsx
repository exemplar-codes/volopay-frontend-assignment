import PropTypes from "prop-types";
import CardTypePill from "./CardTypePill";
import styles from "./CardMiddle.module.css";

function CardMiddle(props) {
  return (
    <div className={styles["card-middle"]}>
      <CardTypePill cardType={props.cardType} />
      <div>
        {props.expiry
          ? `Expires: ${props.expiry}`
          : `August Limit: ${props.limit}`}
      </div>
    </div>
  );
}

CardMiddle.propTypes = {
  limit: PropTypes.shape({
    value: PropTypes.number.isRequired,
    currency: PropTypes.oneOf(["SGD", "USD", "INR"]),
  }),
  expiry: PropTypes.string,
  cardType: PropTypes.oneOf(["burner", "subscription"]).isRequired,
};

CardMiddle.defaultProps = {
  limit: { value: 40, currency: "SGD" },
  expiry: "9 Feb",
  cardType: "burner",
};

export default CardMiddle;
