/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-img': "url('./images/image-web-3-mobile.jpg')",
        'desktop-img': "url('./images/image-web-3-desktop.jpg')"
      },
  },
  plugins: [],
}
}
