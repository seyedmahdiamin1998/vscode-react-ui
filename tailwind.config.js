/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {},
        text: {},

        // Dark ---------------------------------------------- //
        primaryDark: {
          50: "rgba(255, 255, 255, 0)",
          100: "rgba(31, 35, 53, 1)",
        },

        textDark: {
          10: "#c0caf5",
          20: "#7582ba",
          30: "#2f3549",
          40: "#4E5579",
          50: "#747ca1",
          60: "#1b1e2e"
        },
        panel:{
          30: "#3d59a1"
        }



      }
    },
  },
  plugins: [],
}


// const defaultTheme = require("tailwindcss/defaultTheme");

// module.exports = {
//   darkMode: "class",
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx}",
//     "./src/utils/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     screens: {
//       // xxxxsm: "250px",
//       // xxxsm: "380px",
//       // xxsm: "450px",
//       xsm: "550px",
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//       ...defaultTheme.screens,
//     },
//     container: {
//       screens: {
//         'sm': '640px',
//         'md': '768px',
//         'lg': '1024px',
//         'xl': '1280px',
//         '2xl': '1536px'


//       }
//     },
//     extend: {
//       colors: {
//         primary: 'rgba(255, 194, 14, 1)',
//       },
//       rotate: {
//         50: "50deg",
//       },
//       colors: {
//         primaryTxt: {
//           100: "rgba(74 , 84 , 98 , 1)",
//         },
//         historicAnalysis: {
//           100: "rgba(45, 83, 166, 0.9)",
//         },
//         backgroundMigMig: {
//           80: "rgba(147, 68,151, 0.8)",
//           90: "rgba(122, 25,151, 1)",
//           100: "rgba(147, 68, 151, 1)",
//         },
//         backgroundTools: {
//           90: "rgba(56, 51, 47, 1)",
//           100: "rgba(77, 77, 77, 1)",
//         },
//         backgroundAnalysis: {
//           80: "rgba(44, 66, 143, 0.8)",
//           90: "rgba(47, 32, 141, 0.9)",
//           100: "rgba(44, 66, 143, 1)",
//         },
//         backgroundPlatform: {
//           80: "rgba(17, 178, 65, 0.8)",
//           90: "rgba(20, 123, 65, 1)",
//           100: "rgba(17, 178, 65, 1)",
//         },
//         platformGreenLight: {
//           100: "rgba(215, 241, 223, 1)",
//         },
//         platformGreenDark: {
//           100: "rgba(18, 47, 27, 1)",
//         },
//         backgroundHeaderDark: {
//           100: "rgba(11, 35, 62, 0.9)",
//         },
//         backgroundHeader: {
//           100: "rgba(255, 255, 255, 0.93)",
//         },
//         backgroundLight: {
//           100: "rgba(249,249,249, 1)",
//         },
//         bgIconFooterDark: {
//           100: "rgba(52, 54, 55, 1)",
//         },
//         backgroundFooter: {
//           100: "rgba(242, 242, 242, 1)",
//         },
//         backgroundFooterDark: {
//           100: "rgba(58, 58, 58, 1)",
//         },
//         backgroundAboutHeader: {
//           100: "rgba(0, 0, 0 , 0.9)",
//         },
//         buttonDark: {
//           100: "rgba(65, 64, 66, 1)",
//         },
//         needlePurple: {
//           80: "rgba(129, 34, 102, 1)",
//           100: "rgba(166, 51, 131, 1)",
//         },
//         needleYellow: {
//           50: "rgb(253, 205, 7 , 0.5)",
//           80: "rgb(253, 205, 7 , 1)",
//           100: "rgb(253, 205, 7 , 1)",
//           200: "rgb(165, 143, 51 , 1)",
//         },
//         needleBlue: {
//           80: "rgb(10, 74, 97 , 1)",
//           100: "rgb(49, 148, 184 , 1)",
//         },
//         primary: {
//           10: "rgba(255, 194, 14 , 0.1)",
//           20: "rgba(255, 194, 14 , 0.2)",
//           30: "rgba(255, 194, 14 , 0.3)",
//           50: "rgba(255, 194, 14 , 0.5)",
//           80: "rgba(255, 194, 14 , 0.8)",
//           100: "rgba(255, 194, 14, 1)",
//         },
//         analysis: {
//           100: "rgba(44, 105, 181, 1)",
//           10: "rgba(44, 105, 181, 1)",
//           90: "rgba(44, 105, 181, 1)",
//         },
//         migMig: {
//           50: "rgba(184, 61, 214, 0.5)",
//           100: "rgba(184, 61, 214, 1)",
//         },
//         white: {
//           10: "rgba(252, 255, 255, 0.1)",
//           30: "rgba(252, 255, 255, 0.3)",
//           50: "rgba(252, 255, 255, 0.5)",
//           70: "rgba(252, 255, 255, 0.7)",
//           80: "rgba(252, 255, 255, 0.8)",
//           90: "rgba(252, 255, 255, 0.9)",
//           100: "rgba(252, 255, 255, 1)",
//         },
//         glass: {
//           10: "rgba(255, 255, 255, 0.1)",
//           30: "rgba(255, 255, 255, 0.3)",
//           50: "rgba(252, 255, 255, 0.5)",
//           80: "rgba(252, 255, 255, 0.8)",
//         },
//         black: {
//           30: "rgba(0, 0, 0, 0.3)",
//           50: "rgba(0, 0, 0, 0.5)",
//           80: "rgba(0, 0, 0, 0.8)",
//           90: "rgba(0, 0, 0, 0.9)",
//         },
//         background: {
//           100: "rgba(243, 244, 246, 1)",
//         },
//         modalBackground: {
//           100: "rgb(30, 41, 59 ,0.7)",
//         },
//         dark: {
//           10: "rgba(58, 58, 58 , 1)",
//           50: "rgba(27, 52, 77, 1)",
//           100: "rgba(40, 40, 40, 1)",
//           200: "rgba(30, 29, 29, 1)",
//         },
//         stripe: {
//           50: 'rgba(3, 169, 244, 0.5)',
//           100: 'rgba(3, 169, 244, 1)'
//         },
//         error: {
//           100: 'rgba(153, 27, 27, 0.8)'
//         },
//         disable: {
//           100: 'rgba(203, 213, 225, 0.6)'
//         },
//         darkDisable: {
//           100: 'rgba(59,54,54,0.6)'
//         },
//         txtDarkDisable: {
//           100: 'rgba(86,86,86,1)'
//         },
//         loadingDark: {
//           100: "rgb(51, 65, 85 , 0.7)",
//         },
//         backgroundInput: {
//           100: "rgba(236, 240, 241, 1)",
//         },
//       },
//       width: {
//         auto: "auto",
//         fit: "fit-content",
//         max: "max-content",
//         "full-260": "calc(100% - 260px )",
//         "full-78": "calc(100% - 78px )",
//       },
//       height: {
//         auto: "auto",
//         fit: "fit-content",
//       },
//       zIndex: {
//         auto: "auto",
//         60: "60",
//         70: "70",
//         80: "80",
//         90: "90",
//       },
//       fontFamily: {
//         dana: ["dana"],
//         roboto: ["Roboto"],
//       },
//       keyframes: {
//         pulse: {
//           "0%": { opacity: "0.9" },
//           "50%": { opacity: "0.5" },
//           "100%": { opacity: "0.9" },
//         },
//         "fade-in": {
//           "0%": { opacity: "0", transform: "translateY(-20px)", },
//           "100%": { opacity: "1", transform: "translateY(0px)", },
//         },
//         zoomIn: {
//           "0%": {
//             opacity: "0",
//             transform: "scale3d(.3, .3, .3)",
//           },
//           "50%": {
//             opacity: "1",
//           },
//         },
//         toLeft: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(40px)",
//           },
//           "25%": {
//             opacity: "0.25",
//             transform: "translateX(30px)",
//           },
//           "50%": {
//             opacity: "0.5",
//             transform: "translateX(20px)",
//           },
//           "75%": {
//             opacity: "0.75",
//             transform: "translateX(10px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0px)",
//           },
//         },
//         toRight: {
//           "0%": {
//             opacity: "0",
//             transform: "translateX(-40px)",
//           },
//           "25%": {
//             opacity: "0.25",
//             transform: "translateX(-30px)",
//           },
//           "50%": {
//             opacity: "0.5",
//             transform: "translateX(-20px)",
//           },
//           "75%": {
//             opacity: "0.75",
//             transform: "translateX(-10px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateX(0px)",
//           },
//         },
//         toDown: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(-20px)",
//           },
//           "25%": {
//             opacity: "0.25",
//             transform: "translateY(-15px)",
//           },
//           "50%": {
//             opacity: "0.5",
//             transform: "translateY(-10px)",
//           },
//           "75%": {
//             opacity: "0.75",
//             transform: "translateY(-5px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0px)",
//           },
//         },
//         toUp: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(40px)",
//           },
//           "25%": {
//             opacity: "0.25",
//             transform: "translateY(20px)",
//           },
//           "50%": {
//             opacity: "0.5",
//             transform: "translateY(10px)",
//           },
//           "75%": {
//             opacity: "0.75",
//             transform: "translateY(0px)",
//           },
//           "100%": {
//             opacity: "1",
//           },
//         },
//       },

//       animation: {
//         "fade-in": "fade-in 0.3s ease-in",
//         "zoom-in": "zoomIn 0.3s ease-in",
//         "my-fade-left": "toLeft 0.8s linear",
//         "my-fade-right": "toRight 0.8s linear",
//         "my-fade-down": "toDown 0.3s linear",
//         "my-fade-up": "toUp 0.8s linear",
//         "my-fade-down-hand": "toUp 0.5s linear",
//         "my-fade-left-fast": "toLeft 0.3s linear",
//         "my-pulse": "pulse 0.9s infinite"
//       },

//       boxShadow: {
//         indexPrimaryDark: 'rgba(255, 255, 255, 0.56) 1px 2px 1px 1px',
//         indexPrimary: 'rgba(255, 194, 14 , 0.56) 1px 2px 1px 1px',
//         yellow:
//           "rgba(254, 240, 138, 1.32) 0px 2px 4px 0px, rgba(254, 240, 138, 2.12) 0px 2px 16px 0px",
//         purple:
//           "rgba(180, 58, 212, 1.32) 0px 2px 4px 0px, rgba(180, 58, 212, 2.12) 0px 2px 16px 0px",
//         white:
//           "rgba(255, 255, 255, 1.32) 0px 2px 4px 0px, rgba(255, 255, 255, 2.12) 0px 2px 16px 0px",
//         analysis:
//           "rgba(44, 105, 181, 1) 0px 2px 4px 0px, rgba(44, 105, 181, 1) 0px 2px 16px 0px",
//         platform:
//           "rgba(20, 123, 65, 1) 0px 2px 4px 0px, rgba(20, 123, 65, 1) 0px 2px 16px 0px",
//         searchSelect: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
//       },
//     },
//   },
// };
