import React from 'react';
import Slider from 'react-slick';
import Container from '@mui/material/Container';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards2 from './Cards2';
import './Style.css';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: '40px', height: '40px', backgroundImage: `url(/images/next.svg)`}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,width: '40px', height: '40px', backgroundImage: `url(/images/prev.svg)`}}
      onClick={onClick}
    />
  );
}

const Carousel = ({item,color}) => {
  

  const settings = {
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow:5,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          nextArrow: '',
          prevArrow: '',
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          nextArrow: '',
          prevArrow: '',
          centerMode:true,
          centerPadding:'40px',
        },
      },
    ],
  };
  return (
    <Container >  
     <Slider {...settings}>
      {item.map((item) =>{
        return(
          <Cards2 item={item} color={color}/>
        )
        })}
    </Slider>
    </Container>
  );
};

export default Carousel;
