import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { MetricName } from "../components/MetricName";
import { NewsAnalysis } from "../components/NewsAnalysis";
import {NewsContainer} from "../styles/NewsContainer/NewsContainer"
import styled from 'styled-components';

const RecurrentSites = styled.div`
  margin-bottom: 3rem;
  
  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }
`;


const MyAnalysis = () => {
  return (
    <UserHomeContainer>
      <SideBarMenu />
      <main>
        <h1>Revisa el historial de tus análisis</h1>
        <h2>Tus sitios más analizados</h2>
        <RecurrentSites>
          <ul>
            <li>
              <MetricName name="Sitio 1" />
            </li>
            <li>
              <MetricName name="Sitio 2" />
            </li>
            <li>
              <MetricName name="Sitio 3" />
            </li>
          </ul>
        </RecurrentSites>
        <h2>Análisis recientes</h2>
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
        </NewsContainer>
      </main>
    </UserHomeContainer>
  );
};

export default MyAnalysis;
