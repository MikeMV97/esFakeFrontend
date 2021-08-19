import { ReportGridLayout } from "../components/ReportGridLayout";
import styled from "styled-components";

const ReportLayout = styled.div`
  width: calc(100vw - 300px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 150px;
`;

const Report = () => {
  return (
    <ReportLayout>
      <ReportGridLayout />
    </ReportLayout>
  );
};

export default Report;
