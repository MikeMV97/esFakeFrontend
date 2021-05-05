import { Navbar } from '../components/Navbar/Navbar'
import { Hero } from '../components/HomeHero/Hero'
import { ColumnWrapper } from '../styles/ColumnWrapper/ColumnWrapper'
import { HomeBestSites } from '../components/HomeBestSites/HomeBestSites'
import { HomeMetrics } from '../components/HomeMetrics/HomeMetrics'




const HomePage = () => (
    <>
        <Navbar />
        <Hero />
        <ColumnWrapper>
            <HomeBestSites />
            <HomeMetrics />
        </ColumnWrapper>
    </>
)

export default HomePage

