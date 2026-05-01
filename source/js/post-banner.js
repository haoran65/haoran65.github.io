(function () {
  // 只在文章页执行
  if (!document.body.classList.contains('post-page')) return;

  // 读取我们注入的 meta 标签
  const meta = document.querySelector('meta[name="post-banner"]');
  if (!meta || !meta.content) return;

  // 找到 banner 元素并替换背景图
  const banner = document.querySelector('.banner');
  if (banner) {
    banner.style.backgroundImage = `url('${meta.content}')`;
  }
})();