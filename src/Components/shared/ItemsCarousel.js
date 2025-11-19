import { shuffleItems } from "../utils/helper";
import ProductCard from "../shared/ProductCard";
import { useRef } from "react";

const ItemsCarousel = ({ topItems }) => {
  const items = shuffleItems(topItems);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300; // adjust based on card width
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-8 w-full max-h-[290px]">
      {/* Buttons (optional) */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full shadow p-2"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full shadow p-2"
      >
        ▶
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 scrollbar-hide"
      >
        {items?.map((item, i) => (
          <div key={i} className="snap-start flex-shrink-0 w-[180px]">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsCarousel;
