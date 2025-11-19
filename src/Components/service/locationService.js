// services/locationService.js

export const locationService = {
  async getUserLocationWithAddress() {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve({ success: false, error: "Geolocation not supported" });
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Example reverse geocode API call (OpenStreetMap)
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}&format=json`
            );
            const data = await response.json();

            resolve({
              success: true,
              location: {
                coordinates: coords,
                address: {
                  formatted: data.display_name,
                  full: data.display_name,
                },
              },
            });
          } catch (err) {
            resolve({ success: false, error: "Failed to fetch address" });
          }
        },
        (error) => {
          resolve({ success: false, error: error.message });
        }
      );
    });
  },

  saveLocationToStorage(location) {
    try {
      let locations = JSON.parse(localStorage.getItem("recentLocations")) || [];
      locations = [
        location,
        ...locations.filter((l) => l.formatted !== location.formatted),
      ];
      localStorage.setItem(
        "recentLocations",
        JSON.stringify(locations.slice(0, 5))
      );
    } catch (err) {
      console.error("Error saving location:", err);
    }
  },

  getRecentLocations() {
    try {
      return JSON.parse(localStorage.getItem("recentLocations")) || [];
    } catch {
      return [];
    }
  },

  async searchLocations(query) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      return {
        success: true,
        data: data.map((loc) => ({
          formatted: loc.display_name,
          full: loc.display_name,
          coordinates: { lat: loc.lat, lng: loc.lon },
        })),
      };
    } catch (err) {
      return { success: false, error: "Search failed" };
    }
  },
};
