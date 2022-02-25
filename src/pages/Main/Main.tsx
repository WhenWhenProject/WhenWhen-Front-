import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ExtraComponent from '../../components/main/ExtraComponent';
import LandingComponent from '../../components/main/LandingComponent';

const Main = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout>();

  const handleScroll = (event: WheelEvent) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      event.preventDefault();

      const { deltaY } = event;
      const { scrollTop } = wheelRef!.current!;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          wheelRef!.current!.scrollTo({
            top: pageHeight,
            left: 0,
          });
        }
      } else {
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          wheelRef!.current!.scrollTo({
            top: 0,
            left: 0,
          });
        }
      }
    }, 1000);
  };

  useEffect(() => {
    const wheelRefCurrent = wheelRef.current;
    wheelRefCurrent?.addEventListener('wheel', handleScroll, {
      passive: false,
    });

    return () => {
      wheelRefCurrent?.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <StyledWrapper ref={wheelRef}>
      <LandingComponent />
      <ExtraComponent />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
