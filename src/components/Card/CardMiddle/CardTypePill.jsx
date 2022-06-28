import PropTypes from "prop-types";
import { SecondaryTextDark } from "../../../shared/sharedAssets";

const pillStyle = {
  padding: "2px",
  paddingLeft: "7px",
  paddingRight: "7px",
  border: `1px solid ${SecondaryTextDark}`,
  fontSize: "11px",
  borderRadius: "4px",
  fontWeight: "800",
};

function CardTypePill(props) {
  return <span style={pillStyle}>{props.cardType.toUpperCase()}</span>;
}

CardTypePill.props = {
  cardType: PropTypes.oneOf(["burner", "subscription"]).isRequired,
};

CardTypePill.defaultProps = {
  cardType: "subscription",
};

export default CardTypePill;
