import { Navbar } from '../components/Navbar/Navbar'
import { Hero } from '../components/Hero/Hero'
import { ColumnWrapper } from '../styles/ColumnWrapper/ColumnWrapper'
import { HomeBestSites } from '../components/HomeBestSites/HomeBestSites'


const HomePage = () => (
    <>
        <Navbar />
        <Hero />
        <ColumnWrapper>
            <HomeBestSites />
        </ColumnWrapper>
    </>
)

export default HomePage

