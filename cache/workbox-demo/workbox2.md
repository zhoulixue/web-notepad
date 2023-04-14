# workbox 使用

## generateSW
* when to use
1. 需要构建使用一些位置的hash预缓存文件
2. 能通过简单的配置实现缓存
* when not to use
1. 需要一些灵活性
2. 需要使用其他的sw特性

## injectManifest
* when to use
1. 在自己的 sw中实现预缓存
2. 路由复杂，且generateSW配置不能实现
3. 需要使用sw的其特性
* when not to use
1. 不需要使用预加载
2. generateSW可以满足
3. 简单

## workbox-cli

```bash
npm install workbox-cli --save-dev
npx workbox wizard
```
## workbox-build
generateSW 用于生成sw.js文件
```js
// build-sw.mjs
import {generateSW} from 'workbox-build';

generateSW({
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{css,woff2,png,svg,jpg,js}'
  ],
  swDest: 'dist/sw.js'
});
```
## workbox-webpack-plugin
```js
// webpack.config.js
import {GenerateSW} from 'workbox-webpack-plugin';

export default {
  // Other webpack config options omitted for brevity...
  plugins: [
    new GenerateSW({
      swDest: './dist/sw.js'
    })
  ]
};
```

