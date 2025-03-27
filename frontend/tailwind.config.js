/** @type {import('tailwindcss').Config} */
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
  
      