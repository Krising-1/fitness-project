const AbonementCost = {
  oneMonth: {
    coachRate: 5000,
    daytimeRate: 1700,
    fullDayRate: 2700,
  },
  sixMonth: {
    coachRate: 30000,
    daytimeRate: 10200,
    fullDayRate: 16200,
  },
  twelveMonth: {
    coachRate: 60000,
    daytimeRate: 20400,
    fullDayRate: 32400,
  },
};

const ABONEMENTS_TYPE = {
  abonementOneMonth: '1 месяц',
  abonementSixMonth: '6 месяцев',
  abonementTwelveMonth: '12 месяцев'
};

const Duration = {
  oneMonth: 0,
  sixMonth: 1,
  twelveMonth: 2,
};

const buttons = document.querySelectorAll('.abonements__duration-button');
const backgroundCost = document.querySelectorAll('.abonements__cost-background');
const currentCost = document.querySelectorAll('.abonements__cost-current');

const AbonementCostArray = [AbonementCost.oneMonth, AbonementCost.sixMonth, AbonementCost.twelveMonth];

const CostReplace = (array, currentDuration) => {
  array.forEach((element, index) => {
    const arr = Object.entries(AbonementCostArray[currentDuration]);
    element.innerHTML = arr[index][1];
  });
};

const priceChanger = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      buttons.forEach((element) => element.classList.remove('abonements__duration-button--active'));
      button.classList.add('abonements__duration-button--active');

      switch (evt.target.innerHTML) {
        case ABONEMENTS_TYPE.abonementOneMonth:
          CostReplace(backgroundCost, Duration.oneMonth);
          CostReplace(currentCost, Duration.oneMonth);
          break;
        case ABONEMENTS_TYPE.abonementSixMonth:
          CostReplace(backgroundCost, Duration.sixMonth);
          CostReplace(currentCost, Duration.sixMonth);
          break;
        case ABONEMENTS_TYPE.abonementTwelveMonth:
          CostReplace(backgroundCost, Duration.twelveMonth);
          CostReplace(currentCost, Duration.twelveMonth);
          break;
        default:
          CostReplace(backgroundCost, Duration.oneMonth);
          CostReplace(currentCost, Duration.oneMonth);
      }
    });
  });
};

export { priceChanger };
