import React from "react";

const CarouselItem = ({ imgsrc, heading, description, alt, children }) => {
    return (
        <div
            style={{
                position: "relative",
                maxHeight: "75vh",
                minWidth: "100vw",
            }}
            className="text-white h-50-sm"
        >
            <img
                style={{
                    objectFit: "fill",
                    objectPosition: "left",
                    display: "block",
                    opacity: "70",
                }}
                src={imgsrc}
                alt={alt}
            />
            <h3
                style={{
                    position: "absolute",
                    top: "55%",
                    left: "12%",
                    textTransform: "uppercase",
                }}
            >
                {heading}
            </h3>
            <p style={{ position: "absolute", top: "63%", left: "12%" }}>
                {description}
            </p>
            <main style={{ position: "absolute", top: "71%", left: "12%" }}>
                {children}
            </main>
        </div>
    );
};

export default CarouselItem;
