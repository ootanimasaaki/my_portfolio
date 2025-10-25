import { userDetails } from './user-details.js';

document.addEventListener('DOMContentLoaded', function() {
    const userInfoContainer = document.querySelector('.user-info');
    const maxCards = 5; // 最大表示カード数
    const slideInterval = 5000; // スライド間隔（ミリ秒）
    let currentDisplayedUsers = new Set(); // 現在表示されているユーザーIDを追跡

    // 初期表示
    renderUserCards();

    // 自動スライドを開始
    setInterval(() => {
        slideUserCards();
    }, slideInterval);

    // ユーザーカードをスライドさせる関数
    function slideUserCards() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * userDetails.length);
        } while (currentDisplayedUsers.has(userDetails[randomIndex].id));

        const newCard = createUserCard(userDetails[randomIndex], -1); // 新しいカードはインデックス-1とする

        // 最後のカードをフェードアウトして削除
        const lastCard = userInfoContainer.lastElementChild;
        lastCard.style.opacity = '0';
        setTimeout(() => {
            userInfoContainer.removeChild(lastCard);

            // 新しいカードを一番上に追加
            userInfoContainer.insertBefore(newCard, userInfoContainer.firstChild);

            // 現在表示されているユーザーIDセットを更新
            currentDisplayedUsers.delete(lastCard.dataset.userId);
            currentDisplayedUsers.add(userDetails[randomIndex].id);

            // 最新のカードの時間表示を「たった今」にする
            const timeAgoElement = newCard.querySelector('.user-info-side p:first-child');
            fadeInOut(timeAgoElement, 'たった今');

            // 残りのカードの時間表示を「数分前」にする
            const otherTimeAgoElements = Array.from(userInfoContainer.querySelectorAll('.user-info-side p:first-child'));
            otherTimeAgoElements.forEach(element => {
                if (element !== timeAgoElement) {
                    fadeInOut(element, '数分前');
                }
            });

            // カードの並び替え
            Array.from(userInfoContainer.children).forEach((card, index) => {
                card.dataset.index = index; // インデックスを更新
            });
        }, 500); // フェードアウト後、0.5秒後に削除
    }

    // ユーザーカードを生成する関数
// ユーザーカードを生成する関数
// ユーザーカードを生成する関数
function createUserCard(user, index) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    userCard.dataset.userId = user.id;
    userCard.dataset.index = index;

    const userImage = document.createElement('img');
    userImage.src = `image/${user.image}`;
    userImage.alt = `User ${user.id}`;
    userImage.classList.add('user-image');

    const userInfoMain = document.createElement('div');
    userInfoMain.classList.add('user-info-main');

    const userName = document.createElement('h3');
    userName.textContent = user.name;
    userName.classList.add('user-name');

    const userDetail = document.createElement('p');
    userDetail.textContent = user.introduction; // introductionプロパティを使用する
    userDetail.classList.add('user-detail');

    userInfoMain.appendChild(userName);
    userInfoMain.appendChild(userDetail);

    const userInfoSide = document.createElement('div');
    userInfoSide.classList.add('user-info-side');

    const timeAgo = document.createElement('p');
    timeAgo.textContent = '数分前'; // 初期表示は「数分前」
    timeAgo.classList.add('time-ago');

    const talkButton = document.createElement('a');
    talkButton.classList.add('talk-button');
    talkButton.textContent = '💬トークする';
    //talkButton.href = 'http://piasukai.xyz/line/ch/friends-info/';
    talkButton.href = 'ここにURL/friends-info/';
    userInfoSide.appendChild(timeAgo);
    userInfoSide.appendChild(talkButton);

    userCard.appendChild(userImage);
    userCard.appendChild(userInfoMain);
    userCard.appendChild(userInfoSide);

    return userCard;
}

    // 初期表示の関数
    function renderUserCards() {
        const randomIndexes = generateRandomIndexes(maxCards);
        randomIndexes.forEach((index, idx) => {
            const user = userDetails[index];
            const userCard = createUserCard(user, idx);
            userInfoContainer.appendChild(userCard);
            currentDisplayedUsers.add(user.id);
        });
    }

    // 指定された数のランダムインデックスを生成する関数
    function generateRandomIndexes(count) {
        const indexes = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * userDetails.length);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    }

    // テキストのフェードイン・アウトを管理する関数
    function fadeInOut(element, text) {
        element.textContent = text;
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    }
});
