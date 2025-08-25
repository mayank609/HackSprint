import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
  plugins: [tailwindcss, autoprefixer],
};
