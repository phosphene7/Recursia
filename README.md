# Recursia · 网页草稿备份

论文项目页：**Recursive Self-Improvement of Shared Executable Stacks for Zero-Shot Long-Horizon Robot Manipulation**。

纯 HTML / CSS / JavaScript，无构建步骤。页面包含摘要、论文方法原图、三个实机任务视频位置和初步实机结果。作者暂时为空，未添加 arXiv 或虚构的论文代码地址。

## 本地预览

在这个目录运行：

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

打开 http://127.0.0.1:8765 。也可以直接打开 `index.html`。

## 替换三个视频

把视频放入 `assets/videos/`，修改 `site-config.js`：

```js
videos: {
  task1: { src: "assets/videos/task-1.mp4", poster: "assets/images/task-1.svg", captions: "" },
  task2: { src: "assets/videos/task-2.mp4", poster: "assets/images/task-2.svg", captions: "" },
  task3: { src: "assets/videos/task-3.mp4", poster: "assets/images/task-3.svg", captions: "" }
}
```

填写 `src` 后对应示意图自动替换为可播放的视频。留空时显示 `VIDEO COMING SOON`，不会请求不存在的视频文件。推荐 MP4（H.264）；也支持 HTTPS 视频直链。`poster` 可替换为真实视频封面，`captions` 可填写 WebVTT 字幕路径。任务名称与说明直接在 `index.html` 的 `#demos` 区域修改。

## 添加作者与论文代码链接

在 `site-config.js` 填入：

```js
authors: [{ name: "Author Name", url: "https://author-homepage.example" }],
codeUrl: "https://github.com/YOUR-ORG/YOUR-CODE-REPO",
```

`codeUrl` 应指向论文代码仓库，不是仅承载这个网页的仓库。作者列表为空时整个作者区隐藏。

## 仓库用途

这个仓库保存最初的项目网页草稿，目前已按用户要求改为 Public。它不是机器人程序或论文实验代码仓库。

**维护在线网站请使用 https://github.com/phosphene7/Recursia-Page 。** 该仓库包含公开网页、PDF 和当前视频配置。这里的草稿保留作备份，未加入 PDF 下载入口。

`.github/workflows/pages.yml` 仅支持手动运行；没有自动发布草稿。

全部资源使用相对路径，兼容 GitHub Pages 项目子路径。Google Fonts 仅用于字体美化；网络不可达时自动使用本地 Arial / Georgia。

## 内容来源与待更新项

- 方法与任务描述来自用户提供的论文。目前按用户要求不上传 PDF，也不显示 PDF 下载按钮。
- `framework.webp` 与 `shared-stack.webp` 从论文 Figure 1 提取；三个任务封面为原创示意图，已标注 illustrative task diagram。
- 初步实机结果来自论文 Table 1，每个目标任务每种方法三次试验；未把尚未完成的仿真结果当作最终结论。
- 三个任务暂按论文 §3.3 的 Shared basket、Reassigned plates、Bowl–mug dependency 设置，可随时改名和替换。
- PDF 下载入口待用户明确要求后添加。arXiv 尚未添加；作者区留空。
- 页面结构参考 EventVLA 项目页 https://ganlin-yang.github.io/EventVLA.github.io/ ，视觉设计与实现为此项目重新制作。
- 实验室链接按用户要求指向 https://github.com/cocacola-lab 。
