import React, { useEffect, useRef } from "react";

const InfiniteMovingCards = ({ items, direction = "right", speed = "slow" }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = direction === "right" ? 1 : -1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollAmount;
      }
    };

    const intervalId = setInterval(scroll, speed === "slow" ? 20 : 10);

    return () => clearInterval(intervalId);
  }, [direction, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="flex items-center space-x-4"
        ref={scrollContainerRef}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 min-w-[200px] bg-white shadow-lg rounded-lg flex-shrink-0 transform transition-transform hover:scale-105"
          >
            <p className="text-gray-700 text-sm italic">"{item.quote}"</p>
            <h3 className="text-gray-900 font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-xs">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
