/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Extra Small (custom) - For small mobile devices
        sm: "480px", // Small (default Tailwind) - Small tablets & large phones
        md: "768px", // Medium (default Tailwind) - Tablets
        lg: "1024px", // Large (default Tailwind) - Laptops
        xl: "1280px", // Extra Large (default Tailwind) - Desktops
        "2xl": "1536px", // 2XL (default Tailwind) - Large screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
