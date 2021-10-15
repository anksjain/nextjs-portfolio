module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex:{
        '-1':'-1',
        '1':'1'
      },
      inset:{
        '1/10':"10%",
        '7':'7px',
        '-9':'-9px'
      },
      width:{
        '2.5':"25vw",
      },
      colors:{
        dark_to:"#88FFF7",
        test_from:"#46B3E6",
        test_three:"#4D80E4",
        test_four:"#DFF6F0",
        test_five:"#2E279D",
        title_text_background: "rgba(25,29,43,.44)",
        dark:{
          primary_color: "#007bff",
          primary_color_light: "#057FFF",
          secondary_color: "#6c757d",
          background_dark_color: "#10121A",
          background_dark_grey: "#191D2B",
          border_color: "#2e344e",
          background_light_color: "#F1F1F1",
          background_light_color_2: "rgba(3,127,255,.3)",
          white_color: "#FFF",
          font_light_color: "#a4acc4",
          font_dark_color: "#313131",
          font_dark_color_2: "#151515",
          sidebar_dark_color: "#191D2B",
          scrollbar_bg_color: "#383838",
          scrollbar_thump_color: "#6b6b6b",
          scrollbar_track_color: "#383838",
          header_backgorund_color:"#191c29",
          detail_background:"#1f2436",
          detail_background_1:"#1b2136"
        },
        light:{
          primary: "#007bff",
          primary_light: "#057FFF",
          secondary: "#ff7675",
          background_dark: "#F1F1F1",
          background_dark_grey: "#e4e4e4",
          border: "#cbced8",
          border_2:"#7d7e85",
          background_light: "#F1F1F1",
          background_light_2: "rgba(3,127,255,.3)",
          white: "#151515",
          font_light: "#313131",
          font_dark: "#313131",
          font_dark_2: "#151515",
          sidebar_dark: "#E4E4E4",
          scrollbar_bg: "#383838",
          scrollbar_thump: "#6b6b6b",
          scrollbar_track: "#383838",
      }
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
