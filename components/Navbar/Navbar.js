import { Nav } from "./styles";
import { Button } from "../../styles/Button/Button";
import Link from "next/link";

export const Navbar = () => (
  <Nav>
    <h3>EsFake</h3>
    <ul>
      <li>Home</li>
      <li>Los mejores calificados</li>
      <li>Nuestras métricas</li>
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
