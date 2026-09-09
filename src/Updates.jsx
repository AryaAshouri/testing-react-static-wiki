import { useEffect, useState } from "react";
import "./Updates.css";

const asset = (path) => `${import.meta.env.BASE_URL}public/${path}`;

function Updates() {
    const images = [
        asset("slideshow/image1.png"),
        asset("slideshow/image2.png"),
        asset("slideshow/image3.png"),
        asset("slideshow/image4.png"),
        asset("slideshow/image5.png"),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [direction, setDirection] = useState("next");
    const [isAnimating, setIsAnimating] = useState(false);

    function changeSlide(index, slideDirection) {
        if (index === currentIndex || isAnimating) return;

        setPreviousIndex(currentIndex);
        setDirection(slideDirection);
        setCurrentIndex(index);
        setIsAnimating(true);

        setTimeout(() => {
            setPreviousIndex(null);
            setIsAnimating(false);
        }, 450);
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % images.length;
        changeSlide(nextIndex, "next");
    }

    function previousSlide() {
        const previousIndexValue =
            (currentIndex - 1 + images.length) % images.length;

        changeSlide(previousIndexValue, "previous");
    }

    function goToSlide(index) {
        if (index === currentIndex || isAnimating) return;

        const slideDirection = index > currentIndex ? "next" : "previous";
        changeSlide(index, slideDirection);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentIndex, isAnimating]);

    return (
        <section id="updates">
            <div className="updates-container">
                <div className="updates-title">
                    <span>Latest Updates</span>
                </div>

                <div className="slideshow">
                    <button
                        className="slide-arrow slide-arrow-left"
                        onClick={previousSlide}
                        aria-label="Previous update"
                    >
                        ‹
                    </button>

                    <div className="slide-frame">
                        <div className="slide-content">
                            {previousIndex !== null && (
                                <img
                                    className={`slide-image slide-old ${direction}`}
                                    src={images[previousIndex]}
                                    alt=""
                                />
                            )}

                            <img
                                className={`slide-image slide-new ${isAnimating ? direction : ""
                                    }`}
                                src={images[currentIndex]}
                                alt={`Update ${currentIndex + 1}`}
                            />
                        </div>

                        <div className="slide-border" />
                    </div>

                    <button
                        className="slide-arrow slide-arrow-right"
                        onClick={nextSlide}
                        aria-label="Next update"
                    >
                        ›
                    </button>
                </div>

                <div className="slide-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`slide-dot ${currentIndex === index ? "active" : ""
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to update ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Updates;