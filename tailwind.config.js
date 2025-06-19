module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'pi': ['primeicons'] // Asegura que los iconos se muestren
      },
 colors: {     
        background: '#f1e6ca',
        text: '#232757',
        backgroundButton:'#c83726',
        textButton:'#f7d622'
      },
    }
  }
}