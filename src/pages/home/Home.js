import Nav from '../../components/nav/Nav';
import MapMain from '../../components/mapMain/MapMain';
import Search from '../../components/search/Search';
import Hero from '../../components/hero/Hero';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';

const Home = () => {
    return (
        <>
            <Nav />
            <Hero />
            <ContentWrapper>
                <Search id='Home-search' />
                <MapMain />
                <br />
                <br />
                <br />
            </ContentWrapper>
        </>
    )
}

export default Home;