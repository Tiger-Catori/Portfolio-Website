import React, { useEffect, useRef, useState } from "react";
import "../css/ImageSlider.css";

const SliderComponent = () => {
  return <ImageSlider />;
};

export default SliderComponent;

const ImageSlider = () => {
  const imageListRef = useRef(null);
  const sliderScrollbarRef = useRef(null);
  const scrollbarThumbRef = useRef(null);

  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  return (
    <section className="section section__slider" id="gallery">
      <div className="slider__container">
        <h2 className="section__title section__title--gallery">Gallery</h2>
        <p className="section__subtitle section__subtitle--gallery">
          Explore our Feature Gallery
        </p>

        <SliderWrapper
          imageListRef={imageListRef}
          sliderScrollbarRef={sliderScrollbarRef}
          scrollbarThumbRef={scrollbarThumbRef}
          maxScrollLeft={maxScrollLeft}
          setMaxScrollLeft={setMaxScrollLeft}
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
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  // update max scroll whenever layout changes
  useEffect(() => {
    const imageList = imageListRef.current;
    if (!imageList) return;

    const update = () => {
      setMaxScrollLeft(imageList.scrollWidth - imageList.clientWidth);
      setScrollLeft(imageList.scrollLeft);
    };

    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [imageListRef, setMaxScrollLeft]);

  // sync thumb position when scrollLeft changes
  useEffect(() => {
    const sliderScrollbar = sliderScrollbarRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    if (!sliderScrollbar || !scrollbarThumb) return;

    const maxThumbLeft =
      sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

    const newLeft =
      maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * maxThumbLeft : 0;
    scrollbarThumb.style.left = `${newLeft}px`;
  }, [scrollLeft, maxScrollLeft]);

  const handleScroll = () => {
    const imageList = imageListRef.current;
    if (!imageList) return;
    setScrollLeft(imageList.scrollLeft);
  };

  const handleSlide = (dir) => {
    const imageList = imageListRef.current;
    if (!imageList) return;

    imageList.scrollBy({
      left: imageList.clientWidth * dir,
      behavior: "smooth",
    });

    setTimeout(() => {
      setScrollLeft(imageList.scrollLeft);
    }, 100);
  };

  const atStart = scrollLeft <= 0;
  const atEnd = scrollLeft >= maxScrollLeft - 1;

  // 💥 drag start
  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartX.current = e.clientX;
    document.body.style.userSelect = "none"; // prevent text selection
  };

  // 💥 drag move & drag end
  useEffect(() => {
    let animationFrame = null;
    let targetThumbLeft = null;

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const imageList = imageListRef.current;
      const sliderScrollbar = sliderScrollbarRef.current;
      const scrollbarThumb = scrollbarThumbRef.current;
      if (!imageList || !sliderScrollbar || !scrollbarThumb) return;

      const maxThumbLeft =
        sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;

      const deltaX = e.clientX - dragStartX.current;
      dragStartX.current = e.clientX;

      const currentLeft = parseFloat(scrollbarThumb.style.left || 0);
      targetThumbLeft = Math.max(
        0,
        Math.min(currentLeft + deltaX, maxThumbLeft),
      );

      // Smoothly animate toward the target
      const animateThumb = () => {
        if (targetThumbLeft === null) return;

        const currentPos = parseFloat(scrollbarThumb.style.left || 0);
        const diff = targetThumbLeft - currentPos;

        // Ease factor (0.2 = smooth, 0.5 = medium, 1 = direct)
        const ease = 0.25;
        const nextPos = currentPos + diff * ease;

        scrollbarThumb.style.left = `${nextPos}px`;

        // Sync content scroll
        const scrollRatio = nextPos / maxThumbLeft;
        imageList.scrollLeft = scrollRatio * maxScrollLeft;

        if (Math.abs(diff) > 0.5) {
          animationFrame = requestAnimationFrame(animateThumb);
        } else {
          scrollbarThumb.style.left = `${targetThumbLeft}px`;
          targetThumbLeft = null;
        }
      };

      if (!animationFrame) {
        animateThumb();
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        document.body.style.userSelect = "auto";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [
    isDragging,
    imageListRef,
    sliderScrollbarRef,
    scrollbarThumbRef,
    maxScrollLeft,
  ]);

  return (
    <>
      <div
        className="slider-wrapper"
        data-aos-delay="100"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
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

      <SliderScrollbar
        sliderScrollbarRef={sliderScrollbarRef}
        scrollbarThumbRef={scrollbarThumbRef}
        onThumbMouseDown={handleThumbMouseDown}
      />
    </>
  );
};

const ImageList = React.forwardRef(({ onScroll }, ref) => (
  <ul className="image-list" ref={ref} onScroll={onScroll}>
    {[2, 3, 4, 5, 6, 7, 1].map((num) => (
      <img
        key={num}
        className="image-item"
        src={`images/gallery/portrait-photos//michael-${num}.webp`}
        alt={`img-${num}`}
      />
    ))}
  </ul>
));

const SliderScrollbar = ({
  sliderScrollbarRef,
  scrollbarThumbRef,
  onThumbMouseDown,
}) => (
  <div className="slider-scrollbar" ref={sliderScrollbarRef}>
    <div className="scrollbar-track">
      <div
        className="scrollbar-thumb"
        ref={scrollbarThumbRef}
        onMouseDown={onThumbMouseDown}
      ></div>
    </div>
  </div>
);
