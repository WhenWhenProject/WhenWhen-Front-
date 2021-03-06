import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { getClientX, getTranslateX } from './module/StyleCal';
import SwiperDate from './SwiperDate';
import { gray_check, green_check } from '../../assets/NewSchedule/index';

const visibleSwiper = 3;
const translatePixel = 116;

const slide = visibleSwiper * translatePixel;

const sampleDay = [
  { day: '토', date: '1/10', checked: 'pending' },
  { day: '일', date: '1/11', checked: 'false' },
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

type SelectStatus = 'select' | 'result';

const SwiperBlock = ({ status }: { status: SelectStatus }) => {
  const [num, setNum] = useState(0);
  const count = useRef<number>(0);
  const [dateSwiperMax, setDateSwiperMax] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  const arrCnt = sampleDay.length;

  let startX = 0;
  let nowX = 0;
  let listX = 0;

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
    if (swiperRef.current && carouselRef.current) {
      count.current = Math.floor(
        swiperRef.current?.clientWidth / translatePixel
      );
    }

    const dateSwiperMax = (arrCnt - count.current) / 2 / 3;
    if (listX < dateSwiperMax * slide && nowX > startX) {
      setNum((num) => num + visibleSwiper * translatePixel);
    }
    if (listX > -dateSwiperMax * slide && nowX < startX) {
      setNum((num) => num - visibleSwiper * translatePixel);
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

  const handleClickRight = (event: React.MouseEvent<HTMLImageElement>) => {
    if (num <= -dateSwiperMax * visibleSwiper * translatePixel) return;
    setNum((num) => num - visibleSwiper * translatePixel);
    return;
  };

  const handleClickLeft = (event: React.MouseEvent<HTMLImageElement>) => {
    if (num >= dateSwiperMax * visibleSwiper * translatePixel) return;
    setNum((num) => num + visibleSwiper * translatePixel);
    return;
  };

  const middleCarousel = () => {
    if (swiperRef.current && carouselRef.current) {
      count.current = Math.floor(
        swiperRef.current?.clientWidth / translatePixel
      );
      arrCnt <= count.current
        ? setDateSwiperMax(0)
        : setDateSwiperMax((arrCnt - count.current) / 2 / 3);
      swiperRef.current.scrollLeft =
        translatePixel * Math.floor((arrCnt - count.current) / 2);
    }
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
        {num < dateSwiperMax * visibleSwiper * translatePixel && (
          <img
            onClick={handleClickLeft}
            className="swiper_arrow left"
            src="/img/result/swiper_arrow.png"
            alt="arrow"
          />
        )}
      </div>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-container_small" ref={carouselRef}>
          {sampleDay.map((day) => (
            <div key={day.date} className="swiper-block">
              <div className="swiper-day-block">{day.day}</div>
              <SwiperDate date={day.date} type={day.checked} status={status} />
              {status === 'select' ? (
                <div
                  className="check-container"
                  style={
                    day.checked === 'false' ? { display: 'none' } : undefined
                  }
                >
                  <img src={gray_check} alt="not-checked" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="img-box">
        {num > -dateSwiperMax * visibleSwiper * translatePixel && (
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

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  position: relative;
  border: 1px solid rgba(112,112,112,0.26);
  max-width: 1200px;
  padding: 24px 0px;
  ${centerAlign};
  .swiper-container {
    max-width: 812px;
    overflow: hidden;
    display:flex;
    .swiper-container_small {
      display:flex;
      min-width: auto;
      transition: transform 0.3s;
      .swiper-block {
        width: 96px;
        margin: 0px 10px;
        .swiper-day-block {
          border: 1px solid #707070;
          width: 100%;
          height: 40px;
          background-color: #ffffff;
          border-radius: 5px;
          ${centerAlign}
          color: #000070;
          font-size: 24px;
          margin-right: 20px;
        }
        .check-container {
            ${centerAlign};
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
