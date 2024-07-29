const videoLink = document.querySelector('.about-us__link');
const button = document.querySelector('.about-us__play-button');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.classList.add('about-us__video');
  iframe.setAttribute('title', 'Видео о нашем спорт зале');
  iframe.setAttribute('src', videoLink.dataset.href);
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
  iframe.setAttribute('allowfullscreen', '');
  videoLink.appendChild(iframe);
};

const startVideo = () => {
  videoLink.addEventListener('click', () => {
    videoLink.removeAttribute('href');
    button.remove();
    createIframe();
  });
};

export { startVideo };
