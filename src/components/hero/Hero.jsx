import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import heroImage from '../../assets/images/heroImage.png';
import scroll from '../../assets/images/scroll.png';
import './hero.scss';

const Hero = () => {
    return (
        <div className='hero' style={{ overflowX: 'hidden' }}>
            <div className='container'>
                <div className="left">
                    <h1>Revolutionary app that will change your life.</h1>
                    <h5>*at least we hope so</h5>
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
                <a href='#map'>
                    <img src={scroll} alt="" className="scroll-img" />
                </a>
            </div>
        </div>
    );
}

export default Hero;
