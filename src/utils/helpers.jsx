export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function loadStars(stars) {
  const calculatedStars = [];

  for (let i = 0; i < Math.floor(stars); i++) {
    calculatedStars.push(
      <img key={i} src="/img/full-star.svg" alt="full star" />,
    );
  }

  if (stars === 5) {
    return calculatedStars;
  }

  if (Number.isInteger(stars)) {
    for (let i = 0; i < 5 - stars; i++) {
      calculatedStars.push(
        <img
          key={i + Math.floor(stars)}
          src="/img/empty-star.svg"
          alt="empty star"
        />,
      );
    }
  } else {
    calculatedStars.push(
      <img key={Math.floor(stars)} src="/img/half-star.svg" alt="half star" />,
    );
    for (let i = 0; i < 4 - Math.floor(stars); i++) {
      calculatedStars.push(
        <img
          key={i + Math.floor(stars)}
          src="/img/empty-star.svg"
          alt="empty star"
        />,
      );
    }
  }

  return calculatedStars;
}
