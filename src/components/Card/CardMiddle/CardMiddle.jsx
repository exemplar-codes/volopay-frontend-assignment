import PropTypes from "prop-types";
import CardTypePill from "./CardTypePill";
import styles from "./CardMiddle.module.css";

function CardMiddle(props) {
  return (
    <div className={styles["card-middle"]}>
      <CardTypePill />
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
};

CardMiddle.defaultProps = {
  limit: { value: 40, currency: "SGD" },
  expiry: "9 Feb",
};

export default CardMiddle;
