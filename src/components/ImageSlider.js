import React, { useEffect, useRef, useState } from "react";
import "../css/ImageSlider.css";

const SliderComponent = () => {
  return <ImageSlider />;
};

export default SliderComponent;

const ImageSlider = () => {
  // Defining refs
  const imageListRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  return (
    <section className="section section__slider">
      <div className="slider__container">
        <h2 className="section__title">Gallery</h2>
        <p className="section__subtitle">Explore our Feature Gallery</p>
        {/* Pass refs and state to SliderWrapper */}
        <SliderWrapper
          imageListRef={imageListRef}
          sliderScrollbarRef={sliderScrollbarRef}
          scrollbarThumbRef={scrollbarThumbRef}
          maxScrollLeft={maxScrollLeft}
          setMaxScrollLeft={setMaxScrollLeft}
        />
        {/* Pass refs and state to SliderScrollbar to it can attach to DOM */}
        <SliderScrollbar
          sliderScrollbarRef={sliderScrollbarRef}
          scrollbarThumbRef={scrollbarThumbRef}
        />
      </div>
    </section>
  );
};

const SliderWrapper = ({
  imageListRef,
  sliderScrollbarRef,
  scrollbarThumbRef,
  maxScrollLeft,
  setMaxScrollLeft,
}) => {
  useEffect(() => {
    const imageList = imageListRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;

    if (!imageList || !sliderScrollbar || !scrollbarThumb) return;

    // Set max scroll on mount + whenever layout changes
    const updateMaxScroll = () => {
      setMaxScrollLeft(imageList.scrollWidth - imageList.clientWidth);
    };
    updateMaxScroll();

    const onResize = () => updateMaxScroll();
    window.addEventListener("resize", onResize);

    // Drag logic
    const handleMouseMove = (e, startX, startThumbLeft, maxThumbLeft) => {
      const deltaX = e.clientX - startX;
      const nextThumbLeft = Math.max(
        0,
        Math.min(maxThumbLeft, startThumbLeft + deltaX),
      );

      const nextScrollLeft =
        maxThumbLeft === 0 ? 0 : (nextThumbLeft / maxThumbLeft) * maxScrollLeft;

      scrollbarThumb.style.left = `${nextThumbLeft}px`;
      imageList.scrollLeft = nextScrollLeft;
    };

    const handleMouseUp = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };

    const handleThumbMouseDown = (e) => {
      const startX = e.clientX;
      const startThumbLeft = scrollbarThumb.offsetLeft;
      const maxThumbLeft =
        sliderScrollbar.getBoundingClientRect().width -
        scrollbarThumb.offsetWidth;

      document.onmousemove = (moveEvent) =>
        handleMouseMove(moveEvent, startX, startThumbLeft, maxThumbLeft);
      document.onmouseup = handleMouseUp;
    };

    scrollbarThumb.addEventListener("mousedown", handleThumbMouseDown);

    return () => {
      window.removeEventListener("resize", onResize);
      scrollbarThumb.removeEventListener("mousedown", handleThumbMouseDown);
      handleMouseUp();
    };
  }, [
    imageListRef,
    sliderScrollbarRef,
    scrollbarThumbRef,
    maxScrollLeft,
    setMaxScrollLeft,
  ]);

  const handleSlide = (direction) => {
    const imageList = imageListRef.current;
    if (!imageList) return;

    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const imageList = imageListRef.current;
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;

    if (!imageList || !sliderScrollbar || !scrollbarThumb || maxScrollLeft <= 0)
      return;

    const maxThumbLeft =
      sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;
    const thumbLeft = (imageList.scrollLeft / maxScrollLeft) * maxThumbLeft;

    scrollbarThumb.style.left = `${thumbLeft}px`;
  };

  const atStart = (imageListRef.current?.scrollLeft ?? 0) <= 0;
  const atEnd = (imageListRef.current?.scrollLeft ?? 0) >= maxScrollLeft;

  return (
    <div className="slider-wrapper">
      <button
        id="prev-slide"
        className="slide-button material-symbols-rounded"
        onClick={() => handleSlide(-1)}
        style={{ display: atStart ? "none" : "flex" }}
      >
        chevron_left
      </button>

      <ImageList ref={imageListRef} onScroll={handleScroll} />

      <button
        id="next-slide"
        className="slide-button material-symbols-rounded"
        onClick={() => handleSlide(1)}
        style={{ display: atEnd ? "none" : "flex" }}
      >
        chevron_right
      </button>
    </div>
  );
};

const ImageList = React.forwardRef(({ onScroll }, ref) => {
  return (
    <ul className="image-list" ref={ref} onScroll={onScroll}>
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-1.webp"
        alt="img-1"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-2.webp"
        alt="img-2"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-3.webp"
        alt="img-3"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-4.webp"
        alt="img-4"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-5.webp"
        alt="img-5"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-6.webp"
        alt="img-6"
      />
      <img
        className="image-item"
        src="images/gallery/portrait-photos/michael-7.webp"
        alt="img-7"
      />
      {/* <img className="image-item" src="images/gallery/michael-8.webp" alt="img-8" />
      <img className="image-item" src="images/gallery/michael-9.webp" alt="img-9" />
      <img className="image-item" src="images/gallery/michael-10.webp" alt="img-10" />
      <img className="image-item" src="images/gallery/michael-11.webp" alt="img-11" />
      <img className="image-item" src="images/gallery/michael-12.webp" alt="img-12" />*/}
    </ul>
  );
});

const SliderScrollbar = ({ sliderScrollbarRef, scrollbarThumbRef }) => {
  return (
    <div className="slider-scrollbar" ref={sliderScrollbarRef}>
      <div className="scrollbar-track">
        <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
      </div>
    </div>
  );
};
