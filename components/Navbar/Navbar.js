import { Nav } from './styles'
import { Button } from '../../styles/Button/Button'


export const Navbar = () => (
    <Nav>
        <h3>EsFake</h3>
        <ul>
            <li>Home</li>
            <li>Los mejores calificados</li>
            <li>Nuestras métricas</li>
        </ul>
        <Button className="login">
            iniciar sesión
        </Button>
        <Button secondary>
            Registrarte
        </Button>
    </Nav>
)

