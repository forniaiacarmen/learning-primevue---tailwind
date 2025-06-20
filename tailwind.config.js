export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    fontFamily: {
      'pi': ['primeicons'] // Asegura que los iconos se muestren
    },
    colors: {
      background: '#2d2a29',
      text: '#dfeaed',
      backgroundButton: '#c83726',
      textButton: '#f7d622'
    },
  }
};

//#161d26 este pa backgroung  #2d2a29
//#785b28  letras  #dfeaed