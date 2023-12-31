import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Feedback } from '../../Assests/Data';
import Cards from './Cards';
import Box from '@mui/material/Box';


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
        breakpoint: 670,
        settings: {
          slidesToShow: 1, 
          initialSlide:0,
         },
      },
     
    ],
  };
  return (
    <Box maxWidth={'100%'}>
      <Slider {...settings}>
        {Feedback.map((item) => {
          return (
          <Box key={item.id}>
            <Cards item={item} />
          </Box>
          )
        })}
      </Slider>
    </Box>
  );
};

export default FeedCarousel;
