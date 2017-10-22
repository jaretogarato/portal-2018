import React, { Component } from 'react';
// import ImgHero from '../assets/images/hero-image.png';


class HomeImage extends Component {
  render(){
    return(
      <div style={styles.homeWrapper}>
        test
      </div>
    )
  }
}

const styles = {
  homeWrapper: {
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0',
  },
  homeImage: {
    backgroundImage: ' ../assets/images/home-image-2880w.jpg)',
		backgroundPosition: 'center center',
		backgroundRepeat:  'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundSize:  'cover',
		backgroundColor: '#999',
    margin: '0',
    padding: '0',
  },
}

export default HomeImage
