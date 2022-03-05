import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getClientX, getTranslateX } from './module/StyleCal';
import SwiperDate from './SwiperDate';

const dateSwiperMax = 3;
const visibleSwiper = 3;
const tranlatePixel = 116;

const slide = visibleSwiper * tranlatePixel;

const timeArr = Array.from({ length: 24 }, (v, i) => i + 1);
const sampleType = ['false', 'true', 'pending'];

const sample = timeArr.map((time) => {
  return { time, checked: sampleType[Math.floor(Math.random() * 3)] };
});

const SwiperTimeBlock = () => {
  const [num, setNum] = useState(0);
  const count = useRef<number>(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const swiperTimeRef = useRef<HTMLDivElement>(null);

  let startX = 0;
  let nowX = 0;
  let listX = 0;

  const handleClickRight = (event: React.MouseEvent<HTMLImageElement>) => {
    if (num <= -dateSwiperMax * visibleSwiper * tranlatePixel) return;
    setNum((num) => num - visibleSwiper * tranlatePixel);
    return;
  };

  const handleClickLeft = (event: React.MouseEvent<HTMLImageElement>) => {
    if (num >= dateSwiperMax * visibleSwiper * tranlatePixel) return;
    setNum((num) => num + visibleSwiper * tranlatePixel);
    return;
  };

  const middleCarousel = () => {
    if (swiperTimeRef.current && carouselRef.current) {
      count.current = Math.floor(
        swiperTimeRef.current?.clientWidth / tranlatePixel
      );

      swiperTimeRef.current.scrollLeft =
        tranlatePixel * Math.floor((24 - count.current) / 2);
    }
  };

  const onScrollStart = (e) => {
    startX = getClientX(e);
    nowX = getClientX(e);
    carouselRef.current?.addEventListener('mousemove', onScrollMove);
    carouselRef.current?.addEventListener('touchmove', onScrollMove);
    carouselRef.current?.addEventListener('mouseup', onScrollEnd);
    carouselRef.current?.addEventListener('mouseleave', onScrollEnd);
    carouselRef.current?.addEventListener('touchend', onScrollEnd);
  };

  const onScrollMove = (e) => {
    e.preventDefault();
    nowX = getClientX(e);
  };

  const onScrollEnd = (e) => {
    listX = getTranslateX(carouselRef);
    if (swiperTimeRef.current && carouselRef.current) {
      count.current = Math.floor(
        swiperTimeRef.current?.clientWidth / tranlatePixel
      );
    }

    const dateSwiperMax = (24 - count.current) / 2 / 3;
    if (listX < dateSwiperMax * slide && nowX > startX) {
      setNum((num) => num + visibleSwiper * tranlatePixel);
    }
    if (listX > -dateSwiperMax * slide && nowX < startX) {
      setNum((num) => num - visibleSwiper * tranlatePixel);
    }
    carouselRef.current?.removeEventListener('mousedown', onScrollStart);
    carouselRef.current?.removeEventListener('touchstart', onScrollStart);
    carouselRef.current?.removeEventListener('mousemove', onScrollMove);
    carouselRef.current?.removeEventListener('touchmove', onScrollMove);
    carouselRef.current?.removeEventListener('touchend', onScrollEnd);
    carouselRef.current?.removeEventListener('mouseup', onScrollEnd);
    carouselRef.current?.removeEventListener('mouseleave', onScrollEnd);

    setTimeout(() => {
      carouselRef.current?.addEventListener('mousedown', onScrollStart);
      carouselRef.current?.addEventListener('touchstart', onScrollStart);
      if (carouselRef.current) carouselRef.current.style.transition = '';
    }, 300);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${num}px)`;
    }
  }, [num]);

  useEffect(() => {
    const carouselCurrent = carouselRef.current;
    middleCarousel();
    window.addEventListener('resize', middleCarousel);
    carouselRef.current?.addEventListener('mousedown', onScrollStart);
    carouselRef.current?.addEventListener('touchstart', onScrollStart);
    return () => {
      window.removeEventListener('resize', middleCarousel);
      carouselCurrent?.removeEventListener('mousedown', onScrollStart);
      carouselCurrent?.removeEventListener('touchstart', onScrollStart);
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="img-box">
        {num < dateSwiperMax * visibleSwiper * tranlatePixel && (
          <img
            onClick={handleClickLeft}
            className="swiper_arrow left"
            src="/img/result/swiper_arrow.png"
            alt="arrow"
          />
        )}
      </div>
      <div className="swiper-container" ref={swiperTimeRef}>
        <div className="swiper-container_small" ref={carouselRef}>
          {sample.map((day) => (
            <div key={day.time} className="swiper-block">
              <div className="swiper-date-block">{day.time}</div>
              <SwiperDate type={day.checked} />
            </div>
          ))}
        </div>
      </div>
      <div className="img-box">
        {num > -dateSwiperMax * visibleSwiper * tranlatePixel && (
          <img
            onClick={handleClickRight}
            className="swiper_arrow right"
            src="/img/result/swiper_arrow.png"
            alt="arrow"
          />
        )}
      </div>
    </StyledWrapper>
  );
};

export default SwiperTimeBlock;

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(112,112,112,0.26);
  max-width: 1200px;
  height:196px;
  padding: 24px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-container {
    max-width: 928px;
    overflow: hidden;
    display:flex;
    .swiper-container_small {
      transition:transform 0.3s;
      display:flex;
      min-width: auto;
      .swiper-block {
        width:116px;
        display:flex;
        flex-direction: column;
        align-items: flex-end;
        .swiper-date-block {
          width: 100%;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          color: #000070;
          font-size: 24px;
        }
      }
    }
  }
  .img-box {
    position: relative;
    width: 96px;
    height: 96px;
    .swiper_arrow {
      cursor: pointer;
      position: absolute;
      width: 96px;
      height: 96px;
      bottom: -24px;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
      transform: rotate(0.5turn);
    }
  }}
  @media screen and (max-width: 1440px) {
    .swiper-container {
      width: 690px;
    }
    @media screen and (max-width: 1024px) {
      .swiper-container {
        width: 450px;
      }
    }
`;
