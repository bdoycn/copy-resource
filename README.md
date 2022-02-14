CopyResource
============
使用现代化的 clipboard API 将各种资源复制到剪辑板

支持文本、图片、文件等

```ts
const { copyResource } = import 'copy-resource';

// 复制文本
const text = '文本内容';
copyResource(text)
  .then(() => console.log('复制成功'))
  .catch((err) => console.log(`复制失败 err: ${err.message}`));

// 复制图片
const img = document.querySelector('#logo');
copyResource(img);

// 复制文件
fetch('https://xxx')
  .then((response) => {
    if (!response.ok) throw new Error('fetch file failed');
    return response.blob();
  })
  .then((file) => {
    copyResource(file);
  })

// 复制网址指向的资源
// 为了分辨是文本还是网址 需要构建 UrlResource 对象
copyResource(new UrlResource('https://xxx'));
```

## 浏览器支持

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
62 ✔ | 63 ✔ | 13.1 ✔ | 49 ✔ | 79 ✔ | 不支持 ✖ |

## Installing

Using npm:

```bash
$ npm install copy-resource
```

Using bower:

```bash
$ bower install copy-resource
```

Using yarn:

```bash
$ yarn add copy-resource
```
