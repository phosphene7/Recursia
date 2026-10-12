// 页面配置：添加作者、代码仓库和视频时，只需修改这里。
window.RECURSIA_CONFIG = {
  authors: [], // 例如 [{ name: "Your Name", url: "https://your-homepage.com" }]
  codeUrl: "", // 论文代码仓库的链接；暂不显示无地址的按钮。
  videos: {
    task1: { src: "", poster: "assets/images/task-1.svg", captions: "" },
    task2: { src: "", poster: "assets/images/task-2.svg", captions: "" },
    task3: { src: "", poster: "assets/images/task-3.svg", captions: "" }
  }
};
// 放入 assets/videos/task-1.mp4，再把 task1.src 改为该相对路径。
// captions 可选，填写英文 WebVTT 字幕文件路径；视频也支持 HTTPS 直链。
