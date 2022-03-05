export const getClientX = (e) => {
  const isTouches = e.touches ? true : false;
  return isTouches ? e.touches[0].clientX : e.clientX;
};

export const getTranslateX = (element) => {
  return parseInt(
    getComputedStyle(element.current as Element).transform.split(
      /[^\-0-9]+/g
    )[5]
  );
};
