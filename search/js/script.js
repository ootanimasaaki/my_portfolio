// 詳細ページのURL
const DETAILS_PAGE_URL = 'http://piasukai.xyz/line/ch/friends-info/';

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
