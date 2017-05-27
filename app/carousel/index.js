import React from 'react'
import Slider from 'react-slick'
import css from './slider.scss'
import {Row, Col} from 'react-bootstrap'

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 500,
    }
    return (
      <Row>
        <Col xs={12}>
          <div className={css.slider}>
            <Slider {...settings} className={css.mySlider}>
              <div className={css.image__wrapper}>
                <img
                  src="http://loudmouthbear.files.wordpress.com/2009/12/nasa_-_space_shuttle_challenger_astronaut_mccandles.jpg"
                  alt="ff" className={css.image}/></div>
              <div className={css.image__wrapper}><img
                src="http://loudmouthbear.files.wordpress.com/2009/12/nasa_-_space_shuttle_challenger_astronaut_mccandles.jpg"
                alt="ff" className={css.image}/></div>
              <div className={css.image__wrapper}><img
                src="http://loudmouthbear.files.wordpress.com/2009/12/nasa_-_space_shuttle_challenger_astronaut_mccandles.jpg"
                alt="ff" className={css.image}/></div>
              <div className={css.image__wrapper}><img
                src="http://loudmouthbear.files.wordpress.com/2009/12/nasa_-_space_shuttle_challenger_astronaut_mccandles.jpg"
                alt="ff" className={css.image}/></div>
            </Slider>
          </div>
        </Col>
      </Row>
    )
  }
}


export default Carousel

