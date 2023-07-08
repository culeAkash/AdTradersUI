import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import styles from '../Static/Styles/Home.module.css'

export default function HomeCarousal({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {

    const mystyle = {
      position: 'relative',
      backgroundImage: `url(${item.src})`,
      backgroundSize: '100% 100%',
      // backgroundRepeat: 'repeat-y',
      width: '100%',
      height: '25em'
    }

    return (
      <CarouselItem style={{ position: 'relative' }}>
        <div style={mystyle}>
          <div className={styles.car_item_content}>
            <Typography variant='h5'>See all types of products available with us</Typography>
            <Button color='primary' variant='contained' sx={{ mt: '1em' }}>See Products</Button>
          </div>
        </div>
      </CarouselItem>

    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      pause='hover'

    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
