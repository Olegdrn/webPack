import { DateTime } from "luxon";
const resultForm = document.getElementById('datecalc__result');

export const dateCulc = (firstDate, secondDate) => {
  if (!firstDate || !secondDate) {
    resultForm.innerHTML = "Введите даты"
  } else {
    const firstData = DateTime.fromISO(firstDate);
    const secondData = DateTime.fromISO(secondDate)
    const total = firstData.diff(secondData, ['years', 'months', 'days'])
      .toObject()
    console.log(total)
    resultForm.innerText = `Годы: ${total.years}; Месяцы: ${total.months}; Дни: ${total.days}`
  }
}

