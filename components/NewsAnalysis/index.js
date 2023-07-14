import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { StyledNew } from "./styles";

export const NewsAnalysis = ({ title, id }) => {
  const router = useRouter()
  return (
    <StyledNew>
      <div>
        <img src="/newsPaperIconBlack.png" />
      </div>
      <h5>{title}</h5>
      <button onClick={() => {
        router.push({
          pathname: '/report',
          query: {
            title,
            id
          }
        })
      }}>Ver de nuevo</button>
    </StyledNew>
  );
};

NewsAnalysis.propTypes = {
  title: PropTypes.string.isRequired,
};
