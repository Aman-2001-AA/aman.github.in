// tailwind.config.js
module.exports = {
    theme: {
      screens: {
        'tablet': '1440px',
        // => @media (min-width: 1440px, min-height:3040) { ... }
  
        'laptop': '1680px',
        // => @media (min-width: 1680px, min-height: 1050) { ... }
  
        'desktop': '1920px',
        // => @media (min-width: 1920px, min-height: 1200) { ... }
      },
    }
  }