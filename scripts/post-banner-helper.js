/**
 * 将文章 Front-matter 中的 banner_img 注入到 HTML 的 <head> 里，
 * 作为 <meta name="post-banner" content="..."> 标签。
 */
hexo.extend.filter.register('after_render:html', function (htmlContent, data) {
  // 仅处理文章页面 (post)
  if (data.layout !== 'post' || !data.page) return htmlContent;

  const bannerImg = data.page.banner_img;
  if (!bannerImg) return htmlContent;

  // 如果 banner_img 不是以 http 开头，确保它是绝对路径（相对于站点根目录）
  let url = bannerImg;
  if (!/^(https?:)?\/\//i.test(url)) {
    url = hexo.config.root + url.replace(/^\//, '');
  }

  // 把 meta 标签插入到 </head> 前面
  return htmlContent.replace('</head>', `<meta name="post-banner" content="${url}">\n</head>`);
});