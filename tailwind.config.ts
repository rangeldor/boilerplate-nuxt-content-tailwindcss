import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}'
    // Adicione outros diretórios conforme necessário
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}

export default config
