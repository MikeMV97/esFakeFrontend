import { StyledSidebar } from "./styles";
import Image from "next/image";
import Link from "next/link";

export const SideBarMenu = () => {
  return (
    <StyledSidebar>
      <h3>¡Hola! ¿Qué analizarás hoy?</h3>
      <ul>
        <Link href="/analysis">
          <a>
            <Image src="/newsPaperIcon.png" width={56} height={56} />
            <li>Analizar noticia</li>
          </a>
        </Link>
        <Link href="/my-analysis">
          <a>
            <Image src="/options.png" width={56} height={56} />
            <li>Mis analisis</li>
          </a>
        </Link>
        <Link href="/favorites">
          <a>
            <Image src="/favorites.png" width={56} height={56} />
            <li>Mis favoritos</li>
          </a>
        </Link>
      </ul>
    </StyledSidebar>
  );
};
