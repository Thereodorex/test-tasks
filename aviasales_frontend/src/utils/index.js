export const parseDuration = duration => `${Math.floor(duration / 60)}ч ${duration % 60}м`;

const getTime = date => date.toLocaleTimeString([], {timeStyle: 'short'});

export const parseDate = (date, duration) => {
  const dateStart = new Date(date);
  const dateEnd = new Date(dateStart.getTime() + duration * 60000);

  return `${getTime(dateStart)} - ${getTime(dateEnd)}`;
  // было 
  // return `${dateStart.getHours().toString().padStart(2, '0')}:${dateStart.getMinutes().toString().padStart(2, '0')} - 
  //         ${dateEnd.getHours().toString().padStart(2, '0')}:${dateEnd.getMinutes().toString().padStart(2, '0')}`;
}

export const declens = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  let res = `${number} `;
  if (number % 100 > 4 && number % 100 < 20) {
    res += words[2];
  } else if (number % 10 < 5) {
    res += words[cases[number % 10]];
  } else {
    res += words[2];
  }
  return res;
  // ??? или так
  // return `${number} ${words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ]}`;
}

export const parsePrice = price => {
  return `${price.toLocaleString()} P`;
}