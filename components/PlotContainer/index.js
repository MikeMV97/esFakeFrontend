import PropTypes from "prop-types";
import { DynamicPlotGrid, LabelsGrid } from "./styles";
import { BarPlotComponent } from "./BarPlotComponent";

export const PlotContainer = ({ features }) => {
  return (
    <>
      <DynamicPlotGrid>
        {features.map(({ name, value }) => {
          return <BarPlotComponent key={name} heightSize={value} >
            <div className="bar" />
          </BarPlotComponent>;
        })}
      </DynamicPlotGrid>
      <LabelsGrid>
        {features.map(({ name }) => {
          return (
            <div key={name}>
              <p>{name}</p>
            </div>
          );
        })}
      </LabelsGrid>
    </>
  );
};

PlotContainer.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
