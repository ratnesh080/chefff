// services/categoryService.js

// Use env variable if available, otherwise fallback to default
const API_BASE_URL = "https://backend.minutos.shop/api";

export const categoryService = {
  // Get all categories
  getCategories: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/category/getcategories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data.categories,
        count: data.count,
        pagination: data.pagination,
        message: data.message,
      };
    } catch (error) {
      console.error("Error fetching categories:", error);
      return {
        success: false,
        error: error.message,
        data: [],
      };
    }
  },
};

export default categoryService;
