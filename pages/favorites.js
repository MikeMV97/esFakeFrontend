import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { MetricName } from "../components/MetricName";
import { NewsAnalysis } from "../components/NewsAnalysis";
import {NewsContainer} from "../styles/NewsContainer/NewsContainer"

const MyAnalysis = () => {
  return (
    <UserHomeContainer>
      <SideBarMenu />
      <main>
        <h1>Tus favoritos</h1>
        <NewsContainer>
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
          <NewsAnalysis
            title="Sector educativo podría ir a clases presenciales en octubre "
            name="El Universal"
          />
        </NewsContainer>
      </main>
    </UserHomeContainer>
  );
};

export default MyAnalysis;
