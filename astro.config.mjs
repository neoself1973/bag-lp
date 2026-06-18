import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'http://xs361374.xsrv.jp',
  base: '/bag',

  // 末尾スラッシュを安定させる（/bag/ で配信）
  trailingSlash: 'ignore',

  build: {
    // アセットのパスずれを防ぐ
    assets: '_astro',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});