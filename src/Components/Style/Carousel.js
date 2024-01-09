import React from 'react';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards2 from './Cards2';
import './Style.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: '40px', height: '40px', backgroundImage: `url(/images/next.svg)` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: '40px', height: '40px', backgroundImage: `url(/images/prev.svg)` }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ item, color }) => {


  const settings = {
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    nextArrow: '',
    prevArrow: '',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 5,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 3,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,

        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,

          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };
  return (
    <Container >
      <Slider {...settings}>
        {item.map((item) => {
          return (
            <Box key={item.id}>
              <Cards2 item={item} color={color} />
            </Box>
          )
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;
