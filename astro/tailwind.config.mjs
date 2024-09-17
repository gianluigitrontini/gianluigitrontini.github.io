/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      boxShadow: {
        classic: "0 0 15px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
