import type { Config } from 'tailwindcss';
import masqueTailwindPlugin from './src/plugins/masque-tailwind-utilities-plugin'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Thai', 'sans-serif'], // ตั้ง Noto Sans Thai เป็นฟอนต์ default
      },
    },
  },

  plugins: [masqueTailwindPlugin],
} satisfies Config;