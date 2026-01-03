/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heme: ["Heme-Pro"],
      },
      borderRadius: {
        DEFAULT: "9999px",
      },
      fontSize: {
        // Mobile Display
        'm-display-1': ['40px', { lineHeight: '48px'}],
        'm-display-2': ['32px', { lineHeight: '40px'}],
        'm-display-subtitle': ['18px', { lineHeight: '28px'}],

        // Mobile Section
        'm-section-h1': ['28px', { lineHeight: '36px'}],
        'm-section-h2': ['24px', { lineHeight: '32px'}],
        'm-section-h3': ['18px', { lineHeight: '26px'}],

        // Mobile Heading
        'm-h1': ['24px', { lineHeight: '32px'}],
        'm-h2': ['20px', { lineHeight: '28px'}],
        'm-h3': ['18px', { lineHeight: '26px'}],
        'm-h4': ['17px', { lineHeight: '25px'}],
        'm-h5': ['16px', { lineHeight: '24px'}],
        'm-h6': ['14px', { lineHeight: '22px'}],

        // Mobile Body
        'm-body-l': ['17px', { lineHeight: '26px'}],
        'm-body-base': ['15px', { lineHeight: '24px'}],
        'm-body-s': ['14px', { lineHeight: '22px'}],
        'm-body-xs': ['12px', { lineHeight: '18px'}],

        // Mobile Caption & Label
        'm-caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em'}],
        'm-label': ['13px', { lineHeight: '18px', letterSpacing: '0.01em'}],

        // Mobile Button
        'm-button-l': ['15px', { lineHeight: '20px', letterSpacing: '0.01em'}],
        'm-button-m': ['14px', { lineHeight: '20px', letterSpacing: '0.01em'}],
        'm-button-s': ['13px', { lineHeight: '18px', letterSpacing: '0.01em'}],

        // Tablet Display
        't-display-1': ['52px', { lineHeight: '60px', letterSpacing: '-0.01em'}],
        't-display-2': ['40px', { lineHeight: '48px'}],
        't-display-subtitle': ['20px', { lineHeight: '30px'}],

        // Tablet Section
        't-section-h1': ['32px', { lineHeight: '40px', letterSpacing: '-0.005em'}],
        't-section-h2': ['26px', { lineHeight: '34px'}],
        't-section-h3': ['20px', { lineHeight: '28px'}],

        // Tablet Heading
        't-h1': ['26px', { lineHeight: '34px', letterSpacing: '-0.005em'}],
        't-h2': ['22px', { lineHeight: '30px'}],
        't-h3': ['19px', { lineHeight: '27px'}],
        't-h4': ['18px', { lineHeight: '26px'}],
        't-h5': ['16px', { lineHeight: '24px'}],
        't-h6': ['14px', { lineHeight: '22px'}],

        // Tablet Body
        't-body-l': ['18px', { lineHeight: '28px'}],
        't-body-base': ['16px', { lineHeight: '26px'}],
        't-body-s': ['14px', { lineHeight: '22px'}],
        't-body-xs': ['12px', { lineHeight: '18px'}],

        // Tablet Caption & Label
        't-caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em'}],
        't-label': ['13px', { lineHeight: '18px', letterSpacing: '0.01em'}],

        // Tablet Button
        't-button-l': ['16px', { lineHeight: '22px', letterSpacing: '0.01em'}],
        't-button-m': ['15px', { lineHeight: '22px', letterSpacing: '0.01em'}],
        't-button-s': ['14px', { lineHeight: '20px', letterSpacing: '0.01em'}],

        // Desktop Display
        'd-display-1': ['64px', { lineHeight: '72px', letterSpacing: '-0.01em'}],
        'd-display-2': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em'}],
        'd-display-subtitle': ['24px', { lineHeight: '34px'}],

        // Desktop Section
        'd-section-h1': ['36px', { lineHeight: '44px', letterSpacing: '-0.005em'}],
        'd-section-h2': ['28px', { lineHeight: '36px'}],
        'd-section-h3': ['20px', { lineHeight: '28px'}],

        // Desktop Heading
        'd-h1': ['28px', { lineHeight: '36px', letterSpacing: '-0.005em'}],
        'd-h2': ['24px', { lineHeight: '3px'}],
        'd-h3': ['20px', { lineHeight: '28px'}],
        'd-h4': ['18px', { lineHeight: '26px'}],
        'd-h5': ['16px', { lineHeight: '24px'}],
        'd-h6': ['14px', { lineHeight: '22px'}],

        // Desktop Body
        'd-body-l': ['18px', { lineHeight: '26px'}],
        'd-body-base': ['16px', { lineHeight: '26px'}],
        'd-body-s': ['14px', { lineHeight: '22px'}],
        'd-body-xs': ['12px', { lineHeight: '18px'}],

        // Desktop Caption & Label
        'd-caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em'}],
        'd-label': ['13px', { lineHeight: '18px', letterSpacing: '0.01em'}],

        // Desktop Button
        'd-button-l': ['16px', { lineHeight: '24px', letterSpacing: '0.01em'}],
        'd-button-m': ['15px', { lineHeight: '20px', letterSpacing: '0.01em'}],
        'd-button-s': ['14px', { lineHeight: '20px', letterSpacing: '0.01em'}],
      },
      
      colors: {
        // Posnod Core
        primary: { black: "#1e1e22", white: "#ffffff" },
        "ui-accent": { DEFAULT: "#07A36A", hover: "#1EB37D", active: "#1C9468", disabled: "rgba(7,164,106,0.2)" },
        neutral: { 0:"#FBFBFB", 50:"#F9F9F9", 100:"#D8DADE", 500:"#6B6B6B", 900:"#2C2C2E" },
        simantics:{ success:"#22C55E", error:"#EF4444", warning:"#FACC15" },
        overlay:{ dark:"rgba(30,30,34,0.01)", light:"rgba(255,255,255,0.01)" },
        interaction:{ focus:"#A9CC9C", hover:"rgba(7,163,106,0.02)", active:"rgba(7,163,106,0.06)" },
        background:{ default:"#fbfbfb", white:"#ffffff", black:"#111111" },

        // TUF Categories
        tuf:{
          sains:{ primary:"#3366cc", secondary:"#85a9e0", third:"rgba(51,102,204,0.2)" },
          teknologi:{ primary:"#3f8dda", secondary:"#a7caf5", third:"rgba(63,141,218,0.2)" },
          lingkungan:{ primary:"#2e7d32", secondary:"#80b77d", third:"rgba(46,125,50,0.2)" },
          kesehatan:{ primary:"#4caf50", secondary:"#a7d397", third:"rgba(52,202,80,0.2)" },
          agama:{ primary:"#6a1b9a", secondary:"#a381d4", third:"rgba(106,27,154,0.2)" },
          psikologi:{ primary:"#8e24aa", secondary:"#c49bd9", third:"rgba(142,36,170,0.2)" },
          seni:{ primary:"#c2185b", secondary:"#eba7c7", third:"rgba(194,24,91,0.2)" },
          sosial:{ primary:"#d32f2f", secondary:"#e88585", third:"rgba(211,47,47,0.2)" },
          bisnis:{ primary:"#f57c00", secondary:"#fdbb74", third:"rgba(245,124,0,0.2)" },
          media:{ primary:"#ffa000", secondary:"#ffd570", third:"rgba(255,160,0,0.2)" },
          teknik:{ primary:"#f9a825", secondary:"#fcd56b", third:"rgba(249,168,37,0.2)" },
          pendidikan:{ primary:"#fbc02d", secondary:"#fff28b", third:"rgba(251,192,45,0.2)" },
          hukum:{ primary:"#5d4037", secondary:"#b89a81", third:"rgba(93,64,55,0.2)" },
          bahasa:{ primary:"#795548", secondary:"#bfaf9a", third:"rgba(121,85,72,0.2)" },
          sejarah:{ primary:"#455a64", secondary:"#7a8e99", third:"rgba(69,90,100,0.2)" },
          matematika:{ primary:"#616161", secondary:"#a1a1a1", third:"rgba(97,97,97,0.2)" },
        },
      }
    }
  },
  plugins: [],
};