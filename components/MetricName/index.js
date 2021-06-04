import PropTypes from "prop-types";
import { StyledMetric } from "./styles";

export const MetricName = ({ name }) => {
  return (
    <StyledMetric >
      <div className="block" />
      <p>{name}</p>
    </StyledMetric>
  );
};

MetricName.propTypes = {
  name: PropTypes.string.isRequired,
};
