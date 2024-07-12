const VIDEO_LINK = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';

const iframe = document.querySelector('.about-us__video');
const playButton = document.querySelector('.about-us__play-button');

iframe.removeAttribute('src');
playButton.style.display = 'block';

const startVideo = () => {
  playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    iframe.setAttribute('src', VIDEO_LINK);
  });
};

export { startVideo };
