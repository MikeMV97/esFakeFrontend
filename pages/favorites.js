import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { NewsAnalysis } from "../components/NewsAnalysis";
import { NewsContainer } from "../styles/NewsContainer/NewsContainer"
import { useFavorites } from "../hooks/useFavorite";
import { protectRoute } from "../utils/protectRoute";


const MyAnalysis = () => {
  protectRoute()
  // eslint-disable-next-line no-unused-vars
  const [favorites, _, __] = useFavorites();
  return (
    <UserHomeContainer>
      <SideBarMenu />
      <main>
        <h1>Tus favoritos</h1>
        <NewsContainer>
          {
            favorites.map((favorite) => (
              <NewsAnalysis
                key={favorite.id}
                {...favorite}
              />
            ))
          }
        </NewsContainer>
      </main>
    </UserHomeContainer>
  );
};

export default MyAnalysis;
