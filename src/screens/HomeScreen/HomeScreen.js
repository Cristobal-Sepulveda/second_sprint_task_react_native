import Hero from "../../components/Hero"
import CityCarousel from "../../components/Carousel"
import { citiesData } from "../../utils/cities"

const HomeScreen = () => {
    return (
        <>
            <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
            <CityCarousel cities={citiesData} />
        </>
    )
}

export default HomeScreen;