/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
// module.exports = {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//       extend: {
//         colors: {
//           backgroundApp: "red", // ✅ Fix: Remove `{ DEFAULT: "red" }`
//         },
//       },
//     },
//     plugins: [],
//   };

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [daisyui],
    daisyui: {
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
      ],
    },
    theme: {
      extend: {
        colors: {
          primary: "#4A90E2",  // Example blue
          secondary: "#FF4081", // Example pink
        },
      },
    },
    plugins: [],
  };
  
      