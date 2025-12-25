/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // cores personalizadas usadas no CSS da aplicação
        background: "#f5f5f5",   // fundo claro neutro
        foreground: "#111827",   // texto escuro para boa legibilidade
      },
    },
  },
  plugins: [],
}