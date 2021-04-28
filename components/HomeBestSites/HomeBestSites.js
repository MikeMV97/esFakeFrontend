import { GridBestSites, ProgressWrapper, ProgressItem, ProgressBar } from './styles'
import Image from 'next/image'

export const HomeBestSites = () => (
    <GridBestSites>
        <div>
            <h3>Los sitios con los mejores resultados</h3>

            <p>Conoce los sitios que están teniendo mejores resultados con nuestro análisis de veracidad.</p>
            <ProgressWrapper>
                <ProgressItem>
                    <p>www.sitio1.com</p>
                    <ProgressBar />
                </ProgressItem>

                <ProgressItem>
                    <p>www.sitio2.com</p>
                    <ProgressBar width="96%" />
                </ProgressItem>

                <ProgressItem >
                    <p>www.sitio3.com</p>
                    <ProgressBar width="94%" />
                </ProgressItem>

                <ProgressItem >
                    <p>www.sitio4.com</p>
                    <ProgressBar width="89%" />
                </ProgressItem>

                <ProgressItem >
                    <p>www.sitio4.com</p>
                    <ProgressBar width="85%" />
                </ProgressItem>
            </ProgressWrapper>

        </div>
        <div>
            <Image
                src="/champions.svg"
                width={720}
                height={470}
            />
        </div>
    </GridBestSites>
)