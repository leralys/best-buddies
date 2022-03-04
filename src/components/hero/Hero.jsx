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
                        <h2>Looking for a friend for your friend?</h2>
                        <h2>Want to make sure that your buddy won't be alone in the park?</h2>
                        <h1>Best Buddies</h1>
                        <h3>Revolutionary app that will change your life.</h3>
                        <h4>*at least we hope so</h4>
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
            {/* <div className='bottom-container'>
                <Search id='main-search' />
                <a href='#map'>
                    <img src={scroll} alt="" className="scroll-img" />
                </a>
            </div> */}
        </div>
    );
}

export default Hero;
