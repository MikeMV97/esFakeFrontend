import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { AnalysisForm } from "../components/AnalysisForm";
import { protectRoute } from "../utils/protectRoute";

const Analysis = () => {
  protectRoute()
  return (
    <UserHomeContainer>
      <SideBarMenu />
      <main>
        <AnalysisForm />
      </main>
    </UserHomeContainer>
  );
};

export default Analysis;