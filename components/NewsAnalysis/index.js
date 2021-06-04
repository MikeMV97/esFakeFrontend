import PropTypes from "prop-types";
import { StyledNew } from "./styles";

export const NewsAnalysis = ({ title, name }) => {
  return (
    <StyledNew>
      <div>
        <img src="/newsPaperIconBlack.png" />
      </div>
      <h5>{title}</h5>
      <p>{name}</p>
      <button>Ver de nuevo</button>
    </StyledNew>
  );
};

NewsAnalysis.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
