import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperDate from './SwiperDate';

const dateSwiperMax = 3;
const visibleSwiper = 3;
const tranlatePixel = 116;

const timeArr = Array.from({ length: 24 }, (v, i) => i + 1);
const sampleType = ['false', 'true', 'pending'];

const sample = timeArr.map((time) => {
  return { time, checked: sampleType[Math.floor(Math.random() * 3)] };
});

const SwiperDateBlock = () => {
  const [num, setNum] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const handleWheel = () => {
    console.log('wheel');
  };

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

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${num}px)`;
    }
  }, [num]);

  useEffect(() => {
    const swiperRefCurrent = swiperRef.current;
    swiperRefCurrent?.addEventListener('wheel', handleWheel);
    return () => {
      swiperRefCurrent?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <StyledWrapper ref={swiperRef}>
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
      <div className="swiper-container">
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

export default SwiperDateBlock;

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
    max-width: 940px;
    overflow: hidden;
    display:flex;
    justify-content: center;
    .swiper-container_small {
      transition:transform 1s;
      display:flex;
      min-width: auto;
      .swiper-block {
          position: relative;
        :first-child{
          margin-left:20px;
        }
        margin-right: 20px;
        .swiper-date-block {
          width: 96px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          /* position: absolute; */
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
