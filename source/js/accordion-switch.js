import { FaqContent, ClassList } from './question-answer-content.js';

const listQuestions = document.querySelectorAll('.faq__info-item');
const categoryButtons = document.querySelectorAll('.faq__button');

const accordionOpener = () => {
  listQuestions.forEach((element) => {
    const button = element.querySelector('button');

    button.addEventListener('click', () => {
      if (element.classList.contains('faq__info-item--active')) {
        element.classList.remove('faq__info-item--active');
      } else {
        element.classList.add('faq__info-item--active');
      }
    });
  });
};

const contentSwitcher = () => {
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      categoryButtons.forEach((element) => {
        element.classList.remove('faq__button--active');
      });
      button.classList.add('faq__button--active');

      let category;
      let order = 0;

      switch (button.classList[1]) {
        case ClassList.center:
          category = 'Center';
          break;
        case ClassList.subscription:
          category = 'Subscription';
          break;
        case ClassList.services:
          category = 'Services';
          break;
        case ClassList.rules:
          category = 'Rules';
          break;
        default:
      }

      const answerArr = Object.values(FaqContent[category]);

      listQuestions.forEach((element) => {
        element.querySelector('h3').innerHTML = answerArr[order].title;
        element.querySelector('p').innerHTML = answerArr[order].description;
        order++;
      });

    });
  });
};

const faqInteract = () => {
  accordionOpener();
  contentSwitcher();
};

export { faqInteract };
