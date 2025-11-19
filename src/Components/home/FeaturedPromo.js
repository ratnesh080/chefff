import { shuffleItems } from "../utils/helper";
import Misc from "../lib/data/layout.json";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional arrow icons

const FeaturedPromo = () => {
  const allPromos = Misc.filter((item) => item.type === 66)[0].objects?.map(
    (el) => el.data.image_url
  );

  const promos = shuffleItems(allPromos);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9; // move ~90% of visible area
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="mx-4 relative pb-2 pt-4">
        {/* Carousel container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth"
        >
          {promos?.map((promo, i) => (
            <div
              key={i}
              className="rounded-lg flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] cursor-pointer max-h-[280px] sm:h-[200px] overflow-hidden mr-2"
            >
              <img
                src={promo}
                alt="..."
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-white shadow-md p-2 rounded-full hidden sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-white shadow-md p-2 rounded-full hidden sm:flex"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedPromo;
