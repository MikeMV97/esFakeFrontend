import { Navbar } from '../components/Navbar/Navbar'
import { Hero } from '../components/HomeHero/Hero'
import { ColumnWrapper } from '../styles/ColumnWrapper/ColumnWrapper'
import { HomeBestSites } from '../components/HomeBestSites/HomeBestSites'
import { HomeMetrics } from '../components/HomeMetrics/HomeMetrics'
import { Footer } from '../components/Footer/Footer'





const HomePage = () => (
    <>
        <Navbar />
        <Hero />
        <ColumnWrapper>
            <HomeBestSites />
            <HomeMetrics />
        </ColumnWrapper>
        <Footer />
    </>
)

export default HomePage

