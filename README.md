# Recursia · Learning to Compose

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

## GitHub Pages

仓库：`phosphene7/Recursia`。项目网页位于 `https://phosphene7.github.io/Recursia/`（启用 Pages 并部署成功后生效）。

最简单的部署方式：仓库 **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**。

也提供 `.github/workflows/pages.yml`，如改用 Actions 部署，在 Pages 的 Source 中选择 **GitHub Actions**，再运行该 workflow。两种部署方式任选其一。

全部资源使用相对路径，兼容 GitHub Pages 项目子路径。Google Fonts 仅用于字体美化；网络不可达时自动使用本地 Arial / Georgia。

## 内容来源与待更新项

- 方法与任务描述来自提供的 `Recursia.pdf`，页面链接为 `assets/Recursia.pdf`。
- `framework.webp` 与 `shared-stack.webp` 从论文 Figure 1 提取；三个任务封面为原创示意图，已标注 illustrative task diagram。
- 初步实机结果来自论文 Table 1，每个目标任务每种方法三次试验；未把尚未完成的仿真结果当作最终结论。
- 三个任务暂按论文 §3.3 的 Shared basket、Reassigned plates、Bowl–mug dependency 设置，可随时改名和替换。
- 更新论文时替换 `assets/Recursia.pdf`；要暂时移除 PDF 下载，删除 `index.html` 中的 `Paper PDF` 链接。
- 页面结构参考 EventVLA 项目页 https://ganlin-yang.github.io/EventVLA.github.io/ ，视觉设计与实现为此项目重新制作。
- 实验室链接按用户要求指向 https://github.com/cocacola-lab 。
