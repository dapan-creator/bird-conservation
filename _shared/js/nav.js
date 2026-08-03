/* ============================================
   公共组件 - 导航栏、故事线、页脚
   ============================================ */

// 页面配置
const PAGES = {
  'index': { name: '首页', path: 'index.html', story: -1 },
  'birds': { name: '认识飞鸟', path: 'birds.html', story: 0 },
  'bird-detail': { name: '飞鸟图鉴', path: 'bird-detail.html', story: 0 },
  'protection': { name: '探索保护地', path: 'protection.html', story: 1 },
  'ai-protection': { name: 'AI × 飞鸟保护', path: 'ai-protection.html', story: 3 },
  'ai-lab': { name: 'AI 实验室', path: 'ai-lab.html', story: 2 },
  'participate': { name: '参与保护', path: 'participate.html', story: 4 }
};

// 故事线步骤
const STORY_STEPS = [
  { label: '认识它', desc: '飞鸟科普', page: 'birds.html' },
  { label: '找到它', desc: '保护地', page: 'protection.html' },
  { label: '看见它', desc: 'AI 识别', page: 'ai-lab.html' },
  { label: '理解它', desc: 'AI 分析', page: 'ai-protection.html' },
  { label: '保护它', desc: 'AI 辅助保护', page: 'participate.html' }
];

// Logo SVG
const LOGO_SVG = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 20 Q8 14 14 16 L20 12 Q26 10 28 14 L24 18 Q20 22 14 20 L8 24 Z" fill="#2F5D50"/>
  <circle cx="22" cy="14" r="1.5" fill="#D99A3D"/>
  <path d="M14 16 L10 12" stroke="#5D8C83" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

// 生成导航栏
function renderNavBar(activePage) {
  const navLinks = Object.entries(PAGES)
    .filter(([key]) => key !== 'bird-detail')
    .map(([key, page]) => {
      const isActive = key === activePage ? 'active' : '';
      return `<a href="${page.path}" class="${isActive}">${page.name}</a>`;
    }).join('');

  return `
    <nav class="nav-bar" id="navBar">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          ${LOGO_SVG}
          <span>AI × 飞鸟保护</span>
        </a>
        <div class="nav-links" id="navLinks">
          ${navLinks}
        </div>
        <div class="nav-toggle" id="navToggle">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;
}

// 生成故事线导航
function renderStoryNav(activeStory) {
  let html = '<div class="story-nav-inner">';
  STORY_STEPS.forEach((step, i) => {
    const isActive = i === activeStory ? 'active' : '';
    html += `<a href="${step.page}" class="story-nav-item ${isActive}">
      <span class="step-num">${i + 1}</span>${step.label}
    </a>`;
    if (i < STORY_STEPS.length - 1) {
      html += '<span class="story-nav-arrow">→</span>';
    }
  });
  html += '</div>';
  return `<div class="story-nav">${html}</div>`;
}

// 生成页脚
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>AI × 飞鸟保护</h3>
            <p>让 AI 看见飞鸟，让科技守护自然。<br>认识飞鸟，是保护的开始；了解栖息地，是保护的基础；AI 让我们能够更高效地发现、记录和理解自然。</p>
          </div>
          <div class="footer-col">
            <h4>认识飞鸟</h4>
            <a href="birds.html">飞鸟图鉴</a>
          </div>
          <div class="footer-col">
            <h4>探索保护</h4>
            <a href="protection.html">保护地科普</a>
            <a href="ai-lab.html">AI 实验室</a>
            <a href="ai-protection.html">AI × 飞鸟保护</a>
            <a href="participate.html">参与保护</a>
          </div>
          <div class="footer-col">
            <h4>关于</h4>
            <a href="index.html">网站首页</a>
            <a href="https://ebird.org/home" target="_blank" rel="noopener noreferrer">eBird</a>
            <a href="https://www.birdreport.cn/" target="_blank" rel="noopener noreferrer">中国观鸟记录中心</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// 初始化公共组件
function initCommon(activePage, activeStory) {
  // 注入导航栏
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = renderNavBar(activePage);
  }

  // 注入故事线
  const storyPlaceholder = document.getElementById('story-nav-placeholder');
  if (storyPlaceholder) {
    storyPlaceholder.innerHTML = renderStoryNav(activeStory);
  }

  // 注入页脚
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = renderFooter();
  }

  // 导航栏滚动效果
  const navBar = document.getElementById('navBar');
  if (navBar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    });
  }

  // 移动端菜单
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // 为 body 添加顶部间距
  document.body.style.paddingTop = 'var(--nav-height)';
}

// 获取 URL 参数
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// 元素淡入观察器
function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation();
});
