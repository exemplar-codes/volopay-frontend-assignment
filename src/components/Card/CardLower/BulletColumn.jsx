import PropTypes from "prop-types";
import styles from "./BulletColumn.module.css";

function BulletColumn(props) {
  return (
    <div className={styles["bullet-column"]}>
      <div className={styles["key-side"]}>
        <span style={{ color: props.color, fontSize: "40px" }}>•</span>
        &nbsp;&nbsp;
        {props.keyText}
      </div>
      <div style={props.boldValueText ? { fontWeight: "bold" } : {}}>
        {props.valueText}
      </div>
    </div>
  );
}

BulletColumn.propTypes = {
  color: PropTypes.string,
  keyText: PropTypes.string,
  valueText: PropTypes.string,
  boldValueText: PropTypes.bool,
};
BulletColumn.defaultProps = {
  color: "lime",
  keyText: "Spent",
  valueText: "128 SGD",
  boldValueText: false,
};

export default BulletColumn;
