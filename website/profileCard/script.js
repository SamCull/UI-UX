// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  // 'assets/profilePics/woman1.png',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/11.jpg',
  'https://randomuser.me/api/portraits/women/23.jpg',
  'https://randomuser.me/api/portraits/women/49.jpg',
  'https://randomuser.me/api/portraits/women/50.jpg',
  'https://randomuser.me/api/portraits/women/91.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/women/66.jpg',
  'https://randomuser.me/api/portraits/women/67.jpg',
  'https://randomuser.me/api/portraits/women/29.jpg',
  'https://randomuser.me/api/portraits/women/30.jpg',
  'https://randomuser.me/api/portraits/women/31.jpg',
  'https://randomuser.me/api/portraits/women/29.jpg',
  'https://randomuser.me/api/portraits/women/30.jpg',
  'https://randomuser.me/api/portraits/women/31.jpg',


/*
  'https://source.unsplash.com/random/1000x1000/?sky',
  'https://source.unsplash.com/random/1000x1000/?landscape',
  'https://source.unsplash.com/random/1000x1000/?ocean',
  'https://source.unsplash.com/random/1000x1000/?moutain',
  'https://source.unsplash.com/random/1000x1000/?forest',*/
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 15],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}