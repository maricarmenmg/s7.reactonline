import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
  plugins: [
    tailwindcss(path.resolve(__dirname, './src/css/tailwind.config.js')),
    autoprefixer,
  ],
};