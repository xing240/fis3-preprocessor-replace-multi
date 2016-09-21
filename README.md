# fis3-preprocessor-replace-multi

a replace preprocessor plugin for fis3
在 preprocessor 阶段，对文件的内容进行替换

## usage


**install**

```bash
npm install fis3-preprocessor-replace-multi --save-dev
```

**use**

```javascript
  fis.match('**.js', {
    preprocessor: fis.plugin('replace-multi', {
      'before replace': 'after replace',
      '__DEBUG': false
    }, 'append')
  });
```

#### Before

```js
  var str = 'before replace';
  var url = __DEBUG ? 'http://dev.github.com' : 'https://github.com'
```


#### After

```js
  var str = 'after replace';
  var url = false ? 'http://dev.github.com' : 'https://github.com'
```
