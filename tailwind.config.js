/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["var(--font-size-xs)", {
        fontWeight: 500,
      }],
      sm: ["var(--font-size-sm)", {
        fontWeight: 500,
      }],
      base: ["var(--font-size-base)", {
        fontWeight: 500,
      }],
      "2xl": ["var(--font-size-2xl)", {
        fontWeight: 700,
      }],
    },
    extend: {
      boxShadow: {
        card: "0px 25px 40px -20px rgba(0, 0, 0, 0.09)"
      },
      backgroundImage: {
        "nav": "var(--bg-nav)"
      },
      colors: {
        "cool-gray": "hsl(231, 11%, 63%)",
        "light-gray": "hsl(229, 24%, 87%)",
        "magnolia": "hsl(217, 100%, 97%)",
        "alabaster": "hsl(231, 100%, 99%)",
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",
      },
    },
  },
  plugins: [],
};
