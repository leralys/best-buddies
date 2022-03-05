import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import heroImage from '../../assets/images/heroImage.png';
import scroll from '../../assets/images/scroll.png';
// import Search from '@mui/icons-material/Search';
import Search from '../search/Search';
import './hero.scss';

const Hero = () => {
    return (
        <div className='hero' style={{ overflowX: 'hidden' }}>
            <div className='container'>
                <div className="left">
                    <div className="text-container">
                        <h1>Revolutionary app that will change your life.</h1>
                        <h4>*at least we hope so</h4>
                        <h2>Make sure that your buddy won't be alone in a park, make check-ins, and meet new friends.</h2>
                    </div>
                    <Button variant='contained' size='large'
                        className='button-main'
                        component={Link} to={'/register'}>
                        Try Now
                    </Button>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={heroImage} alt="People playing with dogs in a dog park" />
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                {/* <Search id='main-search' /> */}
                <div>
                    <a href='#map'>
                        <img src={scroll} alt="" className="scroll-img" />
                    </a>
                    <div>Scroll Down</div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
