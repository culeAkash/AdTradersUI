import React, { useState } from 'react'
import { Button, Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import styles from '../Static/Styles/Carousal.module.css'
import { Link } from 'react-router-dom'

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


  const content = (
    <div className={styles.car_image_content}>
      <p>Welcome to our website</p>
      <Button color='primary' size='lg'>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/products">See All Products</Link>
      </Button>
    </div>
  )



  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className={styles.car_content}
      >
        {content}
        <img className={styles.car_image} src={item.src} alt={item.altText} style={{ width: '100%' }} />

      </CarouselItem>
    );
  });







  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
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
