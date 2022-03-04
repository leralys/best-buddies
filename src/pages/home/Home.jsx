import Nav from '../../components/nav/Nav';
import MapMain from '../../components/mapMain/MapMain';
import Hero from '../../components/hero/Hero';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <Hero />
            <MapMain />
        </div>
    )
}

export default Home;