import PropTypes from "prop-types";
import { Green, PinkRed } from "../../../shared/sharedAssets";

const style = { width: "100%", fontSize: "8.5px" };

function CustomProgressBar(props) {
  const value1Percentage = (100 * props.value1) / (props.value1 + props.value2);

  return (
    <div style={style}>
      <span
        style={{
          width: `${value1Percentage}%`,
          backgroundColor: PinkRed,
          display: "inline-block",
          borderRadius: `4px  ${
            value1Percentage === 100 ? "4px 4px" : "0 0"
          } 4px`,
        }}
      >
        &nbsp;
      </span>
      <span
        style={{
          width: `${100 - value1Percentage}%`,
          backgroundColor: Green,
          display: "inline-block",
          borderRadius: `${value1Percentage ? "0" : "4px"} 4px 4px ${
            value1Percentage ? "0" : "4px"
          }`,
        }}
      >
        &nbsp;
      </span>
    </div>
  );
}

CustomProgressBar.propTypes = {
  value1: PropTypes.number,
  value2: PropTypes.number,
};

CustomProgressBar.defaultProps = {
  value1: 30,
  value2: 70,
};

export default CustomProgressBar;
