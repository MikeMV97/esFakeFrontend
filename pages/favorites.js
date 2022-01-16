import { SideBarMenu } from "../components/SideBarMenu";
import { UserHomeContainer } from "../styles/UserHomeContainer/UserHomeContainer";
import { NewsAnalysis } from "../components/NewsAnalysis";
import { NewsContainer } from "../styles/NewsContainer/NewsContainer"
import { useFavorites } from "../hooks/useFavorite";


const MyAnalysis = () => {
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
