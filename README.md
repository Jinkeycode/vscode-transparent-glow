# vscode-transparent-glow
transparent vscode css

> 原文链接 [https://jinkey.ai/post/tech/ru-he-pei-zhi-tou-ming-fa-guang-de-sao-qi-vscode](https://jinkey.ai/post/tech/ru-he-pei-zhi-tou-ming-fa-guang-de-sao-qi-vscode)
转载请注明出处


# 1 安装自定义 JS 和 CSS 插件
![插件截图](https://upload-images.jianshu.io/upload_images/854231-b2e5e95d9c7571a2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 2 安装发光主题
![插件截图](https://upload-images.jianshu.io/upload_images/854231-01920da488773df2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 3 添加样式配置文件
在 VSCode 安装目录（自己随便选择一个文件夹也可以），放入以下文件。
为了方便下载，文件整理到了 [Github-Jinkeycode](https://github.com/Jinkeycode)/[vscode-transparent-glow](https://github.com/Jinkeycode/vscode-transparent-glow)，欢迎 star。


`enable-electron-vibrancy.js`
开启 electron 透明支持
![](https://upload-images.jianshu.io/upload_images/854231-bd77f033703fcede.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`vscode-vibrancy-style.css`
这里使用 [@孤狼](https://blog.evolify.cn/) 大佬提供的样式
![](https://upload-images.jianshu.io/upload_images/854231-fcefef968258caf0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`synthwave84.css`
文字发光样式，样式请在 Github 获取。如果要不发光的，可以使用 `synthwave84-noglow.css`。可以 watch [https://github.com/robb0wen/synthwave-vscode](https://github.com/robb0wen/synthwave-vscode) 保持更新通知。

`toolbar.css`
引入以上大神的样式配置之后，左边导航栏有部分标题还是未透明状态，我自己修改了配置，引入即可。
![](https://upload-images.jianshu.io/upload_images/854231-448a8c07397595fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`terminal.css`
使 vscode 内置的终端透明
![](http://upload-images.jianshu.io/upload_images/854231-4e961151a1a22352?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

终端光标颜色修改，由[@manonloki](www.manonloki.com) 提供
```
.panel.integrated-terminal .xterm-cursor,
.xterm-cursor-block {
  background: rgb(210, 0, 252) !important;
}
```

# 4 修改 VSCode 配置文件
![](https://upload-images.jianshu.io/upload_images/854231-fbd4da9e499e6c4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
点击上图 `在 setting.json 中编辑`，打开后加入配置(**不需要大括号**，直接把 key-value 加入原有 json 即可)：
![setting.json](http://upload-images.jianshu.io/upload_images/854231-50272ef5974e1d00?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 5 重加载
按下 Ctrl + Shift + P，运行 "Reload Custom CSS and JS", 重启 vscode 即可。如果提示`VSCode 已经损坏`，选择右上角齿轮“不再提示”即可。

# 6 总结
成品效果如图，不懂的可以加小助手微信 udujjb 拉你进群询问
![](https://upload-images.jianshu.io/upload_images/854231-203ae82f1544bf0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

以上教程是基于 MacOS 的，Linux 用户如何开启透明请参考；Windows 的electron暂不支持vibrancy模式，可以使用插件 [GlassIt-VSC](https://marketplace.visualstudio.com/items?itemName=s-nlf-fh.glassit) 设置透明。

[Custom CSS and JS Loader 配置](https://github.com/be5invis/vscode-custom-css#getting-started)

[Linux 透明窗口](https://github.com/sergei-dyshel/vscode/blob/master/README.fork.md)


