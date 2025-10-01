import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
