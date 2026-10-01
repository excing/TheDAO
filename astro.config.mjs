import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';

// 自定义设计的 DAO 几何 SVG Logo
// 象征“道生万物、阴阳圆融”的莫比乌斯流转，以及 Web3 分布式去中心化节点互联
const daoLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none">
  <defs>
    <linearGradient id="daoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <!-- 外部去中心化流动环轨 -->
  <circle cx="16" cy="16" r="14" stroke="url(#daoGrad)" stroke-width="2" stroke-linecap="round" stroke-dasharray="60 18"/>
  <!-- 内部共识协同环轨 -->
  <circle cx="16" cy="16" r="8" stroke="url(#daoGrad)" stroke-width="1.8" stroke-dasharray="14 10"/>
  <!-- 分布式协同节点（三生万物拓扑结构） -->
  <circle cx="16" cy="6" r="2.2" fill="#6366f1"/>
  <circle cx="25" cy="21" r="2.2" fill="#8b5cf6"/>
  <circle cx="7" cy="21" r="2.2" fill="#06b6d4"/>
  <!-- 核心中心点（原点/无极） -->
  <circle cx="16" cy="16" r="1.8" fill="#ffffff"/>
</svg>`;

// 构建时自动将内置的 SVG 写入资产目录，无需在仓库中额外存放独立的图片文件
fs.mkdirSync('./src/assets', { recursive: true });
fs.writeFileSync('./src/assets/logo.svg', daoLogoSvg.trim());

export default defineConfig({
  integrations: [
    starlight({
      title: 'The DAO',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/excing/TheDAO',
        twitter: 'https://x.com/courage_exc',
      },
    }),
  ],
});
