import { Nav } from "./styles";
import { Button } from "../../styles/Button/Button";
import Link from "next/link";
import { Link as SoftLink } from "react-scroll";

export const Navbar = () => (
  <Nav>
    <h3>EsFake</h3>
    <ul>
      <SoftLink to="hero" smooth={true} duration={500}>
        <li>Inicio</li>
      </SoftLink>
      {/* <SoftLink to="bestSites" smooth={true} duration={500}>
        <li>Los mejores calificados</li>
      </SoftLink>
      <SoftLink to="metrics" smooth={true} duration={500}>
        <li>Nuestras métricas</li>
      </SoftLink> */}
      <Link href="/analysis">
        <li>Analizar noticia</li>
      </Link>
    </ul>
    <Link href="/login">
      <a>
        <Button className="login">iniciar sesión</Button>
      </a>
    </Link>
    <Link href="/signup">
      <a>
        <Button secondary>Registrarte</Button>
      </a>
    </Link>
  </Nav>
);
