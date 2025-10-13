import { imageFiles } from './images.js';

document.addEventListener('DOMContentLoaded', () => {
  const gpsButton = document.querySelector('.gps-search-btn');
  const profileImagesContainer = document.querySelector('.profile-images-container');
  const searchResultTextContainer = document.querySelector('.search-result-text');

  gpsButton.addEventListener('click', handleGpsButtonClick);

  function handleGpsButtonClick() {
    addLoadingState(gpsButton);

    setTimeout(() => {
      displayShuffledImages();
      removeLoadingState(gpsButton);
      displaySearchResultText(); // メッセージを表示する
    }, 2000);
  }

  function displayShuffledImages() {
    profileImagesContainer.innerHTML = '';

    const shuffledImages = shuffleArray(imageFiles);
    const selectedImages = shuffledImages.slice(0, 9);

    selectedImages.forEach(createAndAppendProfileImage);
  }

  function displaySearchResultText() {
    searchResultTextContainer.style.display = 'block'; // メッセージを表示する
  }

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function createAndAppendProfileImage(imageData) {
    const { fileName, name, additionalText, url } = imageData;
    const container = createProfileImageElement(fileName, name, additionalText, url);
    profileImagesContainer.appendChild(container);
  }

  function createProfileImageElement(fileName, name, additionalText, url) {
    const img = createImageElement(fileName, name);
    const container = createProfileContainer(img, name, additionalText, url);
    return container;
  }

  function createImageElement(fileName, name) {
    const img = document.createElement('img');
    img.src = `images/${fileName}`;
    img.alt = name;
    img.classList.add('profile-image');
    return img;
  }

  function createProfileContainer(img, name, additionalText, url) {
    const container = document.createElement('div');
    container.classList.add('profile-container');
    container.appendChild(img);
    container.appendChild(createNameElement(name));
    if (additionalText) {
      container.appendChild(createAdditionalTextElement(additionalText));
    }
    container.addEventListener('click', () => {
      window.location.href = url;
    });
    return container;
  }

  function createNameElement(name) {
    const nameElement = document.createElement('h3');
    nameElement.textContent = name;
    return nameElement;
  }

  function createAdditionalTextElement(additionalText) {
    const additionalTextElement = document.createElement('p');
    additionalTextElement.textContent = additionalText;
    return additionalTextElement;
  }

  function addLoadingState(element) {
    element.classList.add('loading');
    element.disabled = true;
    element.textContent = ''; // テキストをクリア
  }

  function removeLoadingState(element) {
    element.classList.remove('loading');
    element.disabled = false;
    element.textContent = 'GPS検索する'; // 元のテキストに戻す
  }
});
