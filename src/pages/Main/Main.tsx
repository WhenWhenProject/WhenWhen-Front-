import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ExtraComponent from '../../components/main/ExtraComponent';
import LandingComponent from '../../components/main/LandingComponent';

const Main = () => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handleScroll = (event: WheelEvent) => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        event.preventDefault();
        const { deltaY } = event;
        const { scrollTop } = wheelRef!.current!;
        const pageHeight = window.innerHeight;
        if (deltaY > 0) {
          console.log('down');
          if (scrollTop >= 0) {
            wheelRef!.current!.scrollTo({
              top: pageHeight,
              left: 0,
            });
          }
        } else {
          console.log('up');
          if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
            wheelRef!.current!.scrollTo({
              top: 0,
              left: 0,
            });
          }
        }
      }, 200)
    );
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
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
