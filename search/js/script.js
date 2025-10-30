// 詳細ページのURL
//const DETAILS_PAGE_URL = 'https://39iimono.jp/lp/rich/friends-info/';
const DETAILS_PAGE_URL = 'https://ootanimasaaki.github.io/my_portfolio/search/';
// URLを生成する関数
function generateUrl(imgSrc) {
  return `${DETAILS_PAGE_URL}?src=${imgSrc}`;
}

// バナーリンクのクリックイベントハンドラ
function handleBannerClick(event) {
  const clickedLink = event.currentTarget;
  const imgSrc = clickedLink.querySelector('img').src;
  const url = generateUrl(imgSrc);
  window.location.href = url;
}

// バナーリンクにイベントリスナーを設定
const bannerLinks = document.querySelectorAll('.banner-link');
bannerLinks.forEach(link => link.addEventListener('click', handleBannerClick));
