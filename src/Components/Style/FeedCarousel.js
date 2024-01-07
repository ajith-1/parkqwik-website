import React from 'react';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Feedback } from '../../Assests/Data';
import Cards from './Cards';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style, width: '40px', height: '40px', backgroundImage: 'url(/images/next.svg)',zIndex:1}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,width: '40px', height: '40px', backgroundImage: 'url(/images/prev.svg)',zIndex:1}}
      onClick={onClick}
    />
  );
}

const FeedCarousel = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    swipeToSlide: true,
    slidesToScroll:1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          initialSlide:1,
          slidesToShow: 1,
        },
      },
     
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {Feedback.map((item) => {
          return (
            <Cards item={item} />
          )
        })}
      </Slider>
    </Container>
  );
};

export default FeedCarousel;
