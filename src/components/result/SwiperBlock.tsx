import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperDate from './SwiperDate';

const dateSwiperMax = 2;
const visibleSwiper = 3;
const tranlatePixel = 116;

const sampleDay = [
  { day: '월', date: '1/12', checked: 'false' },
  { day: '화', date: '1/13', checked: 'true' },
  { day: '수', date: '1/14', checked: 'true' },
  { day: '목', date: '1/15', checked: 'pending' },
  { day: '금', date: '1/16', checked: 'false' },
  { day: '토', date: '1/17', checked: 'false' },
  { day: '일', date: '1/18', checked: 'false' },
  { day: '월', date: '1/19', checked: 'true' },
  { day: '화', date: '1/20', checked: 'pending' },
  { day: '수', date: '1/21', checked: 'pending' },
  { day: '목', date: '1/22', checked: 'true' },
  { day: '금', date: '1/23', checked: 'false' },
  { day: '토', date: '1/24', checked: 'pending' },
  { day: '일', date: '1/25', checked: 'false' },
  { day: '월', date: '1/26', checked: 'false' },
  { day: '화', date: '1/27', checked: 'false' },
  { day: '수', date: '1/28', checked: 'false' },
];

const SwiperBlock = () => {
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
          {sampleDay.map((day) => (
            <div key={day.date} className="swiper-block">
              <div className="swiper-day-block">{day.day}</div>
              <SwiperDate date={day.date} type={day.checked} />
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

export default SwiperBlock;

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(112,112,112,0.26);
  max-width: 1200px;
  padding: 24px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-container {
    max-width: 800px;
    overflow: hidden;
    display:flex;
    justify-content: center;
    .swiper-container_small {
      transition:transform 1s;
      display:flex;
      min-width: auto;
      .swiper-block {
        :first-child{
          margin-left:20px;
        }
        .swiper-day-block {
          border: 1px solid #707070;
          width: 96px;
          height: 40px;
          background-color: #ffffff;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #000070;
          font-size: 24px;
          margin-right: 20px;
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
