import Nav from '../../components/nav/Nav';
import MapMain from '../../components/mapMain/MapMain';
// import Search from '../../components/search/Search';
import Hero from '../../components/hero/Hero';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <Hero />
            <ContentWrapper>
                {/* <Search id='Home-search' /> */}
                <MapMain />
                <br />
                <br />
                <br />
            </ContentWrapper>
        </div>
    )
}

export default Home;