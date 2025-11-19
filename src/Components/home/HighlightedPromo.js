import { shuffleItems } from "../utils/helper";
import Misc from "../lib/data/layout.json";

import { useEffect, useState } from "react";

const HighlightedPromo = () => {
  const allPromos = Misc.filter((item) => item.type === 0)[0].objects?.map(
    (el) => el.data
  );
  const promos = shuffleItems(allPromos);

  const [current, setCurrent] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <section className="mt-12 mb-6 relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {promos?.map((item, i) => (
          <div
            className="flex-shrink-0 w-full flex items-center justify-center"
            key={i}
          >
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {promos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightedPromo;
