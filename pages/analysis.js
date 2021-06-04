import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { AnalysisForm } from "../components/AnalysisForm";

const Analysys = () => {
  return (
    <UserHomeContainer>
      <SideBarMenu />
      <main>
        <AnalysisForm />
      </main>
    </UserHomeContainer>
  );
};

export default Analysys;
