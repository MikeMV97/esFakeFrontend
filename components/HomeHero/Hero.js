import { HeroGrid } from './styles'
import Image from 'next/image';

export const Hero = () => (
    <HeroGrid>
        <Image
            src="/newspaper_icon.svg"
            alt="newspaper icon"
            width={500}
            height={500}
        />
        <div>
            <h1>Cambiando la forma de ver las noticias</h1>
            <p>Con algoritmos de inteligencia artificial queremos brindarte una mejor visión de la información que consumes.</p>
        </div>
    </HeroGrid>
)
