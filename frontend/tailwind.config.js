module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: (theme) => ({
        "light-dark": "rgba(45, 45, 45, 0.4)",
        "fade-dark":"rgba(0, 0, 0, 0.25)",
        "dark": "rgba(45, 45, 45)",
        "main": "#FEC524",
      }),
      backgroundColor: (theme) => ({
        "light-dark": "rgba(45, 45, 45, 0.4)",
        "fade-dark":"rgba(0, 0, 0, 0.25)",
        "dark": "rgba(45, 45, 45)",
        "main": "#FEC524",
      }),
      borderColor: (theme) => ({
        "light-dark": "rgba(45, 45, 45, 0.4)",
        "fade-dark":"rgba(0, 0, 0, 0.25)",
        "dark": "rgba(45, 45, 45)",
        "main": "#FEC524",
      }),
      borderWidth: (theme) => ({
        1.5: "1.5px"
      }),
      backdropBlur: (theme) => ({
        xs: '2px',
      })
    },
  },
  plugins: [],
}
